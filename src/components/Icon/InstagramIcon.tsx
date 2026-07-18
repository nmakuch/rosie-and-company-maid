import type { SVGProps } from "react";

export default function InstagramIcon(
    props: SVGProps<SVGSVGElement>
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            fill="none"
            aria-hidden="true"
            {...props}
        >
            <circle
                cx="20"
                cy="20"
                r="19"
                stroke="#1c1c1c"
                strokeWidth="2"
            />

            <rect
                x="11"
                y="11"
                width="18"
                height="18"
                rx="4"
                stroke="#1c1c1c"
                strokeWidth="2"
            />

            <circle
                cx="20"
                cy="20"
                r="4.5"
                stroke="#1c1c1c"
                strokeWidth="2"
            />

            <circle
                cx="25.5"
                cy="14.5"
                r="1.25"
                fill="#1c1c1c"
            />
        </svg>
    );
}