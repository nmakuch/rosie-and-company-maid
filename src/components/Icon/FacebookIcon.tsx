import type { SVGProps } from "react";

export default function FacebookIcon(
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

            <path
                d="M22.5 13H25V9.5H22.5C18.8 9.5 17 11.7 17 15V18H14V21.5H17V30H21V21.5H24.5L25 18H21V15.5C21 13.8 21.6 13 22.5 13Z"
                fill="#1c1c1c"
            />
        </svg>
    );
}