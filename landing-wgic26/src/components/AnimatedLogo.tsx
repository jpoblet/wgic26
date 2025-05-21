"use client"

import { useEffect, useRef, useState } from "react";
import Image2 from "next/image";

interface AnimatedLogoProps {
    scrolled: boolean;
    visible: boolean;
}

const AnimatedLogo = ({ scrolled, visible }: AnimatedLogoProps) => {
    const logoFrames = [
        "/img/logo/logo1.svg",
        "/img/logo/logo2.svg",
        "/img/logo/logo3.svg",
        "/img/logo/logo4.svg",
        "/img/logo/logo5.svg",
    ];

    const [currentFrame, setCurrentFrame] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        logoFrames.forEach((src) => {
            const img = document.createElement("img");
            img.src = src;
        });
    }, []);


    const startAnimation = () => {
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setCurrentFrame((prev) => (prev + 1) % logoFrames.length);
        }, 400);
    };

    const stopAnimation = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setCurrentFrame(0);
    };

    const scaleClass = !scrolled
        ? "scale-140"
        : visible
            ? "scale-100"
            : "scale-100";

    return (
        <div
            className={`relative w-24 h-24 cursor-pointer transition-transform duration-500 ease-in-out ${scaleClass}`}
            onMouseEnter={startAnimation}
            onMouseLeave={stopAnimation}
        >
            <Image2
                key={logoFrames[currentFrame]}
                src={logoFrames[currentFrame]}
                alt="WGIC26 Logo"
                fill
                className="absolute inset-0 w-full h-full object-contain" />

        </div>
    );
};

export { AnimatedLogo };
