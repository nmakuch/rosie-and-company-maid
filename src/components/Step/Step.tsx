import styles from "./Step.module.css";

type StepProps = {
    src: string;
    heading: string;
    text: string;
}

export default function Step({ src, heading, text }: StepProps) {
    return (
        <div className={styles.step}>
            <img src={src} />
            <h3>{heading}</h3>
            <p>{text}</p>
        </div>
    )
}