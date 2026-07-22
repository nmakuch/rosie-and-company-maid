import Container from "../Container/Container";
import Subheading from "../Subheading/Subheading";
import styles from "./CenteredSection.module.css";

type CenteredSectionProps = {
    subheading?: string;
    heading: string;
    children: React.ReactNode;
    className?: string;
    id: string;
};

export default function CenteredSection({
    subheading,
    heading,
    children,
    className = "",
    id
}: CenteredSectionProps) {
    return (
        <section
            className={`${styles.centeredSection} ${className}`}
            id={id}
        >
            <Container>
                {subheading && (<Subheading alignment="center" text={subheading} />)}

                <h2>{heading}</h2>

                {children}
            </Container>
        </section>
    );
}