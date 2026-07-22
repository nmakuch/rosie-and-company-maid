import styles from "./Hero.module.css";
import SplitSection from "../SplitSection/SplitSection";
import Button from "../Button/Button";


export default function Hero() {
    return (
        <SplitSection
            id="hero"
            subheading="Rosie and Company"
            heading="Toronto's very best maid cleaning service"
            intro="Rosie & Company helps keep homes fresh, clean, and welcoming throughout Toronto's west end. Proudly serving Liberty Village, High Park, and Etobicoke, we provide reliable, detail-oriented cleaning so you can spend less time cleaning and more time relaxing."
            imageClassName={styles.hero}
            bgColor="blue"
            headingLevel="h1"
        >
            <div className={styles.buttonContainer}>
                <Button to="/booking" variant="primary">Book now</Button>
                <Button variant="secondary">Learn more</Button>
            </div>
        </SplitSection>
    );
}