import Button from "../../Button/Button";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import styles from "../BookingForm.module.css";

import type { CleaningOptionStepProps } from "../stepTypes";

export default function CleaningOptionStep({
    register,
    errors,
    onBack,
    onNext,
    cleaningType,
    options,
}: CleaningOptionStepProps) {
    const isHourly = cleaningType === "hourly";

    return (
        <div className={styles.formStep}>
            <h2>
                {isHourly
                    ? "How much cleaning time do you need?"
                    : "Which package works best?"}
            </h2>

            <p className={styles.supportingText}>
                {isHourly
                    ? "Choose the session length that best fits your home and the amount of cleaning you need."
                    : "Choose the package that best matches the level of cleaning your home needs."}
            </p>

            <fieldset
                className={styles.inputContainer}
                aria-describedby="cleaning-option-hint"
            >
                <legend>
                    {isHourly
                        ? "Choose a session length"
                        : "Choose a cleaning package"}
                </legend>

                <p
                    className={styles.hintText}
                    id="cleaning-option-hint"
                >
                    Your price estimate will update when you make a selection.
                </p>

                {errors.cleaningOption && (
                    <ErrorMessage>
                        {errors.cleaningOption.message}
                    </ErrorMessage>
                )}

                <div className={styles.selectionGroup}>
                    {options.map((option) => (
                        <div
                            className={styles.selectionOption}
                            key={option.id}
                        >
                            <input
                                {...register("cleaningOption")}
                                className={styles.selectionInput}
                                id={option.id}
                                type="radio"
                                value={option.value}
                            />

                            <label
                                className={styles.selectionLabel}
                                htmlFor={option.id}
                            >
                                <span className={styles.selectionControl} />

                                <span className={styles.selectionContent}>
                                    <span className={styles.selectionTitle}>
                                        {option.label}
                                    </span>
                                </span>

                                <span className={styles.selectionPrice}>
                                    ${option.price.toFixed(2)}
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