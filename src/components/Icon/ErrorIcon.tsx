import type { SVGProps } from "react";

export default function ErrorIcon(
    props: SVGProps<SVGSVGElement>
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            fill="#C2410C"
            {...props}
        >
            <circle
                cx="20"
                cy="20"
                r="18"
                fill="none"
                stroke="#C2410C"
                strokeWidth="4"
            />

            <path d="M20 10a2 2 0 0 1 2 2v8a2 2 0 1 1-4 0v-8a2 2 0 0 1 2-2Z" />

            <circle cx="20" cy="28" r="2" />
        </svg>

    );
}