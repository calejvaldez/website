/*
/app/page.tsx
Carlos Valdez
*/
import styles from "./page.module.css";
import Image from "next/image";
import IndexLink from "./_components/IndexLink";
import { fetchPosts } from "@/utils/blog";
import { metadataWith } from "@/utils/metadata";
import { fetchProjects } from "@/utils/projects";
import Link from "next/link";
import { auth } from "@/auth";
import { Folder } from "iconoir-react";

export const metadata = metadataWith(
  "Carlos Valdez, full-stack developer in California",
  "Carlos Valdez is a passionate full-stack developer with a background in human-computer interaction. He focuses on solutions that prioritize a user's experience and security.",
  "https://calejvaldez.com/",
);

export default async function Home() {
  const posts = await fetchPosts();
  const projects = await fetchProjects();
  const listedPosts = posts.filter((post) => !post.unlisted);
  const lastPost = listedPosts[0];
  const session = await auth();

  return (
    <>
      {session?.user && session.user.id === process.env.ADMIN_ID && (
        <section className={styles.adminContainer}>
          <div className={styles.admin}>
            <span className={styles.helloAdmin}>
              {session.user.image && (
                <Image
                  src={session.user.image}
                  width={50}
                  height={50}
                  alt="Website admin's Discord profile picture."
                />
              )}
              <h1>Welcome home, {session.user.name}.</h1>
            </span>
            <p>Let's build our future. Make yourself proud. :3</p>
            <ul className={styles.adminList}>
              <li>
                <Link
                  href="https://www.icloud.com/calendar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.iconText}>
                    <Folder /> Calendar
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.icloud.com/reminders/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.iconText}>
                    <Folder /> Reminders
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/jobs/search/?f_TPR=r3600&origin=JOB_SEARCH_PAGE_JOB_FILTER"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.iconText}>
                    <Folder /> LinkedIn
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.icloud.com/notes/note/UHJpdmF0ZTo6Tm90ZXM6OmN1cnJlbnRVc2VyOjpmMzA4ZWU3MS0zODU1LTRlZjYtOWEwZC1iYTU3NDM3M2YxMDI="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.iconText}>
                    <Folder /> My Goals
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://open.spotify.com/playlist/1v4bZ5udrQzVsHThARiVAd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.iconText}>
                    <Folder /> Personal Playlist
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog/consequences/">
                  <span className={styles.iconText}>
                    <Folder /> Consequences
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      )}
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
                key={project.url}
                url={project.url}
                img={project.img}
                title={project.title}
                description={project.description}
              />
            );
          })}
        </div>
      </section>
      {lastPost && (
        <section className={styles.postContainer} id="posts">
          <div className={styles.post}>
            <h3>### My Latest Post</h3>
            <IndexLink
              url={lastPost.url ? lastPost.url : `/blog/${lastPost.slug}/`}
              title={lastPost.title}
              description={lastPost.description || "Description not set."}
              timestamp={lastPost.timestamp}
            />
          </div>
        </section>
      )}
    </>
  );
}
