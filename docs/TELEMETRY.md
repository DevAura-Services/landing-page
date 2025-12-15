# Telemetry Implementation Guide

This document details the telemetry stack implemented in the Devaura website, including Google Analytics 4 (GA4), Meta Pixel, and OpenTelemetry (OTel).

## Overview

We use a layered approach to telemetry:
1.  **Marketing Analytics**: Google Analytics 4 & Meta Pixel for user behavior and conversion tracking.
2.  **Application Observability**: OpenTelemetry Web SDK for tracing frontend performance and errors.

## 1. Google Analytics 4 (GA4)

### Configuration
-   **Measurement ID**: `G-XXXXXXXXXX` (Replace with actual ID in `components/Analytics.js`)
-   **Implementation**: `next/script` strategy `afterInteractive`.

### Tracking
-   **Page Views**: Automatically tracked via `useEffect` hook in `components/Analytics.js` when `pathname` changes.
-   **Events**: Custom events can be dispatched using `window.gtag('event', <action>, { ...params })`.

## 2. Meta Pixel

### Configuration
-   **Pixel ID**: `0000000000000000` (Replace with actual ID in `components/Analytics.js`)
-   **Implementation**: Standard Pixel base code injected via `next/script`.

### Tracking
-   **Page Views**: `fbq('track', 'PageView')` triggered on route changes.
-   **Standard Events**: To track specific actions (e.g., 'Contact'), use `window.fbq('track', 'Contact')`.

## 3. OpenTelemetry (OTel)

### Architecture
We use the **OpenTelemetry Web SDK** to trace user interactions and HTTP requests from the browser.

### Initialization (`lib/telemetry.js`)
The telemetry is initialized only on the client-side (`typeof window !== 'undefined'`).

```javascript
const provider = new WebTracerProvider({
    resource: new Resource({
        [SEMRESATTRS_SERVICE_NAME]: 'devaura-landing-page',
    }),
});
```

### Auto-Instrumentation
We utilize `@opentelemetry/auto-instrumentations-web` to automatically capture:
-   **Document Load**: Page load timing and resources.
-   **User Interaction**: Clicks and other DOM events.
-   **XMLHttpRequest / Fetch**: Network request timings and headers.
    -   *Note*: Trace headers are propagated to all URLs (`/.+/g`) by default. Adjust this in production to specific API domains to avoid CORS issues.

### Exporter
-   **Current**: `ConsoleSpanExporter` (logs traces to browser console).
-   **Production**: Switch to `OTLPTraceExporter` to send data to an OTel Collector (e.g., Jaeger, Grafana Tempo, Honeycomb).

```javascript
// Example Production Config
const exporter = new OTLPTraceExporter({
    url: 'https://api.honeycomb.io/v1/traces',
    headers: { 'x-honeycomb-team': 'YOUR_API_KEY' }
});
```

## Setup Instructions

1.  **Environment Variables**:
    Create a `.env.local` file to store your IDs:
    ```bash
    NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id
    NEXT_PUBLIC_META_PIXEL_ID=your-pixel-id
    ```

2.  **Update `components/Analytics.js`**:
    Replace hardcoded placeholders with `process.env.NEXT_PUBLIC_...`.

3.  **Verify Setup**:
    -   Open Chrome DevTools > Console.
    -   Look for "Telemetry initialized".
    -   Check Network tab for calls to `google-analytics.com` and `facebook.com`.
    -   Interact with the page and observe spans logged to the console.
