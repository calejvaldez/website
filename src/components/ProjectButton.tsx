import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectButton.module.css";

type ProjectButtonProps = {
  name: string;
  description: string;
  role: string;
  link: string;
  imageSrc: string;
  imageAlt: string;
  startLabel: string;
  endLabel: string;
};

export default function ProjectButton({
  name,
  description,
  role,
  link,
  imageSrc,
  imageAlt,
  startLabel,
  endLabel,
}: ProjectButtonProps) {
  return (
    <div className={styles.buttonContainer}>
      <Link href={link} target="_blank" rel="noreferrer noopener">
        <div className={styles.fill}>
          <img className={styles.image} src={imageSrc} alt={imageAlt} />
        </div>

        <h3>
          {name} <span>{role}</span>
        </h3>
        <p>{description}</p>
        <p className={styles.dates}>
          {startLabel} - {endLabel}
        </p>
      </Link>
    </div>
  );
}
