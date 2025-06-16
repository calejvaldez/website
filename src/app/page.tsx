/*
/app/page.tsx
Carlos Valdez
*/
"use client";
import BigSection from "@/components/BigSection";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { GithubCircle, Linkedin, Mail } from "iconoir-react";
import ProjectButton from "@/components/ProjectButton";
import { projectsData } from "@/utils/projects";

export default function Home() {
  const imageSize = 350;

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
      <BigSection title="About Me" description="Let's learn about each other!">
        <div className={styles.aboutMeContainer}>
          <Image
            src={`https://gravatar.com/avatar/9ee4f31a2821014982fc155c5abbec7c92a71d30e6992673fdeb34324f45f1f8?s=${imageSize}`}
            alt="Carlos Valdez's Gravatar"
            width={imageSize}
            height={imageSize}
            className={styles.gravatarIcon}
          />
          <p>I am a recent graduate from UC Irvine.</p>
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
