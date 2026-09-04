import Button from "../../Button/Button";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import styles from "../BookingForm.module.css";

import type { FormStepProps } from "../stepTypes";

export default function AddressStep({
    register,
    errors,
    onBack,
    onNext,
}: FormStepProps) {
    return (
        <div className={styles.formStep}>
            <h2>Where should we clean?</h2>

            <p className={styles.supportingText}>
                Enter the address where the cleaning will take place so we
                can confirm that it is within our service area.
            </p>

            <div className={styles.inputContainer}>
                <label htmlFor="address">
                    Street address
                </label>

                <p className={styles.hintText} id="address-hint">
                    Example: 123 Main Street
                </p>

                {errors.address && (
                    <ErrorMessage>
                        {errors.address.message}
                    </ErrorMessage>
                )}

                <input
                    {...register("address")}
                    type="text"
                    id="address"
                    placeholder="123 Main Street"
                    autoComplete="street-address"
                    aria-describedby="address-hint"
                />
            </div>

            <div className={styles.inputContainer}>
                <label htmlFor="postalCode">
                    Postal code
                </label>

                <p className={styles.hintText} id="postal-code-hint">
                    Example: M5V 3L9
                </p>

                {errors.postalCode && (
                    <ErrorMessage>
                        {errors.postalCode.message}
                    </ErrorMessage>
                )}

                <input
                    {...register("postalCode")}
                    type="text"
                    id="postalCode"
                    placeholder="M5V 3L9"
                    autoComplete="postal-code"
                    autoCapitalize="characters"
                    spellCheck="false"
                    aria-describedby="postal-code-hint"
                />
            </div>

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