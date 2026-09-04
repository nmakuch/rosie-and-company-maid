import styles from "./Step.module.css";

type StepProps = {
    number: string;
    src: string;
    heading: string;
    text: string;
};

export default function Step({
    number,
    src,
    heading,
    text,
}: StepProps) {
    return (
        <div className={styles.step}>
            <span className={styles.number} aria-hidden="true">
                {number}
            </span>

            <img
                src={src}
                alt=""
                width="720"
                height="720"
                loading="lazy"
                decoding="async"
            />

            <h3>{heading}</h3>
            <p>{text}</p>
        </div>
    );
}