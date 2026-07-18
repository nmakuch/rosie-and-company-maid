import styles from "./Hero.module.css";
import Button from "../Button/Button";
import Container from "../Container/Container";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Container>
                <div className={styles.heroContent}>
                    <h1>Toronto's very best maid cleaning service</h1>
                    <p>
                        Rosie & Company helps keep homes fresh, clean, and
                        welcoming throughout Toronto's west end. Proudly
                        serving Liberty Village, High Park, and Etobicoke, we
                        provide reliable, detail-oriented cleaning so you can
                        spend less time cleaning and more time enjoying your home.
                    </p>
                    <Button to="/booking" variant="primary">Book an appointment</Button>
                    <Button variant="secondary">Learn more</Button>
                </div>
            </Container>
        </section>
    );
}