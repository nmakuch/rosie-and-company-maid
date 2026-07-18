import styles from "./BookAnywhereSection.module.css";
import SplitSection from "../../SplitSection/SplitSection";

export default function BookAnywhereSection() {
    return (
        <SplitSection
            subheading="Fast, flexible online booking"
            heading="Booking on the go, from anywhere"
            intro="Our online booking system is fully responsive, making it easy to schedule your cleaning from your phone, tablet, or desktop—wherever you are. Build a cleaning plan that fits your home by choosing from our range of customizable services, then book with confidence knowing you can make changes if your plans change. We offer free cancellations with at least 24 hours' notice, giving you the flexibility to book without the stress."
            imageClassName={styles.bookAnywhere}
            children={null}
        />
    )
} 