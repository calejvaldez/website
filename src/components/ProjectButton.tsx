import Link from "next/link";
import styles from "./ProjectButton.module.css";

export type ProjectButtonProps = {
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
  project,
}: {
  project: ProjectButtonProps;
}) {
  return (
    <div className={styles.buttonContainer}>
      <Link href={project.link} target="_blank" rel="noreferrer noopener">
        <div className={styles.fill}>
          <img
            className={styles.image}
            src={project.imageSrc}
            alt={project.imageAlt}
          />
        </div>

        <h3>
          {project.name} <span>{project.role}</span>
        </h3>
        <p>{project.description}</p>
        <p className={styles.dates}>
          {project.startLabel} - {project.endLabel}
        </p>
      </Link>
    </div>
  );
}
