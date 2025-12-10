'use client';

import { useState, useRef } from 'react';

export default function MouseGlow() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMouseMove = (event) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="fixed inset-0 pointer-events-none z-0"
        >
            {/* Mouse Follow Glow */}
            <div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.1), transparent 40%)`
                }}
            />
        </div>
    );
}
