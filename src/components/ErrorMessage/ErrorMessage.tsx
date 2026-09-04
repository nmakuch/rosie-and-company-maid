import type { ReactNode } from "react";

import Icon from "../Icon/Icon";
import styles from "./ErrorMessage.module.css";

type ErrorMessageProps = {
    children: ReactNode;
};

export default function ErrorMessage({
    children,
}: ErrorMessageProps) {
    return (
        <div
            className={styles.errorMessage}
            role="alert"
        >
            <Icon
                name="error"
                width={20}
                height={20}
                aria-hidden="true"
                focusable="false"
            />

            <p>{children}</p>
        </div>
    );
}