import Button from "../../Button/Button";
import styles from "../BookingForm.module.css";

type ConfirmationStepProps = {
    onStartOver: () => void;
    email: string;
};

export default function ConfirmationStep({
    onStartOver,
    email,
}: ConfirmationStepProps) {
    return (
        <div
            className={styles.formStep}
            role="status"
            aria-live="polite"
        >
            <h2>We&apos;ve received your request</h2>

            <p className={styles.supportingText}>
                Thanks for booking with Rosie &amp; Company. We&apos;ll
                contact you at <strong>{email}</strong> shortly to confirm
                your requested date and arrival time.
            </p>

            <div className={styles.buttonContainer}>
                <Button variant="secondary" to="/">
                    Return home
                </Button>

                <Button
                    variant="primary"
                    type="button"
                    onClick={onStartOver}
                >
                    Book another cleaning
                </Button>
            </div>
        </div>
    );
}