/*
layout.tsx
Carlos Valdez
*/
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Github, Linkedin, Mail } from "iconoir-react";

const sourceSansPro = Source_Sans_3({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSansPro.className}`}>
        <header>
          <Link style={{ textDecoration: "none" }} href="/">
            Carlos Valdez
          </Link>
          <ul>
            <li>
              <Link href="/documents/resume.pdf">Resume</Link>
            </li>
          </ul>
        </header>
        <main>{children}</main>
        <footer>
          <strong>I'm online.</strong>
          <ul>
            <li>
              <Link
                href="https://github.com/calejvaldez/"
                target="_blank"
                rel="noreferrer opener"
              >
                <Github />
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com/in/calejvaldez/"
                target="_blank"
                rel="noreferrer opener"
              >
                <Linkedin />
              </Link>
            </li>
            <li>
              <Link
                href="mailto:self@calejvaldez.com"
                target="_blank"
                rel="noreferrer opener"
              >
                <Mail />
              </Link>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
