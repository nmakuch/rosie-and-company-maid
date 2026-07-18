import styles from "../BookingForm.module.css";
import Button from "../../Button/Button";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

import type { FormStepProps } from "../stepTypes";

export default function AddressStep({
    errors,
    register,
    onNext,
    onBack
}: FormStepProps) {
    return (
        <div className={styles.formStep}>
            <h2>What is your address?</h2>
            <p className={styles.supportingText}>
                This helps us confirm that we service your area and ensures we have the
                correct location for your appointment.
            </p>

            <div className={styles.inputContainer}>
                <label htmlFor="address">
                    Home address
                </label>

                <p className={styles.hintText}>
                    Example: 123 Main Street, Toronto, ON
                </p>

                {errors.address && (
                    <ErrorMessage>
                        {errors.address.message}
                    </ErrorMessage>
                )}

                <input
                    {...register("address")}
                    placeholder="Address"
                    id="address"
                    name="address"
                />
            </div>

            <div className={styles.inputContainer}>
                <label htmlFor="postalCode">
                    Postal code
                </label>

                <p className={styles.hintText}>
                    Example: M5V 3L9
                </p>


                {errors.postalCode && (
                    <ErrorMessage>
                        {errors.postalCode.message}
                    </ErrorMessage>
                )}

                <input
                    {...register("postalCode")}
                    placeholder="Postal code"
                    id="postalCode"
                    name="postalCode"
                />
            </div>

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