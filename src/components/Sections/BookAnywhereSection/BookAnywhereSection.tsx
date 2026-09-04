import Container from "../../Container/Container";
import Subheading from "../../Subheading/Subheading";
import styles from "./BookAnywhereSection.module.css";

export default function BookAnywhereSection() {
    return (
        <section className={styles.section} id="book-anywhere">
            <Container>
                <div className={styles.layout}>
                    <div className={styles.content}>
                        <Subheading
                            text="Fast, flexible online booking"
                            alignment="left"
                        />

                        <h2>Book your next cleaning on the go, from anywhere.</h2>

                        <p className={styles.intro}>
                            Schedule a cleaning from your phone, tablet, or desktop
                            and build a plan that fits your home. You can make changes
                            with confidence, with free cancellation when you give us
                            at least 24 hours&apos; notice.
                        </p>

                        <ul className={styles.details}>
                            <li>Phone, tablet, or desktop</li>
                            <li>Book in just a few minutes</li>
                            <li>Flexible changes and cancellations</li>
                        </ul>
                    </div>

                    <div className={styles.visual}>
                        <img
                            src="/images/book_anywhere/book-anywhere.webp"
                            alt="Booking interface shown on two mobile phones"
                            width="1536"
                            height="1024"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}