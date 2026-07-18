import BookingForm from "../../BookingForm/BookingForm";
import Container from "../../Container/Container";
import styles from "./BookingSection.module.css";

export default function BookingSection() {
    return (
        <section className={styles.bookingSection}>
            <Container>
                <div className={styles.formContainer}>
                    <BookingForm />
                </div>
            </Container>
        </section>
    )
}