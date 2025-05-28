import { CSSProperties, ReactNode } from "react";
import styles from "./BigSection.module.css"

type BigSectionProps = {
    title: string;
    description: ReactNode | string;
    bigLevel?: "biggest" | "big";
    children: ReactNode
}

export default function BigSection({title, description, bigLevel, children}: BigSectionProps) {
    const descriptionStyle: CSSProperties = {fontSize: bigLevel === "biggest" ? "35px" : "20px"};
    const header = bigLevel === "biggest" ? <h1 className={styles.biggestTitle}>{title}</h1> : <h2 className={styles.bigTitle}>{title}</h2>

    return (
        <section className={styles.container}>
            <div className={styles.metadata}>
                {header}
                <p style={descriptionStyle}>{description}</p>
            </div>
            <div className={styles.content}>{children}</div>
        </section>
    )
}
