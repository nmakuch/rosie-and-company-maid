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
    id: string;
    headingLevel: "h1" | "h2";
};

export default function SplitSection({
    subheading,
    heading,
    intro,
    imageClassName,
    children,
    bgColor = "white",
    headingLevel = "h2",
    id
}: SplitSectionProps) {
    const HeadingTag = headingLevel
    return (
        <section
            className={[
                styles.splitSection,
                imageClassName ? styles.hasImage : undefined,
                imageClassName,
            ]
                .filter(Boolean)
                .join(" ")}
            style={{
                backgroundColor:
                    bgColor === "blue"
                        ? "#f2f8fe"
                        : "#ffffff",
            }}
            id={id}
        >
            <Container>
                <div className={styles.textContent}>
                    {subheading && (<Subheading text={subheading} alignment="left" />)}
                    <HeadingTag>{heading}</HeadingTag>
                    {intro && (<p className={styles.introP}>
                        {intro}
                    </p>)}
                    {children}
                </div>
            </Container>
        </section>
    );
}