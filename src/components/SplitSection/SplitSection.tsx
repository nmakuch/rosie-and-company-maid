import styles from "./SplitSection.module.css";
import Container from "../Container/Container";
import Subheading from "../Subheading/Subheading";

type SplitSectionProps = {
    subheading?: string;
    heading: string;
    intro?: string;
    imageClassName?: string;
    children?: React.ReactNode;
};

export default function SplitSection({
    subheading,
    heading,
    intro,
    imageClassName,
    children
}: SplitSectionProps) {
    return (
        <section className={styles.splitSection}>
            <div className={styles.textSide}>
                <Container>
                    <div className={styles.textContent}>
                        {subheading && (<Subheading text={subheading} alignment="left" />)}
                        <h2>{heading}</h2>
                        {intro && <p className={styles.introP}>{intro}</p>}
                        {children}
                    </div>
                </Container>
            </div>

            <div className={`${styles.imageSide} ${imageClassName ?? ""}`} />
        </section>
    );
}