import { Link } from "react-router-dom";
import styles from "./Button.module.css";

type ButtonProps = {
    children: React.ReactNode;
    variant: "primary" | "secondary";
    to?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
};

export default function Button({
    children,
    variant,
    to,
    type,
    onClick,
}: ButtonProps) {
    if (to) {
        return (
            <Link
                to={to}
                className={styles[variant]}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={styles[variant]}
            onClick={onClick}
        >
            {children}
        </button>
    );
}