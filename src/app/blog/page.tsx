/*
blog/page.tsx
Carlos Valdez
*/
import { fetchPosts } from "@/utils/blog";
import { timestampToString } from "@/utils/time";
import Link from "next/link";
import { metadataWith } from "@/utils/metadata";
import styles from "./page.module.css";
import TitleCard from "@/components/TitleCard";

export const metadata = metadataWith(
  "/blog | Carlos Valdez",
  "These are topics that interest me as a software developer.\n\nCarlos Valdez is a passionate full-stack developer with a background in human-computer interaction. He focuses on solutions that prioritize a user's experience and security.",
  "https://calejvaldez.com/blog/",
);

function BlogButton({ post }: { post: any }) {
  const postLink = post.url ? post.url : `/blog/${post.slug}/`;

  return (
    <li>
      <p>
        {timestampToString(post.timestamp)}:{" "}
        <Link
          href={postLink}
          target={post.url ? "_blank" : undefined}
          rel={post.url ? "noreferrer noopener" : undefined}
        >
          {post.title}
        </Link>
      </p>
    </li>
  );
}

export default async function BlogIndex() {
  const posts = (await fetchPosts()).filter((post) => !post.unlisted);

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
          {posts.map((post) => {
            return <BlogButton key={post.slug || post.url} post={post} />;
          })}
        </ul>
      </div>
    </section>
  );
}
