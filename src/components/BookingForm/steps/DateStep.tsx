import styles from "../BookingForm.module.css";
import Button from "../../Button/Button";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

import type { FormStepProps } from "../stepTypes";

export default function DateStep({
    errors,
    register,
    onBack,
    onNext
}: FormStepProps) {
    return (
        <div className={styles.formStep}>
            <h2>What day would you like your cleaning done?</h2>

            <p className={styles.supportingText}>
                Choose your preferred cleaning date, and we'll confirm availability before finalizing your cleaning appointment.
            </p>

            <div className={styles.inputContainer}>
                <label htmlFor="date">
                    Preferred appointment date
                </label>

                <p className={styles.hintText}>
                    Note: Your requested date is subject to availability.
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
                    name="date"
                />
            </div>

            <div className={styles.buttonContainer}>
                <Button
                    type="button"
                    onClick={onBack}
                    variant="secondary"
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