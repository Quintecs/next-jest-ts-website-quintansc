"use client";

import { Analytics } from "@vercel/analytics/next";
import { analyticsEnabled, sanitizeAnalyticsEvent } from "@/lib/analytics";
import { getMetaPixelId } from "@/lib/meta-pixel";
import MetaPixel from "./meta-pixel";

export default function SiteAnalytics() {
  return <>
    {analyticsEnabled() && <Analytics beforeSend={sanitizeAnalyticsEvent} />}
    {getMetaPixelId() && <MetaPixel />}
  </>;
}
