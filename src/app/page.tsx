/*
/app/page.tsx
Carlos Valdez
*/
import styles from "./page.module.css";
import Image from "next/image";
import IndexLink from "./_components/IndexLink";
import { fetchArticles } from "@/utils/blog";
import { metadataWith } from "@/utils/metadata";
import Link from "next/link";
import { getProjects } from "@/utils/projects";

export const metadata = metadataWith(
  "Carlos Valdez, full-stack developer in California",
  "Carlos Valdez is a passionate full-stack developer with a background in human-computer interaction. He focuses on solutions that prioritize a user's experience and security.",
  "https://calejvaldez.com/",
);

export default async function Home() {
  const articles = await fetchArticles();
  const listedArticles = articles.filter((a) => !a.unlisted);
  const lastArticle = listedArticles[listedArticles.length - 1];
  const articleLink = lastArticle.url
    ? lastArticle.url
    : `/blog/${lastArticle.slug}/`;
  const projects = await getProjects();

  return (
    <>
      <section className={styles.aboutContainer} id="about">
        <div className={styles.about}>
          <div className={styles.text}>
            <h1># About Carlos</h1>
            <p>
              I'm Carlos, a software developer based in Irvine, California! I'm
              a passionate full-stack developer with a background in
              human-computer interaction. I build software from the ground up
              based on the needs of a project. I focus on solutions that
              prioritize a user's experience and security.
            </p>
            <Link href="/card/">
              <button>See My Work</button>
            </Link>
            {/*<p>
              I also like capybaras,{" "}
              <Link href="/media">tv shows, and movies</Link>.
            </p>*/}
          </div>

          <Image
            draggable={false}
            width={250}
            height={250}
            alt="Carlos' Gravatar of him holding a capybara plushy."
            src="https://gravatar.com/avatar/41bb2938e02bf5326eb6b82ec02d919ca97cf68b376c4c5769fbba4acc85a190?s=350"
          />
        </div>
      </section>
      <section className={styles.projectsContainer} id="projects">
        <div className={styles.projects}>
          <h2>## My Projects</h2>
          {projects.map((project) => {
            return (
              <IndexLink
                key={project.id}
                url={project.promoteUrl!}
                img={project.imageUrl}
                title={project.title}
                description={project.description}
              />
            );
          })}
        </div>
      </section>
      {lastArticle && (
        <section className={styles.postContainer} id="posts">
          <div className={styles.post}>
            <h3>### My Latest Post</h3>
            <IndexLink
              url={articleLink}
              title={lastArticle.title}
              description={lastArticle.description || "Description not set."}
              timestamp={lastArticle.timestamp}
            />
          </div>
        </section>
      )}
    </>
  );
}
