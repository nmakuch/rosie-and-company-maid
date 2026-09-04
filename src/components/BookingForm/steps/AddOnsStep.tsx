import Button from "../../Button/Button";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import styles from "../BookingForm.module.css";

import { addOnOptions } from "../bookingOptions";
import type { AddOnsStepProps } from "../stepTypes";

export default function AddOnsStep({
    register,
    errors,
    onBack,
    onNext,
}: AddOnsStepProps) {
    return (
        <div className={styles.formStep}>
            <h2>Would you like any add-ons?</h2>

            <p className={styles.supportingText}>
                Customize your appointment with any additional cleaning
                services your home needs.
            </p>

            <fieldset
                className={styles.inputContainer}
                aria-describedby="add-ons-hint"
            >
                <legend>Optional add-ons</legend>

                <p className={styles.hintText} id="add-ons-hint">
                    Select as many as you need, or continue without choosing any.
                </p>

                {errors.addOns && (
                    <ErrorMessage>
                        {errors.addOns.message}
                    </ErrorMessage>
                )}

                <div className={styles.selectionGroup}>
                    {addOnOptions.map((addOn) => {
                        const id = `add-on-${addOn.value}`;

                        return (
                            <div
                                className={styles.selectionOption}
                                key={addOn.value}
                            >
                                <input
                                    {...register("addOns")}
                                    className={styles.selectionInput}
                                    id={id}
                                    type="checkbox"
                                    value={addOn.value}
                                />

                                <label
                                    className={styles.selectionLabel}
                                    htmlFor={id}
                                >
                                    <span className={styles.selectionControl} />

                                    <span className={styles.selectionContent}>
                                        <span className={styles.selectionTitle}>
                                            {addOn.label}
                                        </span>
                                    </span>

                                    <span className={styles.selectionPrice}>
                                        +${addOn.price.toFixed(2)}
                                    </span>
                                </label>
                            </div>
                        );
                    })}
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