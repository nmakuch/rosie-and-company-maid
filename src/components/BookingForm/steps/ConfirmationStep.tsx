import styles from "../BookingForm.module.css";
import Button from "../../Button/Button";

type ConfirmationStepProps = {
    onStartOver: () => void;
    email: string;
};

export default function ConfirmationStep({
    onStartOver,
    email
}: ConfirmationStepProps) {
    return (
        <div className={styles.formStep}>
            <h2>Your booking request has been received</h2>

            <p className={styles.supportingText}>
                We've received your cleaning request <strong>{email}</strong>. We'll contact you
                shortly to confirm your requested appointment.
            </p>

            <div className={styles.buttonContainer}>
                <Button
                    variant="primary"
                    type="button"
                    onClick={onStartOver}
                >
                    Back to start
                </Button>
            </div>
        </div>
    );
}