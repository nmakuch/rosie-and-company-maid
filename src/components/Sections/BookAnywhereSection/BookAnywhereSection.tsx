import styles from "./BookAnywhereSection.module.css";
import SplitSection from "../../SplitSection/SplitSection";

export default function BookAnywhereSection() {
    return (
        <SplitSection
            subheading="Fast, flexible online booking"
            heading="Booking on the go, from anywhere"
            intro="Our responsive booking system makes it easy to schedule a cleaning from your phone, tablet, or desktop. Build a plan that fits your home with our customizable services, and book with confidence knowing you can make changes. We offer free cancellations with at least 24 hours’ notice, giving you added flexibility."
            imageClassName={styles.bookAnywhere}
            children={null}
        />
    )
} 