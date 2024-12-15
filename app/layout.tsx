/*
layout.tsx
Carlos Valdez
*/
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "carlos valdez",
  description: "a software developer from california.",
  icons:
    "https://gravatar.com/avatar/41bb2938e02bf5326eb6b82ec02d919ca97cf68b376c4c5769fbba4acc85a190?s=50",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <header>
          <h1>
            carlos valdez <i>(calejvaldez)</i>
          </h1>
          <p>a software developer from california.</p>
        </header>
        <main>{children}</main>
        <footer>
          <p>contact me: <Link href="https://github.com/calejvaldez/" target="_blank" rel="noreferrer noopener">github</Link>,{" "}
            <Link href="https://www.linkedin.com/in/calejvaldez/" target="_blank" rel="noreferrer noopener">linkedin</Link>,{" "}
            or <Link href="mailto:cvaldezh@uci.edu">email</Link></p>
          <div className="links">
            
          </div>
        </footer>
      </body>
    </html>
  );
}
