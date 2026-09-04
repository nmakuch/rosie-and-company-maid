import CenteredSection from "../../CenteredSection/CenteredSection";
import Step from "../../Step/Step";
import styles from "./StepsSection.module.css";

export default function StepsSection() {
    return (
        <CenteredSection
            subheading="Simple, convenient, stress-free"
            heading="Get a clean home in three easy steps"
            id="how-it-works"
            className={styles.stepsSection}
        >
            <div className={styles.stepsContainer}>
                <Step
                    number="1"
                    src="/images/steps/step_book.webp"
                    heading="Book your appointment"
                    text="Choose your service, preferred date, and time using our simple online form."
                />

                <Step
                    number="2"
                    src="/images/steps/step_clean.webp"
                    heading="We clean your home"
                    text="Our professional team arrives on time and cleans your home with care and attention to detail."
                />

                <Step
                    number="3"
                    src="/images/steps/step_relax.webp"
                    heading="Relax and save"
                    text="Come home to a fresh space and save up to 15% when you schedule bi-weekly visits."
                />
            </div>
        </CenteredSection>
    );
}