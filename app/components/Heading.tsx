"use client";
import Image from "next/image";
import { ReactNode } from "react";
import styles from "./Heading.module.css"

type ExportProps = {
    sectionId: string;
    level: 'h1' | 'h2';
    hideLinkButton?: boolean;
    children: ReactNode;
}

export default function Heading({sectionId, level, children, hideLinkButton}: ExportProps) {
    return <div id={sectionId} className={styles.container_wrapper}>
        
        {level === "h1" && <h1 style={{fontSize: '35px'}}>{children}</h1>}
        {level === "h2" && <h2 style={{fontSize: '30px'}}>{children}</h2>}

        {!hideLinkButton && <Image onClick={() => {
            navigator.clipboard.writeText(`${window.origin + "#" + sectionId}`)
        }} alt={`Copy section link for ${sectionId}`} src="./link-icon.svg" className={styles.link_button} width="20" height="20" />}
    </div>
}
