import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import { Attachment, Github, Linkedin, Mail } from "iconoir-react";
import { metadataWith } from "@/utils/metadata";

type LinkObject = {
  key: string;
  label: string;
  url: string;
  icon: any; // Use with iconoir-react
  bold?: boolean;
};

export const metadata = metadataWith(
  "My Card | Carlos Valdez",
  "Here are some places you can find me online! Carlos Valdez is a passionate full-stack developer with a background in human-computer interaction. He focuses on solutions that prioritize a user's experience and security.",
  "https://carlos.vldz.tech/card/",
);

export default function Page() {
  const imageSize = 150;
  const links: LinkObject[] = [
    {
      key: "resume",
      label: "Download resume.pdf",
      url: "/documents/resume.pdf",
      icon: <Attachment />,
    },
    {
      key: "github",
      label: "My code / GitHub",
      url: "https://github.com/calejvaldez/",
      icon: <Github />,
    },
    {
      key: "linkedin",
      label: "Connect with me",
      url: "https://linkedin.com/in/calejvaldez/",
      icon: <Linkedin />,
    },
    {
      key: "email",
      label: "carlos@vldz.tech",
      url: "mailto:carlos@vldz.tech",
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
        <p>Full Stack Developer | UX Designer</p>
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
