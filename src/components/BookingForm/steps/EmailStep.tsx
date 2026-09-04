import Button from "../../Button/Button";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import styles from "../BookingForm.module.css";

import type { FormStepProps } from "../stepTypes";

export default function EmailStep({
    register,
    errors,
    onBack,
    onNext,
}: FormStepProps) {
    return (
        <div className={styles.formStep}>
            <h2>What&apos;s your email?</h2>

            <p className={styles.supportingText}>
                We&apos;ll use your email address to confirm your booking
                and send important updates about your appointment.
            </p>

            <div className={styles.inputContainer}>
                <label htmlFor="email">
                    Email address
                </label>

                <p className={styles.hintText} id="email-hint">
                    Example: jane@email.com
                </p>

                {errors.email && (
                    <ErrorMessage>
                        {errors.email.message}
                    </ErrorMessage>
                )}

                <input
                    {...register("email")}
                    type="email"
                    id="email"
                    placeholder="jane@email.com"
                    autoComplete="email"
                    inputMode="email"
                    aria-describedby="email-hint"
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
    );
}