import { ArticleMetadata } from "@/app/helper";
import path from "path";
import fs from "fs";

export async function fetchArticlesMetadata(): Promise<ArticleMetadata[]> {
    // const response = await fetch("https://calejvaldez.com/content/metadata.json");
    // return response.json()
    const filePath = path.join(process.cwd(), 'public', 'content', 'metadata.json');
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

export async function fetchArticleMetadata(slug: string): Promise<ArticleMetadata> {
    const articlesMetadata = await fetchArticlesMetadata();
    return articlesMetadata.find(article => article.slug === slug) as ArticleMetadata;
};

export async function fetchArticle(slug: string): Promise<string> {
    //const response = await fetch(`https://calejvaldez.com/content/${slug}.md`);
    //return response.text();
    const filePath = path.join(process.cwd(), 'public', 'content', `${slug}.md`);
    return fs.readFileSync(filePath, 'utf-8');
}
