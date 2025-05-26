/*
blog/[slug]/page.tsx
Carlos Valdez
*/
import { fetchArticlesMetadata } from "@/utils/blog";
import Article from "./_components/Article";

export async function generateStaticParams() {
    const articlesMetadata = await fetchArticlesMetadata();
    return articlesMetadata.map((article) => ({
        slug: article.slug
    }))
}

export default async function BlogWrapper({params}: {params: Promise<{slug: string}>}) {
    const { slug } = await params;
    return <Article slug={slug} />
}
