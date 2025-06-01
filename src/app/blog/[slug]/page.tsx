/*
blog/[slug]/page.tsx
Carlos Valdez
*/
import { fetchArticleMetadata, articlesMetadata } from "@/utils/blog";
import Article from "./_components/Article";
import { Metadata, ResolvingMetadata } from "next";

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

  return {
    title: `${articleMetadata.title.toLowerCase()} - carlos valdez`,
    authors: [{ name: "Carlos Valdez", url: "https://calejvaldez.com/" }],
    other: {
      "article:published_time": new Date(
        articleMetadata.timestamp * 1000,
      ).toISOString(),
    },
  };
}

export default async function BlogWrapper({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <Article slug={slug} />;
}
