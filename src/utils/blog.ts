import { ArticleMetadata } from "@/types/blog";
import path from "path";
import fs from "fs";

export async function fetchArticleMetadata(
  slug: string,
): Promise<ArticleMetadata> {
  return articlesMetadata.find(
    (article) => article.slug === slug,
  ) as ArticleMetadata;
}

export async function fetchArticle(slug: string): Promise<string> {
  //const response = await fetch(`https://calejvaldez.com/content/${slug}.md`);
  //return response.text();
  const filePath = path.join(process.cwd(), "public", "content", `${slug}.md`);
  return fs.readFileSync(filePath, "utf-8");
}

type articleMetadata = {
  slug: string;
  title: string;
  timestamp: number;
  tags: string[];
};

export const articlesMetadata: articleMetadata[] = [
  {
    slug: "linux-and-productivity",
    title: "Linux and Productivity",
    timestamp: 1711001220,
    tags: [],
  },
  {
    slug: "research",
    title: "Research",
    timestamp: 1711043160,
    tags: [],
  },
  {
    slug: "threads-fediverse",
    title: "Tangled Threads in the Fediverse",
    timestamp: 1711314540,
    tags: [],
  },
  {
    slug: "2025-and-beyond",
    title: "A Reminder for 2025 (and Beyond)",
    timestamp: 1735781652,
    tags: [],
  },
];
