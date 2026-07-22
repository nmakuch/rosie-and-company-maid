import styles from "./ServiceAreaSection.module.css";
import SplitSection from "../../SplitSection/SplitSection";

export default function ServiceAreaSection() {
    return (
        <SplitSection
            id="service-area"
            subheading="Our area of service"
            heading="Wondering if we clean in your neighborhood?"
            headingLevel="h2"
            intro="The area shown in the diagram is a rough representation of the area that we provide service to. If you are unsure if you fall within the area in which we provide our services, please call ahead to make sure we can accomodate you."
            imageClassName={styles.map}
        >
            <p className={styles.neighborhoods}>
                We serve <b>Etobicoke</b>, <b>High Park</b> and <b>Liberty Village</b>.
            </p>

            <img
                className={styles.mobileMap}
                src="/images/service_area/service-area.png"
                alt=""
                loading="lazy"
            />

        </SplitSection>
    )
} 