import styles from "./ServiceAreaSection.module.css";
import SplitSection from "../../SplitSection/SplitSection";
import Icon from "../../Icon/Icon";

export default function ServiceAreaSection() {
    return (
        <SplitSection
            subheading="Our area of service"
            heading="Wondering if we clean in your neighborhood?"
            intro="The area shown in the diagram is a rough representation of the area that we provide service to. If you are unsure if you fall within the area in which we provide our services, please call ahead to make sure we can accomodate you. We serve the following neighborhoods:"
            imageClassName={styles.map}
        >
            <div className={styles.listContainer}>
                <ul>
                    <li><Icon name="checkmark" height={32} width={32} /><span>Liberty Village</span></li>
                    <li><Icon name="checkmark" height={32} width={32} /><span>High Park</span></li>
                    <li><Icon name="checkmark" height={32} width={32} /><span>Etobicoke</span></li>
                </ul>
            </div>
        </SplitSection>
    )
} 