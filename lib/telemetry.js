'use client';

import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';
import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-web';
import { registerInstrumentations } from '@opentelemetry/instrumentation';

export function initializeTelemetry() {
    if (typeof window === 'undefined') return;

    try {
        const provider = new WebTracerProvider();
        
        // In a real production env, you would use OTLPTraceExporter
        // const exporter = new OTLPTraceExporter({ url: 'YOUR_COLLECTOR_URL' });
        
        // For demo/dev purposes, we log to console
        const exporter = new ConsoleSpanExporter();
        
        // Verify method exists before calling
        if (typeof provider.addSpanProcessor === 'function') {
            provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
        } else {
             console.warn('WebTracerProvider does not have addSpanProcessor method');
        }

        provider.register();

        registerInstrumentations({
            instrumentations: [
                getWebAutoInstrumentations({
                    '@opentelemetry/instrumentation-xml-http-request': {
                        propagateTraceHeaderCorsUrls: [/.+/g],
                    },
                    '@opentelemetry/instrumentation-fetch': {
                        propagateTraceHeaderCorsUrls: [/.+/g],
                    },
                }),
            ],
        });

        console.log('Telemetry initialized');
    } catch (error) {
        console.error('Failed to initialize telemetry:', error);
    }
}
