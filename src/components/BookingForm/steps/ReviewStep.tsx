import styles from "../BookingForm.module.css";
import Button from "../../Button/Button";
import PricePreview from "../../PricePreview/PricePreview";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

import type { ReviewStepProps } from "../stepTypes";
import { BOOKING_STEPS } from "../bookingSteps";

export default function ReviewStep({
    booking,
    cleaning,
    addOns,
    subtotal,
    tax,
    totalPrice,
    editStep,
    onBack,
    isSubmitting,
    submitError
}: ReviewStepProps) {

    const formFields = [
        {
            key: "fullName",
            label: "Full name",
            step: BOOKING_STEPS.NAME,
        },
        {
            key: "email",
            label: "Email address",
            step: BOOKING_STEPS.EMAIL,
        },
        {
            key: "address",
            label: "Home address",
            step: BOOKING_STEPS.ADDRESS,
        },
        {
            key: "postalCode",
            label: "Postal code",
            step: BOOKING_STEPS.ADDRESS,
        },
        {
            key: "date",
            label: "Preferred date",
            step: BOOKING_STEPS.DATE,
        },
        {
            key: "time",
            label: "Preferred time",
            step: BOOKING_STEPS.TIME,
        },
        {
            key: "cleaningType",
            label: "Cleaning type",
            step: BOOKING_STEPS.CLEANING_TYPE,
        },
        {
            key: "cleaningOption",
            label: "Cleaning option",
            step: BOOKING_STEPS.CLEANING_OPTION,
        },
        {
            key: "addOns",
            label: "Add-ons",
            step: BOOKING_STEPS.ADD_ONS,
        },
    ] as const;

    return (
        <div className={styles.formStep}>
            <h2>Review your booking</h2>
            <p className={styles.supportingText}>
                Review the details of your booking below to make sure everything looks correct.
                If you'd like to make any changes, you can go back before submitting your request.
            </p>

            <div className={styles.reviewTable}>
                {formFields.map(({ key, label, step }) => (
                    <div key={key} className={styles.reviewItem}>
                        <div className={styles.reviewContent}>
                            <h3>{label}</h3>
                            <p>
                                {Array.isArray(booking[key])
                                    ? booking[key].join(", ") || "None selected"
                                    : booking[key]}
                            </p>
                        </div>

                        <button
                            type="button"
                            className={styles.editLink}
                            onClick={() => editStep(step)}
                        >
                            Edit
                        </button>
                    </div>
                ))}
            </div>

            <PricePreview
                cleaning={cleaning}
                addOns={addOns}
                subtotal={subtotal}
                tax={tax}
                totalPrice={totalPrice}
            />

            {submitError && (
                <ErrorMessage>
                    {submitError}
                </ErrorMessage>
            )}

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
                    type="submit"
                >
                    {isSubmitting
                        ? "Submitting booking..."
                        : "Submit booking"}
                </Button>
            </div>
        </div>
    )
}