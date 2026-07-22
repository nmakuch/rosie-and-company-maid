import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToLocation() {
    const {
        pathname,
        hash,
        key,
    } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });

            return;
        }

        const sectionId = decodeURIComponent(hash.slice(1));

        const animationFrame = requestAnimationFrame(() => {
            const section = document.getElementById(sectionId);

            section?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [pathname, hash, key]);

    return null;
}