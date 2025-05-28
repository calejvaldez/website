/*
/app/page.tsx
Carlos Valdez
*/
"use client";
import BigSection from "@/components/BigSection";
import Link from "next/link";
import styles from "./page.module.css"
import { GithubCircle, Linkedin, Mail } from 'iconoir-react';


export default function Home() {
  return (
    <>
      <BigSection title="Carlos Valdez" bigLevel="biggest" description={<>A software developer building <strong>reliable systems</strong> and <strong>human-centered interfaces</strong>.</>}>
        <div className={styles.socialsContainer}>
          <p><i>@calejvaldez</i></p>
          <div className={styles.socialsIcons}>
            <Link rel="noreferrer noopener" target="_blank" href="https://github.com/calejvaldez/"><GithubCircle /></Link>
            <Link rel="noreferrer noopener" target="_blank" href="https://linkedin.com/in/calejvaldez/"><Linkedin /></Link>
            <Link rel="noreferrer noopener" target="_blank" href="mailto:cvaldezh@uci.edu"><Mail /></Link>
          </div>
        </div>
      </BigSection>
    </>
  );
}
