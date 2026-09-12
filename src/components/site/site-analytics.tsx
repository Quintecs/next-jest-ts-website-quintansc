"use client";

import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { analyticsEnabled, sanitizeAnalyticsEvent, sanitizePerformanceEvent } from "@/lib/analytics";
import { getMetaPixelId, revokeMetaConsent } from "@/lib/meta-pixel";
import { hasConsent, subscribeConsent } from "@/lib/consent";
import { useConsent } from "./cookie-consent";
import MetaPixel from "./meta-pixel";

export default function SiteAnalytics() {
  const consent = useConsent();
  // Also runs synchronously for changes made in this tab, and for storage changes
  // in other tabs. Loaded SDKs must respect withdrawal as well as initial refusal.
  useEffect(() => subscribeConsent(() => {
    if (!hasConsent("marketing")) revokeMetaConsent();
  }), []);

  return <>
    {consent?.analytics && analyticsEnabled() && <Analytics beforeSend={sanitizeAnalyticsEvent} />}
    {consent?.analytics && process.env.NODE_ENV === "production" && <SpeedInsights beforeSend={sanitizePerformanceEvent} />}
    {consent?.marketing && getMetaPixelId() && <MetaPixel />}
  </>;
}
