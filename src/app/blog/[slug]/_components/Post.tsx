import { timestampToString } from "@/utils/time";
import { CSSProperties, ReactNode } from "react";
import Markdown from "markdown-to-jsx";
import Heading from "@/components/Heading";
import Link from "next/link";
import { fetchPost, fetchPostMetadata } from "@/utils/blog";
import styles from "./Post.module.css";
import Image from "next/image";
import TitleCard from "@/components/TitleCard";

export default async function Post({ slug }: { slug: string }) {
  const postMetadata = await fetchPostMetadata(slug);
  const markdown = await fetchPost(slug);
  const metadataStyle: CSSProperties = { color: "grey", fontSize: "14px" };

  function MetadataSummary({ children }: { children: string }) {
    return (
      <>
        <TitleCard title={children}>
          <>
            <p>{timestampToString(postMetadata.timestamp, true)}</p>
            <div className={styles.author}>
              <Image
                src="https://gravatar.com/avatar/41bb2938e02bf5326eb6b82ec02d919ca97cf68b376c4c5769fbba4acc85a190?s=350"
                alt="Carlos holding a capybara"
                width={50}
                height={50}
              />
              <div className={styles.authorDetails}>
                <p>Carlos Valdez</p>
                <p>Full-stack Developer</p>
              </div>
            </div>
          </>
        </TitleCard>
      </>
    );
  }

  function Wrapper({
    children,
    htmlTag,
    href,
  }: {
    children: ReactNode;
    htmlTag: "h2" | "h3" | "a";
    href?: string;
  }) {
    if (htmlTag === "h2" || htmlTag === "h3") {
      return (
        <>
          {children && (
            <Heading
              sectionId={children.toString().toLowerCase().replaceAll(" ", "-")}
              level={htmlTag}
              hideLinkButton={false}
            >
              {children}
            </Heading>
          )}
        </>
      );
    } else {
      return (
        <>
          {children && href && (
            <Link href={href} target="_blank" rel="noreferrer noopener">
              {children.toString()}
            </Link>
          )}
        </>
      );
    }
  }

  return (
    <>
      <Link href="/blog">{"< "}Blog posts</Link>
      <Markdown
        options={{
          wrapper: "article",
          overrides: {
            h1: { component: MetadataSummary },
            h2: { component: Wrapper, props: { htmlTag: "h2" } },
            h3: { component: Wrapper, props: { htmlTag: "h3" } },
            a: { component: Wrapper, props: { htmlTag: "a" } },
          },
        }}
      >
        {markdown}
      </Markdown>

      <span style={metadataStyle}>
        {timestampToString(postMetadata.timestamp, true)}
      </span>
      <br />
      <span style={metadataStyle}>
        License: Creative Commons Attribution 4.0 International
      </span>
      <br />
      <span style={metadataStyle}>
        Download: <a href={`/content/${postMetadata.slug}.md`}>Markdown</a>
      </span>
    </>
  );
}
