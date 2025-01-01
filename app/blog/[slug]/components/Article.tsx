"use client";
import { ArticleMetadata, timestampToString } from "@/app/helper";
import { ReactNode, useEffect, useState } from "react";
import articleJson from "@/public/content/metadata.json"
import Markdown from 'markdown-to-jsx'
import Heading from "@/app/components/Heading";

export default function Article({slug}: {slug: string}) {
    const [articleMetadata, setArticleMetadata] = useState<ArticleMetadata | null>(null);
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(`/content/${slug}.md`).then(response => {
            response.text().then(content => {
                setMarkdown(content);
                setArticleMetadata(articleJson.find(article => article.slug === slug) as ArticleMetadata)
            })
        })
    }, [markdown, articleMetadata])

    function Wrapper({children, htmlTag, href}: {children: ReactNode, htmlTag: "h1" | "h2" | "h3" | "a", href?: string}) {
        if (htmlTag === 'h1' || htmlTag === 'h2' || htmlTag === 'h3') {
            return <>{children && <Heading sectionId={children.toString().toLowerCase().replaceAll(" ", "-")} level={htmlTag} hideLinkButton={htmlTag === 'h1'}>{children}</Heading>}</>
        } else {
            return <>{children && <a href={href} target="_blank" rel="noreferrer noopener">{children.toString()}</a>}</>
        }
    }

    return <>
        <a href="/blog">Back</a>
        <Markdown
            options={{wrapper: 'article',
                overrides: {
                    h1: { component: Wrapper, props: {htmlTag: 'h1'} },
                    h2: { component: Wrapper, props: {htmlTag: 'h2'} },
                    h3: { component: Wrapper, props: {htmlTag: 'h3'} },
                    a: { component: Wrapper, props: {htmlTag: 'a'} },
                }
            }}
        >
            {markdown}
        </Markdown>
        
        {articleMetadata && <span style={{color: 'grey', fontSize: '14px'}}>{timestampToString(articleMetadata.timestamp, true)}</span>}
        <br/>
        {articleMetadata && <span style={{color: 'grey', fontSize: '14px'}}>License: Creative Commons Attribution 4.0 International</span>}
        <br/>
        {articleMetadata && <span style={{color: 'grey', fontSize: '14px'}}>Download: <a href={`/content/${articleMetadata.slug}.md`}>Markdown</a></span>}
        
        
    </>
}
