'use client';

import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';
import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-web';
import { registerInstrumentations } from '@opentelemetry/instrumentation';

export function initializeTelemetry() {
    if (typeof window === 'undefined') return;

    const provider = new WebTracerProvider();

    // In a real production env, you would use OTLPTraceExporter
    // import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
    // const exporter = new OTLPTraceExporter({ url: 'YOUR_COLLECTOR_URL' });

    // For demo/dev purposes, we log to console
    const exporter = new ConsoleSpanExporter();

    provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
    provider.register();

    registerInstrumentations({
        instrumentations: [
            getWebAutoInstrumentations({
                // load custom configuration for xml-http-request instrumentation
                '@opentelemetry/instrumentation-xml-http-request': {
                    propagateTraceHeaderCorsUrls: [
                        /.+/g, // propagate trace header to all urls
                    ],
                },
                // load custom configuration for fetch instrumentation
                '@opentelemetry/instrumentation-fetch': {
                    propagateTraceHeaderCorsUrls: [
                        /.+/g, // propagate trace header to all urls
                    ],
                },
            }),
        ],
    });

    console.log('Telemetry initialized');
}
