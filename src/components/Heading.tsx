"use client";
import { ReactNode, useEffect, useState } from "react";
import styles from "./Heading.module.css"
import { useRouter } from "next/navigation";
import { Link as LinkIcon } from "iconoir-react";

type ExportProps = {
    sectionId: string;
    level: 'h1' | 'h2' | 'h3';
    hideLinkButton?: boolean;
    children: ReactNode;
}

export default function Heading({sectionId, level, children, hideLinkButton}: ExportProps) {
    const [hovered, setHovered] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (hideLinkButton) {
            setHovered(!hideLinkButton);
        }
    }, [hovered])

    return <div
        id={sectionId}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={styles.container_wrapper}
    >
        
        {level === "h1" && <h1 style={{fontSize: '35px'}}>{children}</h1>}
        {level === "h2" && <h2 style={{fontSize: '30px'}}>{children}</h2>}
        {level === "h3" && <h3 style={{fontSize: '25px'}}>{children}</h3>}

        <div className={styles.linkIcon} hidden={!hovered}>
            <LinkIcon onClick={() => {
                const path = `${window.location.pathname}#${sectionId}`;
                navigator.clipboard.writeText(path);
                router.replace(path);
            }} />
        </div>
    </div>
}
