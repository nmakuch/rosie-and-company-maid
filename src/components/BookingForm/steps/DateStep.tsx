import Button from "../../Button/Button";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import styles from "../BookingForm.module.css";

import type { FormStepProps } from "../stepTypes";

export default function DateStep({
    register,
    errors,
    onBack,
    onNext,
}: FormStepProps) {
    return (
        <div className={styles.formStep}>
            <h2>Which day works best?</h2>

            <p className={styles.supportingText}>
                Choose your preferred cleaning date. We&apos;ll confirm
                availability before your appointment is finalized.
            </p>

            <div className={styles.inputContainer}>
                <label htmlFor="date">
                    Preferred date
                </label>

                <p className={styles.hintText} id="date-hint">
                    Your requested date is subject to availability.
                </p>

                {errors.date && (
                    <ErrorMessage>
                        {errors.date.message}
                    </ErrorMessage>
                )}

                <input
                    {...register("date")}
                    type="date"
                    id="date"
                    aria-describedby="date-hint"
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