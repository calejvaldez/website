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
import { projectsData } from "@/utils/projects";

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
          {projectsData.map((projectData) => {
            return (
              <ProjectButton key={projectData.name} project={projectData} />
            );
          })}
        </div>
      </BigSection>
    </>
  );
}
