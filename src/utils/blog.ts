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

export async function fetchArticles(): Promise<ArticleMetadata[]> {
  return articlesMetadata.sort((a, b) => a.timestamp - b.timestamp);
}

export type ArticleMetadata = {
  slug: string;
  title: string;
  timestamp: number;
  tags: string[];
  description?: string;
  unlisted?: boolean;
};

export const articlesMetadata: ArticleMetadata[] = [
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
    description:
      "I talk about Meta's attempts at integrating ActivityPub into Threads, and the opposition throughout the Fediverse (defederation, ANTI-META FEDI PACT, and more).",
    tags: [],
  },
  {
    slug: "2025-and-beyond",
    title: "A Reminder for 2025 (and Beyond)",
    timestamp: 1735781652,
    tags: [],
    unlisted: true,
  },
  {
    slug: "consequences",
    title: "Face the consequences",
    timestamp: 1762466105,
    description:
      "In this personal post, I open up about my struggles with anxiety, speaking up, and how consequences aren't always bad.",
    tags: [],
  },
];
