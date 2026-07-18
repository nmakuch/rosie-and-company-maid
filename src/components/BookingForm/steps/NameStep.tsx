import styles from "../BookingForm.module.css"
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import Button from "../../Button/Button";
import type { FormStepProps } from "../stepTypes";

export default function NameStep({
    register,
    errors,
    onBack,
    onNext
} : FormStepProps) {
    return (
        <div className={styles.formStep}>
            <h2>What's your name?</h2>
            <p className={styles.supportingText}>
                Please provide a name so we can personalize your booking and
                communicate with you throughout the process.
            </p>

            <div className={styles.inputContainer}>
                <label htmlFor="fullName">
                    Full name:
                </label>
                <p className={styles.hintText}>
                    Example: Jane doe
                </p>
                {errors.fullName && (
                    <ErrorMessage>
                        {errors.fullName.message}
                    </ErrorMessage>
                )}
                <input
                    {...register("fullName")}
                    placeholder="First name"
                    id="fullName"
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
    )
}