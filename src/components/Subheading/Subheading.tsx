import styles from "./Subheading.module.css";

type SubheadingProps = {
    text: string;
    alignment: "left" | "center" | "right";
}

export default function Subheading({ text, alignment }: SubheadingProps) {
    return (
        <p className={`${styles.subheading} ${styles[alignment]}`}>{text}</p>
    )
}