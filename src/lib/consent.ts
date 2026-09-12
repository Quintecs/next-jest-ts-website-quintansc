export const CONSENT_KEY = "quintec:privacy:v1";
export const CONSENT_EVENT = "quintec:privacy-change";
export const PREFERENCES_EVENT = "quintec:privacy-open";
export const CONSENT_DAYS = 180;
const MAX_AGE = CONSENT_DAYS * 24 * 60 * 60 * 1000;

export type ConsentChoices = { analytics: boolean; marketing: boolean };
export type Consent = ConsentChoices & { version: 1; savedAt: number; expiresAt: number };
let sessionChoice: string | null = null;
let memoryOnly = false;

export function parseConsent(raw: string | null): Consent | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw);
    if (value?.version !== 1 || typeof value.analytics !== "boolean" || typeof value.marketing !== "boolean"
      || !Number.isFinite(value.savedAt) || !Number.isFinite(value.expiresAt)
      || value.savedAt > Date.now() || value.expiresAt <= Date.now()
      || value.expiresAt <= value.savedAt || value.expiresAt - value.savedAt > MAX_AGE) return null;
    return value;
  } catch { return null; }
}

export function consentSnapshot(): string | null {
  if (typeof window === "undefined") return null;
  let raw = sessionChoice;
  try { if (!memoryOnly) raw = window.localStorage.getItem(CONSENT_KEY); } catch { /* Use this visit's choice if storage is blocked. */ }
  return parseConsent(raw) ? raw : null;
}

export function hasConsent(category: keyof ConsentChoices): boolean {
  return parseConsent(consentSnapshot())?.[category] === true;
}

export function saveConsent(choices: ConsentChoices): void {
  const savedAt = Date.now();
  const raw = JSON.stringify({ version: 1, analytics: choices.analytics, marketing: choices.marketing, savedAt, expiresAt: savedAt + MAX_AGE });
  sessionChoice = raw;
  try { window.localStorage.setItem(CONSENT_KEY, raw); memoryOnly = false; } catch { memoryOnly = true; }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function subscribeConsent(listener: () => void): () => void {
  let timer: ReturnType<typeof setTimeout>;
  const notify = () => {
    listener();
    clearTimeout(timer);
    const choice = parseConsent(consentSnapshot());
    if (choice) timer = setTimeout(notify, Math.min(choice.expiresAt - Date.now() + 1, 2_147_483_647));
  };
  const onStorage = (event: StorageEvent) => {
    if (event.key === CONSENT_KEY || event.key === null) { memoryOnly = false; notify(); }
  };
  window.addEventListener(CONSENT_EVENT, notify);
  window.addEventListener("storage", onStorage);
  window.addEventListener("focus", notify);
  notify();
  return () => {
    clearTimeout(timer);
    window.removeEventListener(CONSENT_EVENT, notify);
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("focus", notify);
  };
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(PREFERENCES_EVENT));
}
