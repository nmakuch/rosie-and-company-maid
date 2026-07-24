import Button from "../../Button/Button";
import styles from "../BookingForm.module.css";
import type { StartStepProps } from "../stepTypes";

export default function StartStep({
    onStart,
}: StartStepProps) {
    return (
        <div className={styles.startPage}>
            <img
                className={styles.startImage}
                src="/images/booking_form/booking-form-start.png"
                alt=""
            />

            <h1>Let's book your appointment</h1>

            <p className={styles.intro}>
                Tell us a little about your home and the cleaning service
                you're looking for. We'll guide you through a few simple
                steps to gather the information we need, and the entire
                booking process should only take a couple of minutes to
                complete.
            </p>

            <div className={styles.buttonContainer}>
                <Button
                    variant="secondary"
                    to="/"
                >
                    Back
                </Button>

                <Button
                    variant="primary"
                    type="button"
                    onClick={onStart}
                >
                    Get started
                </Button>
            </div>
        </div>
    );
}