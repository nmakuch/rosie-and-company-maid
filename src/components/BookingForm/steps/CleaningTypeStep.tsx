import type { ChangeEvent } from "react";

import Button from "../../Button/Button";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import styles from "../BookingForm.module.css";

import type { CleaningTypeStepProps } from "../stepTypes";

export default function CleaningTypeStep({
    register,
    errors,
    onBack,
    onNext,
    setValue,
}: CleaningTypeStepProps) {
    const cleaningTypeField = register("cleaningType");

    const handleCleaningTypeChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        cleaningTypeField.onChange(event);

        setValue("cleaningOption", "", {
            shouldValidate: false,
            shouldDirty: true,
        });
    };

    return (
        <div className={styles.formStep}>
            <h2>How would you like to book?</h2>

            <p className={styles.supportingText}>
                Choose between a flexible hourly cleaning or a fixed-price
                package designed around the level of cleaning you need.
            </p>

            <fieldset
                className={styles.inputContainer}
                aria-describedby="cleaning-type-hint"
            >
                <legend>Choose a cleaning plan</legend>

                <p
                    className={styles.hintText}
                    id="cleaning-type-hint"
                >
                    You&apos;ll choose a duration or package on the next step.
                </p>

                {errors.cleaningType && (
                    <ErrorMessage>
                        {errors.cleaningType.message}
                    </ErrorMessage>
                )}

                <div className={styles.selectionGroup}>
                    <div className={styles.selectionOption}>
                        <input
                            {...cleaningTypeField}
                            className={styles.selectionInput}
                            id="plan-hourly"
                            type="radio"
                            value="hourly"
                            onChange={handleCleaningTypeChange}
                        />

                        <label
                            className={`${styles.selectionLabel} ${styles.selectionLabelNoPrice}`}
                            htmlFor="plan-hourly"
                        >
                            <span className={styles.selectionControl} />

                            <span className={styles.selectionContent}>
                                <span className={styles.selectionTitle}>
                                    Hourly cleaning
                                </span>

                                <span className={styles.selectionHint}>
                                    Choose the number of cleaning hours you need.
                                </span>
                            </span>
                        </label>
                    </div>

                    <div className={styles.selectionOption}>
                        <input
                            {...cleaningTypeField}
                            className={styles.selectionInput}
                            id="plan-package"
                            type="radio"
                            value="package"
                            onChange={handleCleaningTypeChange}
                        />

                        <label
                            className={`${styles.selectionLabel} ${styles.selectionLabelNoPrice}`}
                            htmlFor="plan-package"
                        >
                            <span className={styles.selectionControl} />

                            <span className={styles.selectionContent}>
                                <span className={styles.selectionTitle}>
                                    Fixed-price package
                                </span>

                                <span className={styles.selectionHint}>
                                    Choose a package based on the cleaning level.
                                </span>
                            </span>
                        </label>
                    </div>
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