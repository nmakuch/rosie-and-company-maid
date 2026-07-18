import type React from "react";
import styles from "./ErrorMessage.module.css";
import Icon from "../Icon/Icon";

type ErrorMessageProps = {
    children: React.ReactNode;
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
    return (
        <div className={styles.errorMessage}>
            <Icon name="error" height={24} width={24} /><p>{children}</p>
        </div>
    )
}