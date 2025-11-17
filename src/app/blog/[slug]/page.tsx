/*
blog/[slug]/page.tsx
Carlos Valdez
*/
import { fetchPostMetadata, fetchPosts } from "@/utils/blog";
import Post from "./_components/Post";
import { Metadata, ResolvingMetadata } from "next";
import { metadataWith } from "@/utils/metadata";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return (await fetchPosts())
    .filter((post) => post.slug)
    .map((post) => ({
      slug: post.slug,
    }));
}

type generateMetadataProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: generateMetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = (await params).slug;
  const postMetadata: any = await fetchPostMetadata(slug);

  return metadataWith(
    `${postMetadata.title} | Carlos Valdez`,
    `${postMetadata.description ? postMetadata.description : `Read "${postMetadata.title}" on Carlos' /blog!`}\n\nCarlos Valdez is a passionate full-stack developer with a background in human-computer interaction. He focuses on solutions that prioritize a user's experience and security.`,
    `https://calejvaldez.com/blog/${postMetadata.slug}/`,
  );
}

export default async function BlogWrapper({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <section className={styles.postContainer}>
      <div className={styles.postContent}>
        <Post slug={slug} />
      </div>
    </section>
  );
}
