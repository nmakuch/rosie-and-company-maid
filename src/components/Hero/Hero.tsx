import Button from "../Button/Button";
import Container from "../Container/Container";
import Subheading from "../Subheading/Subheading";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            <Container>
                <div className={styles.layout}>
                    <div className={styles.content}>
                        <Subheading text="Rosie and Company" alignment="left" />

                        <h1>Toronto&apos;s very best cleaning service</h1>

                        <p className={styles.intro}>
                            Reliable, detail-oriented cleaning for homes throughout
                            Toronto&apos;s west end, proudly serving Liberty Village,
                            High Park, and Etobicoke.
                        </p>

                        <div className={styles.actions}>
                            <Button to="/booking" variant="primary">
                                Book now
                            </Button>

                            <Button to="/#book-anywhere" variant="secondary">
                                Learn more
                            </Button>
                        </div>

                        <ul
                            className={styles.trustList}
                            aria-label="Why choose Rosie and Company"
                        >
                            <li>Flexible booking</li>
                            <li>Free cancellation</li>
                        </ul>
                    </div>

                    <div className={styles.imageFrame}>
                        <img
                            src="/images/hero/hero.webp"
                            alt="A professional cleaner making a bed in a bright bedroom"
                            width="1536"
                            height="1024"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}