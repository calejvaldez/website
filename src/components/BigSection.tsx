import { CSSProperties, ReactNode } from "react";
import styles from "./BigSection.module.css"

type BigSectionProps = {
    title: string;
    description: ReactNode | string;
    bigger?: boolean;
    children: ReactNode
}

export default function BigSection({title, description, bigger, children}: BigSectionProps) {
    return (
        <section className={styles.container}>
            <div className={styles.metadata}>
                {bigger ? <h1>{title}</h1> : <h2>{title}</h2>}
                <p>{description}</p>
            </div>
            <div className={styles.content}>{children}</div>
        </section>
    )
}
