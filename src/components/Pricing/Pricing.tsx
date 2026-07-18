import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import styles from "./Pricing.module.css";

type PricingProps = {
    cleaningPackage: string;
    price: string;
    includes: string[];
    description: string;
}

export default function Pricing({ cleaningPackage, price, includes, description }: PricingProps) {
    return (
        <div className={styles.pricing}>
            <h3>{cleaningPackage}</h3>
            <p className={styles.price}>{price}</p>

            <Button variant="primary" to="/booking">Book now</Button>

            <p className={styles.description}>{description}</p>
            <ul>
                {includes.map((item) => (
                    <li key={item}>
                        <Icon name="checkmark" height={24} width={24} />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}