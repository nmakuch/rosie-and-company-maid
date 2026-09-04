import Button from "../../Button/Button";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import styles from "../BookingForm.module.css";

import {
    addOnOptions,
    hourlyOptions,
    packageOptions,
} from "../bookingOptions";

import { BOOKING_STEPS } from "../bookingSteps";
import type { ReviewStepProps } from "../stepTypes";

function formatBookingDate(value: string) {
    const [year, month, day] = value.split("-").map(Number);

    if (!year || !month || !day) {
        return value || "Not provided";
    }

    return new Intl.DateTimeFormat("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(year, month - 1, day));
}

export default function ReviewStep({
    booking,
    editStep,
    onBack,
    isSubmitting,
    submitError,
}: ReviewStepProps) {
    const cleaningOptions =
        booking.cleaningType === "hourly"
            ? hourlyOptions
            : packageOptions;

    const selectedCleaning = cleaningOptions.find(
        (option) => option.value === booking.cleaningOption
    );

    const selectedAddOns = (booking.addOns ?? []).map(
        (value) =>
            addOnOptions.find((addOn) => addOn.value === value)?.label ??
            value
    );

    const reviewItems = [
        {
            label: "Full name",
            value: booking.fullName,
            step: BOOKING_STEPS.NAME,
        },
        {
            label: "Email address",
            value: booking.email,
            step: BOOKING_STEPS.EMAIL,
        },
        {
            label: "Street address",
            value: booking.address,
            step: BOOKING_STEPS.ADDRESS,
        },
        {
            label: "Postal code",
            value: booking.postalCode.toUpperCase(),
            step: BOOKING_STEPS.ADDRESS,
        },
        {
            label: "Preferred date",
            value: formatBookingDate(booking.date),
            step: BOOKING_STEPS.DATE,
        },
        {
            label: "Preferred time",
            value: booking.time ?? "Not selected",
            step: BOOKING_STEPS.TIME,
        },
        {
            label: "Cleaning plan",
            value:
                booking.cleaningType === "hourly"
                    ? "Hourly cleaning"
                    : "Fixed-price package",
            step: BOOKING_STEPS.CLEANING_TYPE,
        },
        {
            label: "Cleaning option",
            value: selectedCleaning?.label ?? "Not selected",
            step: BOOKING_STEPS.CLEANING_OPTION,
        },
        {
            label: "Add-ons",
            value:
                selectedAddOns.length > 0
                    ? selectedAddOns.join(", ")
                    : "None selected",
            step: BOOKING_STEPS.ADD_ONS,
        },
    ];

    return (
        <div className={styles.formStep}>
            <h2>Review your booking</h2>

            <p className={styles.supportingText}>
                Check your appointment details before submitting. You can
                return to any step if something needs to be changed.
            </p>

            <div className={styles.reviewTable}>
                {reviewItems.map(({ label, value, step }) => (
                    <div className={styles.reviewItem} key={label}>
                        <div className={styles.reviewContent}>
                            <h3>{label}</h3>
                            <p>{value}</p>
                        </div>

                        <button
                            type="button"
                            className={styles.editLink}
                            onClick={() => editStep(step)}
                            aria-label={`Edit ${label.toLowerCase()}`}
                        >
                            Edit
                        </button>
                    </div>
                ))}
            </div>

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

                <Button variant="primary" type="submit">
                    {isSubmitting
                        ? "Submitting booking..."
                        : "Submit booking"}
                </Button>
            </div>
        </div>
    );
}