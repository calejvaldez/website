/*
blog/page.tsx
Carlos Valdez
*/
import { articlesMetadata } from "@/utils/blog";
import { timestampToString } from "@/utils/parsing";
import { ArticleMetadata } from "@/utils/blog";
import Link from "next/link";
import { metadataWith } from "@/utils/metadata";
import styles from "./page.module.css";
import TitleCard from "@/components/TitleCard";

export const metadata = metadataWith(
  "/blog | Carlos Valdez",
  "These are topics that interest me as a software developer.\n\nCarlos Valdez is a passionate full-stack developer with a background in human-computer interaction. He focuses on solutions that prioritize a user's experience and security.",
  "https://calejvaldez.com/blog/",
);

function BlogButton({ article }: { article: ArticleMetadata }) {
  return (
    <li>
      <p>
        {timestampToString(article.timestamp)}:{" "}
        <Link href={`/blog/${article.slug}/`}>{article.title}</Link>
      </p>
    </li>
  );
}

export default async function BlogIndex() {
  return (
    <section className={styles.blogContainer}>
      <div className={styles.blogContent}>
        <TitleCard title="/blog">
          <p>
            I'm a yapper with a blog. Some of these are personal, others are
            professional. Pick your poison.
          </p>
        </TitleCard>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {articlesMetadata
            .filter((article) => !article.unlisted)
            .sort((a, b) => b.timestamp - a.timestamp)
            .map((article) => {
              return <BlogButton key={article.slug} article={article} />;
            })}
        </ul>
      </div>
    </section>
  );
}
