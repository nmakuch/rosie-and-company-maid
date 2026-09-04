import styles from "./ProgressIndicator.module.css";

type ProgressIndicatorProps = {
    currentStep: number;
    totalSteps: number;
};

export default function ProgressIndicator({
    currentStep,
    totalSteps,
}: ProgressIndicatorProps) {
    const progress =
        totalSteps > 0
            ? Math.min((currentStep / totalSteps) * 100, 100)
            : 0;

    return (
        <div className={styles.progressIndicator}>
            <p className={styles.stepText}>
                Step {currentStep} of {totalSteps}
            </p>

            <div
                className={styles.track}
                role="progressbar"
                aria-label="Booking progress"
                aria-valuemin={0}
                aria-valuemax={totalSteps}
                aria-valuenow={currentStep}
                aria-valuetext={`Step ${currentStep} of ${totalSteps}`}
            >
                <div
                    className={styles.progress}
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}