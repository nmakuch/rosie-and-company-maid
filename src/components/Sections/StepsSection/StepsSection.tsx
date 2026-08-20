import Step from "../../Step/Step";
import CenteredSection from "../../CenteredSection/CenteredSection";
import styles from "./StepsSection.module.css";

export default function StepsSection() {
    return (
        <CenteredSection
            subheading="Simple, convenient, stress-free"
            heading="Get a clean home in three easy steps"
            id="how-it-works"
        >
            <div className={styles.stepsContainer}>
                <Step
                    src="/images/steps/step_1.webp"
                    heading="Book your appointment"
                    text="Use our online form to book a visit or call us at (123) 456-7890 to schedule an appointment."
                />
                <Step
                    src="/images/steps/step_2.webp"
                    heading="We clean your home"
                    text="Our professional cleaning staff will clean your home to your exact specifications every visit."
                />
                <Step
                    src="/images/steps/step_3.webp"
                    heading="Relax and save"
                    text="You can also save up to 15% off when scheduling bi-weekly visits with Rosie and Company"
                />
            </div>
        </CenteredSection>
    );
}