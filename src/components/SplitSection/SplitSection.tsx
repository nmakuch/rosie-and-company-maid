import styles from "./SplitSection.module.css";
import Subheading from "../Subheading/Subheading";
import Container from "../Container/Container";

type SplitSectionProps = {
    subheading?: string;
    bgColor?: "blue" | "white";
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
    children,
    bgColor = "white"
}: SplitSectionProps) {
    return (
        <section
            className={[
                styles.splitSection,
                imageClassName
            ]
                .filter(Boolean)
                .join(" ")
            }
            style={{
                backgroundColor:
                    bgColor === "blue"
                        ? "#f2f8fe"
                        : "#ffffff",
            }}
        >
            <Container>
                <div className={styles.textContent}>
                    {subheading && (<Subheading text={subheading} alignment="left" />)}
                    <h1>{heading}</h1>
                    {intro && (<p className={styles.introP}>
                        {intro}
                    </p>)}
                    {children}
                </div>
            </Container>
        </section>
    );
}