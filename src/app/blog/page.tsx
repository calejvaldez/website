/*
blog/page.tsx
Carlos Valdez
*/
import { fetchArticlesMetadata } from "@/utils/blog";
import Heading from "@/components/Heading";
import { timestampToString } from "@/utils/parsing";
import { ArticleMetadata } from "@/types/blog";
import Link from "next/link";

function BlogButton({article}: {article: ArticleMetadata}) {
    return <li>
        <p>{timestampToString(article.timestamp)}: <Link href={`/blog/${article.slug}/`}>{article.title}</Link></p>
    </li>
}

export default async function BlogIndex() {
    const articlesMetadata = await fetchArticlesMetadata();

    return <>
        <Link href="/">Back</Link>
        <Heading sectionId="blog" level="h1" hideLinkButton={true}>/blog</Heading>
        <p>I'm a yapper with a blog. Some of these are personal, others are professional. Pick your poison.</p>
        <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
            {articlesMetadata.sort((a, b) => b.timestamp - a.timestamp).map((article) => {
                return <BlogButton key={article.slug} article={article} />
            })}
        </ul>
        
    </>
}
