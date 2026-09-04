import Button from "../../Button/Button";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import styles from "../BookingForm.module.css";

import { timeOptions } from "../bookingOptions";
import type { FormStepProps } from "../stepTypes";

export default function TimeStep({
    register,
    errors,
    onBack,
    onNext,
}: FormStepProps) {
    return (
        <div className={styles.formStep}>
            <h2>What time works best?</h2>

            <p className={styles.supportingText}>
                Choose your preferred arrival window. We&apos;ll confirm
                availability before your appointment is finalized.
            </p>

            <fieldset
                className={styles.inputContainer}
                aria-describedby="time-hint"
            >
                <legend>Preferred arrival time</legend>

                <p className={styles.hintText} id="time-hint">
                    Your requested time is subject to availability.
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