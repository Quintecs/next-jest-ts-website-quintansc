import { hasConsent } from "./consent";
import type { AnalyticsEvent } from "./analytics";

type PixelProperties = Record<string, string | number | boolean>;
type PixelCommand =
  | ["consent", "grant" | "revoke"]
  | ["set", "autoConfig", false, string]
  | ["init", string]
  | ["trackSingle", string, "PageView" | "Contact", PixelProperties]
  | ["trackSingleCustom", string, string, PixelProperties];

interface PixelFunction {
  (...args: PixelCommand): void;
  callMethod?: (...args: PixelCommand) => void;
  queue?: PixelCommand[];
  push?: PixelFunction;
  loaded?: boolean;
  version?: string;
  disablePushState?: boolean;
}

declare global {
  interface Window {
    fbq?: PixelFunction;
    _fbq?: PixelFunction;
    quintecMetaPixel?: { id: string; lastPath?: string; consentGranted?: boolean };
  }
}

export function getMetaPixelId(): string | null {
  const id = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();
  if (process.env.NODE_ENV !== "production"
    || process.env.NEXT_PUBLIC_META_PIXEL_ENABLED === "false"
    || !id || !/^\d+$/.test(id)) return null;
  return id;
}

function initializePixel() {
  const id = getMetaPixelId();
  if (!id || typeof window === "undefined" || !hasConsent("marketing")) return null;

  // The standard fbq queue retains actions while the async SDK is loading.
  if (!window.fbq) {
    const fbq: PixelFunction = (...args) => {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue?.push(args);
    };
    fbq.queue = [];
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    window.fbq = fbq;
    window._fbq ??= fbq;
  }

  const fbq = window.fbq;
  // Next.js owns pageview tracking; do not also track history automatically.
  fbq.disablePushState = true;
  if (window.quintecMetaPixel?.id !== id) {
    fbq("set", "autoConfig", false, id);
    fbq("init", id);
    window.quintecMetaPixel = { id };
  }

  if (!window.quintecMetaPixel.consentGranted) {
    fbq("consent", "grant");
    window.quintecMetaPixel.consentGranted = true;
  }

  if (!document.querySelector('script[src^="https://connect.facebook.net/"][src$="/fbevents.js"]')) {
    const script = document.createElement("script");
    script.id = "quintec-meta-pixel";
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  return { fbq, state: window.quintecMetaPixel };
}

export function trackMetaPageView(pathname: string): void {
  try {
    const pixel = initializePixel();
    if (!pixel || pixel.state.lastPath === pathname) return;
    pixel.fbq("trackSingle", pixel.state.id, "PageView", { page_path: pathname });
    // Survives remounts/StrictMode; returning from another route is a new visit.
    pixel.state.lastPath = pathname;
  } catch {
    // Ads measurement must not affect rendering or navigation.
  }
}

export function trackMetaEvent(event: AnalyticsEvent): void {
  try {
    const pixel = initializePixel();
    if (!pixel) return;
    if (event.name === "contact_click" && event.properties.channel === "whatsapp") {
      pixel.fbq("trackSingle", pixel.state.id, "Contact", event.properties);
    } else {
      pixel.fbq("trackSingleCustom", pixel.state.id, event.name, event.properties);
    }
  } catch {
    // Isolate this provider so Vercel and the original action still work.
  }
}

export function revokeMetaConsent(): void {
  if (typeof window === "undefined") return;
  try {
    // Discard pending measurements when the SDK has not loaded yet.
    if (window.fbq?.queue) window.fbq.queue = window.fbq.queue.filter(command => !command[0].startsWith("track"));
    window.fbq?.("consent", "revoke");
    if (window.quintecMetaPixel) {
      window.quintecMetaPixel.consentGranted = false;
      delete window.quintecMetaPixel.lastPath;
    }
  } catch { /* Keep enforcing our event gate even if the vendor SDK fails. */ }
  // Only first-party Meta cookies accessible from this host can be removed.
  const parts = window.location.hostname.split(".");
  const domains = ["", ...parts.map((_, index) => parts.slice(index).join("."))];
  for (const name of ["_fbp", "_fbc"]) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ""} SameSite=Lax`;
    }
  }
}
