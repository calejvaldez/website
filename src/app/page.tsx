/*
/app/page.tsx
Carlos Valdez
*/
"use client";
import BigSection from "@/components/BigSection";
import Link from "next/link";
import styles from "./page.module.css";
import { GithubCircle, Linkedin, Mail } from "iconoir-react";
import ProjectButton from "@/components/ProjectButton";

export default function Home() {
  return (
    <>
      <BigSection
        title="Carlos Valdez"
        bigger
        description={
          <>
            A software developer building <strong>reliable systems</strong> and{" "}
            <strong>human-centered interfaces</strong>.
          </>
        }
      >
        <div className={styles.socialsContainer}>
          <p>
            <i>@calejvaldez</i>
          </p>
          <div className={styles.socialsIcons}>
            <Link
              rel="noreferrer noopener"
              target="_blank"
              href="https://github.com/calejvaldez/"
            >
              <GithubCircle />
            </Link>
            <Link
              rel="noreferrer noopener"
              target="_blank"
              href="https://linkedin.com/in/calejvaldez/"
            >
              <Linkedin />
            </Link>
            <Link
              rel="noreferrer noopener"
              target="_blank"
              href="mailto:cvaldezh@uci.edu"
            >
              <Mail />
            </Link>
          </div>
        </div>
      </BigSection>
      <BigSection
        title="Projects"
        description="I work on a lot of projects. These are the ones I'm most proud of."
      >
        <div className={styles.projectsContainer}>
          <ProjectButton
            name="Iris"
            role="Lead Developer"
            description="An open-source hospice management system. Tracks medications, video records, and more. Designed with NextJS and Tauri."
            link="https://github.com/ojosproject/iris/releases/latest/"
            imageSrc="https://ojosproject.org/images/iris-v0-summary.png"
            imageAlt="Various screenshots of the Iris software."
            startLabel="October 2023"
            endLabel="Present"
          />
          <ProjectButton
            name="You Are Typing"
            role="Developer"
            description="A journaling app designed as a desktop chat app. Meant to help you become your own best friend. Designed with Vite and Tauri."
            link="https://github.com/calejvaldez/YouAreTyping/releases/latest/"
            imageSrc="https://raw.githubusercontent.com/calejvaldez/YouAreTyping/refs/heads/main/.github/assets/header.png"
            imageAlt="You Are Typing logo"
            startLabel="May 2023"
            endLabel="Present"
          />
        </div>
      </BigSection>
    </>
  );
}
