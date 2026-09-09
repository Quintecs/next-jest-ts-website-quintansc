"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type TrackingProps = { analyticsEvent?: AnalyticsEvent };

function recordClick(event: MouseEvent<HTMLAnchorElement>, analyticsEvent?: AnalyticsEvent) {
  if (!event.defaultPrevented && analyticsEvent) trackEvent(analyticsEvent);
}

export default function TrackedLink({ analyticsEvent, onClick, onAuxClick, ...props }: ComponentProps<typeof Link> & TrackingProps) {
  return <Link {...props} onClick={event => {
    onClick?.(event);
    recordClick(event, analyticsEvent);
  }} onAuxClick={event => {
    onAuxClick?.(event);
    if (event.button === 1) recordClick(event, analyticsEvent);
  }} />;
}

export function TrackedAnchor({ analyticsEvent, onClick, onAuxClick, ...props }: ComponentProps<"a"> & TrackingProps) {
  return <a {...props} onClick={event => {
    onClick?.(event);
    recordClick(event, analyticsEvent);
  }} onAuxClick={event => {
    onAuxClick?.(event);
    if (event.button === 1) recordClick(event, analyticsEvent);
  }} />;
}
