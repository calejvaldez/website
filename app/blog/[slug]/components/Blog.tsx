"use client";
import { ArticleMetadata, timestampToString } from "@/app/helper";
import { ReactNode, useEffect, useState } from "react";
import articleJson from "@/public/content/metadata.json"
import Markdown from 'markdown-to-jsx'
import Heading from "@/app/components/Heading";

export default function Blog({slug}: {slug: string}) {
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
    
    function H1Wrapper({children}: {children: ReactNode}) {
        return <>{children && <Heading sectionId={children.toString().toLowerCase().replaceAll(" ", "-")} level="h1" hideLinkButton={true} children={children} />}</>
    }

    function H2Wrapper({children}: {children: ReactNode}) {
        return <>{children && <Heading sectionId={children.toString().toLowerCase().replaceAll(" ", "-")} level="h2" children={children} />}</>
    }

    function AWrapper({children, ...props}: {children: ReactNode, href: string}) {
        return <>{children && <a href={props.href} target="_blank" rel="noreferrer noopener">{children.toString()}</a>}</>
    }

    return <>
        <Markdown
            options={{wrapper: 'article',
                overrides: {
                    h1: { component: H1Wrapper },
                    h2: { component: H2Wrapper },
                    a: { component: AWrapper },
                }
            }}
        >
            {markdown}
        </Markdown>
        {articleMetadata && <p style={{color: 'grey', fontSize: '14px'}}>{timestampToString(articleMetadata.timestamp, true)}</p>}
        {articleMetadata && <p style={{color: 'grey', fontSize: '14px'}}>License: Creative Commons Attribution 4.0 International</p>}
    </>
}
