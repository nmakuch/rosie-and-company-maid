import styles from "../BookingForm.module.css";
import Button from "../../Button/Button";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

import type { CleaningTypeStepProps } from "../stepTypes";

export default function CleaningTypeStep({
    register,
    errors,
    onNext,
    onBack,
    setValue
}: CleaningTypeStepProps) {

    const cleaningTypeField = register("cleaningType");

    const handleCleaningTypeChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        cleaningTypeField.onChange(event);

        setValue("cleaningOption", "", {
            shouldValidate: false,
        });
    };

    return (
        <div className={styles.formStep}>
            <h2>What kind of cleaning plan would you like?</h2>

            <p className={styles.supportingText}>
                Choose the cleaning plan that works best for your home, whether
                that's an hourly session or a pre-set package.
            </p>

            <fieldset className={styles.inputContainer}>
                <legend>Choose your plan type</legend>

                <p className={styles.hintText}>
                    Hourly sessions offer flexibility, while pre-set packages provide a complete cleaning at a fixed price.
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
                                    Hourly
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
                                    Pre-set package
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
    )
}