/*
/app/page.tsx
Carlos Valdez
*/
import { ReactNode } from "react";
import Link from "next/link";

export default function Home() {
  type SectionProps = {
    title: string
    children: ReactNode
  }

  function Section({title, children}: SectionProps) {
    return <div id={title.toLowerCase().replace(" ", "-")}>
      <h2 style={{fontSize: '20px'}}>{title}</h2>
      {children}
    </div>
  }

  return (
    <>
      <h1>Index</h1>
      <Section title="about me">
        <p>
          Hello world! I'm a software developer located in Irvine, CA. My work focuses{" "}
          on full-stack web development and ui/ux design. As a{" "}
          hobby, I like working with Linux, CLI tools, and open-source.
        </p>
        <p>
          I have experience with various coding languages, notably Python,{" "}
          JavaScript, React, and Rust. Tools I've used include Tauri, NextJS,{" "}
          and Sqlite. I also speak English and Spanish. 🇲🇽
        </p>
        <p>
          I'm currently pursuing my undergraduate Informatics degree at {" "}
          UC Irvine with a specialization in human-computer interaction.{" "}
          I'm also the project lead at the Ojos Project.
        </p>
      </Section>
      <Section title="positions">
        <ul>
          <li>Informatics student at <Link href="https://uci.edu" target="_blank" rel="noreferrer noopener">UC Irvine</Link></li>
          <li>Lead developer at <Link href="https://ojosproject.org/" target="_blank" rel="noreferrer noopener">Ojos Project</Link></li>
        </ul>
      </Section>
      <Section title="projects">
        <ul>
          <li><Link href="https://github.com/ojosproject/iris/" target="_blank" rel="noreferrer noopener">Iris</Link>: an open-source hospice management system. Tracks medications, video records, and more. Designed with NextJS and Tauri.</li>
          <li><Link href="https://github.com/calejvaldez/YouAreTyping/" target="_blank" rel="noreferrer noopener">You Are Typing</Link>: a journaling app designed as a desktop chat app. Meant to help you become your own best friend. Designed with Vite and Tauri.</li>
        </ul>
      </Section>
    </>
  );
}
