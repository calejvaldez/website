/*
blog/[slug]/page.tsx
Carlos Valdez
*/
import { fetchArticleMetadata, articlesMetadata } from "@/utils/blog";
import { Metadata, ResolvingMetadata } from "next";
import { metadataWith } from "@/utils/metadata";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return articlesMetadata
    .filter((article) => article.slug)
    .map((article) => ({
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
    `https://carlos.vldz.tech/blog/${articleMetadata.slug}/`,
  );
}

export default async function BlogWrapper({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect("/card");
}
