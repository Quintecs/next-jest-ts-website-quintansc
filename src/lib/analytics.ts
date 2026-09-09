import { track } from "@vercel/analytics";
import type { BeforeSendEvent } from "@vercel/analytics/next";
import type { solutionOptions } from "./contact";
import { trackMetaEvent } from "./meta-pixel";

// Keep the event contract independent of the analytics provider.
// Only catalog values and UI identifiers belong here, never form text or URLs.
export type AnalyticsEvent =
  | { name: "contact_click"; properties: { location: string; channel: "form" | "whatsapp" } }
  | { name: "solution_click"; properties: { solution: string; location: string } }
  | { name: "contact_form_start"; properties: { form: "contact" } }
  | { name: "contact_brief_prepared"; properties: { solution: typeof solutionOptions[number] } }
  | { name: "project_click"; properties: { project: string; destination: "details" | "repository" } }
  | { name: "project_filter"; properties: { filter: "all" | "front" | "back" } }
  | { name: "social_click"; properties: { network: string } }
  | { name: "whatsapp_example_select"; properties: { segment: string } }
  | { name: "whatsapp_flow_step"; properties: { step: number; label: string } };

export function analyticsEnabled(): boolean {
  return process.env.NODE_ENV === "production"
    && (process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER ?? "vercel") === "vercel";
}

export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === "undefined" || process.env.NODE_ENV !== "production") return;

  if (analyticsEnabled() && process.env.NEXT_PUBLIC_ANALYTICS_CUSTOM_EVENTS !== "false") {
    try {
      track(event.name, event.properties);
    } catch {
      // A provider failure must not prevent delivery to the other providers.
    }
  }
  trackMetaEvent(event);
}

export function sanitizeAnalyticsEvent(event: BeforeSendEvent): BeforeSendEvent | null {
  try {
    const url = new URL(event.url);
    url.search = "";
    url.hash = "";
    return { ...event, url: url.toString() };
  } catch {
    return null;
  }
}
