/*
not-found.tsx
Carlos Valdez
*/
import Link from "next/link";
import styles from "./not-found.module.css";
import { metadataWith } from "@/utils/metadata";

export const metadata = metadataWith(
  "404 | Carlos Valdez",
  "This page was not found.\n\nCarlos Valdez is a passionate full-stack developer with a background in human-computer interaction. He focuses on solutions that prioritize a user's experience and security.",
  "https://carlos.vldz.tech/",
);

export default function NotFound() {
  return (
    <section className={styles.container404}>
      <div>
        <h1>Not Found</h1>
        <p>The page could not be found.</p>
        <Link href="/">Consider going home?</Link>
      </div>
    </section>
  );
}
