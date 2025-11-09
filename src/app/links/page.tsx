import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import {
  Attachment,
  Github,
  JournalPage,
  Laptop,
  Linkedin,
  Mail,
} from "iconoir-react";
import { metadataWith } from "@/utils/metadata";

type LinkObject = {
  key: string;
  label: string;
  url: string;
  icon: any; // Use with iconoir-react
  bold?: boolean;
};

export const metadata = metadataWith(
  "Links | Carlos Valdez",
  "Here are some places you can find me online!",
  "https://calejvaldez.com/links/",
);

export default function Page() {
  const imageSize = 150;
  const links: LinkObject[] = [
    {
      key: "resume",
      label: "Download Resume (PDF)",
      url: "/documents/resume.pdf",
      icon: <Attachment />,
      bold: true,
    },
    {
      key: "github",
      label: "View My GitHub Projects",
      url: "https://github.com/calejvaldez?tab=repositories",
      icon: <Github />,
      bold: true,
    },
    {
      key: "projects",
      label: "Live Projects / Demos",
      url: "/#projects",
      icon: <Laptop />,
    },
    {
      key: "blog",
      label: "My Technical Blog",
      url: "/blog",
      icon: <JournalPage />,
    },
    {
      key: "linkedin",
      label: "LinkedIn Profile",
      url: "https://linkedin.com/in/calejvaldez/",
      icon: <Linkedin />,
    },
    {
      key: "email",
      label: "Let's Connect!",
      url: "mailto:self@calejvaldez.com",
      icon: <Mail />,
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Image
          src={`https://gravatar.com/avatar/9ee4f31a2821014982fc155c5abbec7c92a71d30e6992673fdeb34324f45f1f8?s=${imageSize}`}
          alt="Carlos' Gravatar icon"
          width={imageSize}
          height={imageSize}
        />
        <h2>Carlos Valdez</h2>
        <p>Full-Stack Developer</p>
        <ul className={styles.list}>
          {links.map((link) => {
            return (
              <li key={link.key} className={styles.linkContainer}>
                <Link
                  className={styles.link}
                  href={link.url}
                  target={link.url.includes("https://") ? "_blank" : undefined}
                  rel={
                    link.url.includes("https://")
                      ? "noreferrer noopener"
                      : undefined
                  }
                >
                  <div className={styles.iconContainer}>{link.icon}</div>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
