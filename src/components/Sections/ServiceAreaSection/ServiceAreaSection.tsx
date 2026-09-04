import Container from "../../Container/Container";
import Subheading from "../../Subheading/Subheading";
import styles from "./ServiceAreaSection.module.css";

const neighborhoods = ["Etobicoke", "High Park", "Liberty Village"];

export default function ServiceAreaSection() {
    return (
        <section className={styles.section} id="service-area">
            <Container>
                <div className={styles.layout}>
                    <div className={styles.content}>
                        <Subheading
                            text="Proudly serving Toronto's west end"
                            alignment="left"
                        />

                        <h2>Wondering if we clean in your neighborhood?</h2>

                        <p>
                            This map is a general guide to the Toronto
                            neighborhoods we serve. If you live nearby and
                            aren&apos;t sure whether your home is in range,
                            contact us and we&apos;ll be happy to confirm.
                        </p>

                        <ul className={styles.neighborhoods}>
                            {neighborhoods.map((neighborhood) => (
                                <li key={neighborhood}>{neighborhood}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.mapFrame}>
                        <img
                            src="/images/service_area/service-area.webp"
                            alt="Service area map showing Etobicoke, High Park, and Liberty Village"
                            width="1254"
                            height="1254"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}