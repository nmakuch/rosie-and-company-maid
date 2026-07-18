import styles from "../BookingForm.module.css";
import Button from "../../Button/Button";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import { timeOptions } from "../bookingOptions";

import type { FormStepProps } from "../stepTypes";


export default function TimeStep({
    register,
    errors,
    onNext,
    onBack,
}: FormStepProps) {
    return (
        <div className={styles.formStep}>
            <h2>What time would you like your cleaning done?</h2>

            <p className={styles.supportingText}>
                Choose your preferred cleaning time, and we'll confirm availability before finalizing your cleaning appointment.
            </p>

            <fieldset className={styles.inputContainer}>
                <legend>Preferred appointment time</legend>

                <p className={styles.hintText}>
                    Note: Your requested time is subject to availability.
                </p>

                {errors.time && (
                    <ErrorMessage>
                        {errors.time.message}
                    </ErrorMessage>
                )}

                <div className={styles.selectionGroup}>
                    {timeOptions.map(({ id, label }) => (
                        <div
                            className={styles.selectionOption}
                            key={id}
                        >
                            <input
                                {...register("time")}
                                className={styles.selectionInput}
                                id={id}
                                type="radio"
                                value={label}
                            />

                            <label
                                className={`${styles.selectionLabel} ${styles.selectionLabelNoPrice}`}
                                htmlFor={id}
                            >
                                <span className={styles.selectionControl} />

                                <span className={styles.selectionContent}>
                                    <span className={styles.selectionTitle}>
                                        {label}
                                    </span>
                                </span>
                            </label>
                        </div>
                    ))}
                </div>
            </fieldset>

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