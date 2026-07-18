import Pricing from "../../Pricing/Pricing";
import CenteredSection from "../../CenteredSection/CenteredSection";
import styles from "./PricingSection.module.css";

export default function PricingSection() {
    return (
        <CenteredSection
            subheading="Professional cleaning, fair prices"
            heading="Choose the perfect cleaning package"
        >
            <div className={styles.pricingContainer}>
                <Pricing
                    cleaningPackage="Basic cleaning"
                    description="Perfect for routine upkeep to keep your home fresh, tidy, and consistently clean. Ideal for regular maintenance."
                    price="$70"
                    includes={[
                        "Complete kitchen cleaning",
                        "Full bathroom sanitization",
                        "All the floors in your home"
                    ]}
                />
                <Pricing
                    cleaningPackage="Basic Plus cleaning"
                    description="Everything from our Basic package, plus extra attention to the areas of your home that need it most."
                    price="$105"
                    includes={[
                        "Complete kitchen cleaning",
                        "Full bathroom sanitization",
                        "Cleaning of all living areas",
                        "Cleaning of all bedrooms",
                    ]}
                />
                <Pricing
                    cleaningPackage="Complete cleaning"
                    description="A comprehensive top-to-bottom clean designed to leave your entire home spotless and refreshed."
                    price="$140"
                    includes={[
                        "Complete kitchen cleaning",
                        "Full bathroom sanitization",
                        "Cleaning of all living areas",
                        "Cleaning of all bedrooms",
                        "All the floors in your home"
                    ]}
                />
            </div>
        </CenteredSection>
    );
}