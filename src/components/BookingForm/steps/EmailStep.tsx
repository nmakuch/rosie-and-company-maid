import styles from "../BookingForm.module.css";
import Button from "../../Button/Button";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

import type { FormStepProps } from "../stepTypes";

export default function EmailStep({
    register,
    errors,
    onNext,
    onBack
}: FormStepProps) {
    return (
        <div className={styles.formStep}>
            <h2>What's your email?</h2>
            <p className={styles.supportingText}>
                We'll use this email address to confirm your booking and send appointment updates.
            </p>

            <div className={styles.inputContainer}>
                <label htmlFor="email">
                    Email address:
                </label>
                <p className={styles.hintText}>
                    Example: jane_doe@email.com
                </p>
                {errors.email && (
                    <ErrorMessage>
                        {errors.email.message}
                    </ErrorMessage>
                )}
                <input
                    {...register("email")}
                    placeholder="Email address"
                    id="email"
                    name="email"
                />
            </div>

            <div className={styles.buttonContainer}>
                <Button
                    variant="secondary"
                    type="button"
                    onClick={onBack}
                >
                    Back
                </Button>
                <Button
                    variant="primary"
                    type="button"
                    onClick={onNext}
                >
                    Continue
                </Button>
            </div>
        </div>
    )
}