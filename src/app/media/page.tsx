/*
media/page.tsx
Carlos Valdez
*/
import Heading from "@/components/Heading";
import { mediaCollection } from "@/utils/media";
import { metadataWith } from "@/utils/metadata";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = metadataWith(
  "/media | Carlos Valdez",
  "Shows, movies, and music that has somehow shaped how I view the world.",
  "https://calejvaldez.com/media/",
);

export default async function Page() {
  return (
    <section className={styles.mediaContainer}>
      <div className={styles.mediaContent}>
        <Heading sectionId="media" level="h1" hideLinkButton={true}>
          /media
        </Heading>
        <p>
          Shows, movies, and music that has somehow shaped how I view the world.
        </p>

        {mediaCollection.map((media, index) => {
          return (
            <section key={index}>
              <Heading
                level="h2"
                sectionId={index.toString()}
                hideLinkButton={true}
              >
                {media.label}
              </Heading>

              <p>
                {media.note}{" "}
                {media.url && (
                  <Link
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch here.
                  </Link>
                )}
              </p>
            </section>
          );
        })}
      </div>
    </section>
  );
}
