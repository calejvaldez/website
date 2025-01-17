/*
blog/page.tsx
Carlos Valdez
*/
"use client";
import articlesJson from "@/public/content/metadata.json"
import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { ArticleMetadata, timestampToString } from "../helper";
import Link from "next/link";

function BlogButton({article}: {article: ArticleMetadata}) {
    return <li>
        <p>{timestampToString(article.timestamp)}: <Link href={`/blog/${article.slug}/`}>{article.title}</Link></p>
    </li>
}

export default function BlogIndex() {
    const [articles, setArticles] = useState<ArticleMetadata[]>([]);

    useEffect(() => {
        setArticles(articlesJson);
    }, [articles])

    return <>
        <Link href="/">Back</Link>
        <Heading sectionId="blog" level="h1" hideLinkButton={true}>/blog</Heading>
        <p>I'm a yapper with a blog. Some of these are personal, others are professional. Pick your poison.</p>
        <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
            {articles.sort((a, b) => b.timestamp - a.timestamp).map((article) => {
                return <BlogButton key={article.slug} article={article} />
            })}
        </ul>
        
    </>
}
