import type { SVGProps } from "react";

export default function CheckmarkIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            {...props}
        >
            <circle
                cx="10"
                cy="10"
                r="9"
                stroke="#004CFF"
                strokeWidth="2"
            />
            <path
                d="M6 10.2L8.8 13L14 7.8"
                stroke="#004CFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}