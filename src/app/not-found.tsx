/*
not-found.tsx
Carlos Valdez
*/
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";
import { metadataWith } from "@/utils/metadata";

export const metadata = metadataWith(
  "404 | Carlos Valdez",
  "This page was not found.\n\nCarlos Valdez is a passionate full-stack developer with a background in human-computer interaction. He focuses on solutions that prioritize a user's experience and security.",
  "https://calejvaldez.com/",
);

export default function NotFound() {
  const pathname = usePathname();
  return (
    <section className={styles.container404}>
      <div>
        <h1>Not Found</h1>
        <p>The page could not be found.</p>
        <p>
          Searched for:{" "}
          <code style={{ textTransform: "none" }}>{pathname}</code>
        </p>
        <Link href="/">Consider going home?</Link>
      </div>
    </section>
  );
}
