import { timestampToString } from "@/app/helper";
import { CSSProperties, ReactNode } from "react";
import Markdown from 'markdown-to-jsx'
import Heading from "@/app/components/Heading";
import Link from "next/link";
import { fetchArticle, fetchArticleMetadata } from "@/utils/blog";

export default async function Article({slug}: {slug: string}) {
    const articleMetadata = await fetchArticleMetadata(slug);
    const markdown = await fetchArticle(slug);
    const metadataStyle: CSSProperties = {color: 'grey', fontSize: '14px'};

    function Wrapper({children, htmlTag, href}: {children: ReactNode, htmlTag: "h1" | "h2" | "h3" | "a", href?: string}) {
        if (htmlTag === 'h1' || htmlTag === 'h2' || htmlTag === 'h3') {
            return <>{children && <Heading sectionId={children.toString().toLowerCase().replaceAll(" ", "-")} level={htmlTag} hideLinkButton={htmlTag === 'h1'}>{children}</Heading>}</>
        } else {
            return <>{children && href && <Link href={href} target="_blank" rel="noreferrer noopener">{children.toString()}</Link>}</>
        }
    }

    return <>
        <Link href="/blog">Back</Link>
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
        
        <span style={metadataStyle}>{timestampToString(articleMetadata.timestamp, true)}</span>
        <br/>
        <span style={metadataStyle}>License: Creative Commons Attribution 4.0 International</span>
        <br/>
        <span style={metadataStyle}>Download: <a href={`/content/${articleMetadata.slug}.md`}>Markdown</a></span>
    </>
}
