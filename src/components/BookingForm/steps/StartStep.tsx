import Button from "../../Button/Button";
import styles from "../BookingForm.module.css";
import type { StartStepProps } from "../stepTypes";

export default function StartStep({
    onStart,
}: StartStepProps) {
    return (
        <div className={styles.startPage}>
            <h1>Book an appointment</h1>

            <p className={styles.intro}>
                Tell us a little about your home and the cleaning service
                you&apos;re looking for. We&apos;ll guide you through a few
                simple steps to gather the information we need.
            </p>

            <ul className={styles.startDetails}>
                <li>
                    Choose the cleaning service that works best for your home.
                </li>

                <li>
                    See your estimated price update as you make selections.
                </li>

                <li>
                    Review all of your booking details before submitting.
                </li>
            </ul>

            <div className={styles.buttonContainer}>
                <Button variant="secondary" to="/">
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