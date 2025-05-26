/*
blog/[slug]/page.tsx
Carlos Valdez
*/
import articleJson from "@/public/content/metadata.json"
import Article from "./components/Article";

export async function generateStaticParams() {
    return articleJson.map((article) => ({
        slug: article.slug
    }))
}

export default async function BlogWrapper({params}: {params: Promise<{slug: string}>}) {
    const { slug } = await params;
    return <Article slug={slug} />
}
