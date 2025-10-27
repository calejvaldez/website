import { ReactNode } from "react";
import Heading from "./Heading";
import styles from "./TitleCard.module.css";

export default function TitleCard({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className={styles.titleCard}>
      <Heading
        sectionId={title.toString().toLowerCase().replaceAll(" ", "-")}
        level={"h1"}
        hideLinkButton={true}
      >
        {title}
      </Heading>
      {children}
    </div>
  );
}
