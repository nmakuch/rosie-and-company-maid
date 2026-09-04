import Button from "../Button/Button";
import styles from "./Pricing.module.css";

type PricingProps = {
    cleaningPackage: string;
    price: string;
    includes: string[];
    description: string;
    featured?: boolean;
};

export default function Pricing({
    cleaningPackage,
    price,
    includes,
    description,
    featured = false,
}: PricingProps) {
    return (
        <article
            className={`${styles.pricing} ${featured ? styles.featured : ""}`}
            aria-label={`${cleaningPackage}, ${price}`}
        >
            <div className={styles.headingRow}>
                <h3>{cleaningPackage}</h3>

                {featured && (
                    <span className={styles.badge}>Most popular</span>
                )}
            </div>

            <p className={styles.price}>{price}</p>

            <p className={styles.description}>{description}</p>

            <div className={styles.includes}>
                <p className={styles.includesHeading}>What’s included</p>

                <ul>
                    {includes.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>

            <Button variant="primary" to="/booking">
                Book now
            </Button>
        </article>
    );
}