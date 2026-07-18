import styles from "../BookingForm.module.css";
import Button from "../../Button/Button";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import PricePreview from "../../PricePreview/PricePreview";

import type { CleaningOptionStepProps } from "../stepTypes";

export default function CleaningOptionStep({
    register,
    errors,
    onBack,
    onNext,
    cleaningType,
    cleaning,
    addOns,
    subtotal,
    tax,
    totalPrice,
    options
}: CleaningOptionStepProps) {

    return (
        <div className={styles.formStep}>
            <h2>
                {cleaningType === "hourly"
                    ? "How much cleaning time do you need?"
                    : "Which option would you like to book?"}
            </h2>

            <p className={styles.supportingText}>
                {cleaningType === "hourly"
                    ? "Choose the session length that best fits your cleaning needs. We'll make the most of your time in every visit."
                    : "Choose the package that best matches the level of cleaning your home needs, with options for every type of visit."}
            </p>

            <fieldset className={styles.inputContainer}>
                <legend>
                    {cleaningType === "hourly"
                        ? "Choose a session length"
                        : "Choose a cleaning package"}
                </legend>

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
    )
}