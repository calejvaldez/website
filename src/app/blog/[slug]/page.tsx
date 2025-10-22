/*
blog/[slug]/page.tsx
Carlos Valdez
*/
import { fetchArticleMetadata, articlesMetadata } from "@/utils/blog";
import Article from "./_components/Article";
import { Metadata, ResolvingMetadata } from "next";
import { metadataWith } from "@/utils/metadata";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return articlesMetadata.map((article) => ({
    slug: article.slug,
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
  const articleMetadata = await fetchArticleMetadata(slug);

  return metadataWith(
    `${articleMetadata.title} | Carlos Valdez`,
    `${articleMetadata.description ? articleMetadata.description : `Read "${articleMetadata.title}" on Carlos' /blog!`}\n\nCarlos Valdez is a passionate full-stack developer with a background in human-computer interaction. He focuses on solutions that prioritize a user's experience and security.`,
    `https://calejvaldez.com/blog/${articleMetadata.slug}/`,
  );
}

export default async function BlogWrapper({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <section className={styles.articleContainer}>
      <div className={styles.articleContent}>
        <Article slug={slug} />
      </div>
    </section>
  );
}
