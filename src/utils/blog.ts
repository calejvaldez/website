import path from "path";
import fs from "fs";
import { PrismaClient } from "@/generated/prisma/client";
import { randomUUID } from "crypto";
import { generateTimestamp } from "./time";

export async function fetchArticleMetadata(slug: string) {
  const prisma = new PrismaClient();
  const blogPost = await prisma.blogMetadata.findFirst({
    where: { slug: slug },
  });

  return blogPost!;
}

export async function fetchArticle(slug: string): Promise<string> {
  //const response = await fetch(`https://calejvaldez.com/content/${slug}.md`);
  //return response.text();
  const filePath = path.join(process.cwd(), "public", "content", `${slug}.md`);
  return fs.readFileSync(filePath, "utf-8");
}

export async function fetchArticles() {
  const prisma = new PrismaClient();
  const blogPosts = await prisma.blogMetadata.findMany();
  return blogPosts.sort((a, b) => b.timestamp - a.timestamp);
}

export async function createArticle(
  title: string,
  description: string,
  unlisted = false,
  slug?: string,
  url?: string,
) {
  if (!(slug || url)) {
    throw new Error("slug or url is expected. Where is the blog post located?");
  }

  const prisma = new PrismaClient();
  const id = randomUUID();
  const ts = generateTimestamp();

  const post = await prisma.blogMetadata.create({
    data: {
      id,
      title,
      description,
      unlisted,
      slug,
      url,
      timestamp: ts,
    },
  });

  return post;
}
