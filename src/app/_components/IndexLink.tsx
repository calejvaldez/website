import Link from "next/link";
import styles from "./IndexLink.module.css";
import Image from "next/image";
import { timestampToString } from "@/utils/parsing";

export type IndexLinkProps = {
  img?: string;
  title: string;
  description: string;
  url: string;
  timestamp?: number;
};

export default function IndexLink({
  img,
  title,
  description,
  url,
  timestamp,
}: IndexLinkProps) {
  return (
    <Link
      href={url}
      target={url.includes("https") ? "_blank" : undefined}
      rel={url.includes("https") ? "noopener noreferrer" : undefined}
      className={styles.photoLink}
    >
      {img && (
        <div className={styles.imageContainer}>
          <Image
            draggable={false}
            width={350}
            height={250}
            src={img}
            alt={title}
          />
        </div>
      )}

      <span className={styles.timestampSpan}>
        <h4>{title}</h4>{" "}
        {timestamp && <p>{timestampToString(timestamp, true)}</p>}
      </span>
      <p>{description}</p>
    </Link>
  );
}
