import styles from "../BookingForm.module.css";

import Button from "../../Button/Button";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import PricePreview from "../../PricePreview/PricePreview";

import { addOnOptions } from "../bookingOptions";

import type { AddOnsStepProps } from "../stepTypes";

export default function AddOnsStep({
    register,
    errors,
    onBack,
    onNext,
    cleaning,
    addOns,
    subtotal,
    tax,
    totalPrice,
}: AddOnsStepProps) {
    return (
        <div className={styles.formStep}>
            <h2>Do you want any additional add-ons?</h2>

            <p className={styles.supportingText}>
                Enhance your cleaning with optional add-ons tailored to your home's
                needs. Select any that you'd like to include with your appointment.
            </p>

            <fieldset className={styles.inputContainer}>
                <legend>Choose the add-ons you'd like</legend>

                <p className={styles.hintText}>
                    These add-ons are optional, so you can continue without
                    selecting anything.
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
                                        ${addOn.price.toFixed(2)}
                                    </span>
                                </label>
                            </div>
                        );
                    })}
                </div>
            </fieldset>

            <PricePreview
                cleaning={cleaning}
                addOns={addOns}
                subtotal={subtotal}
                tax={tax}
                totalPrice={totalPrice}
            />

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