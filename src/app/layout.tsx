/*
layout.tsx
Carlos Valdez
*/
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { metadataWith } from "@/utils/metadata";

const sourceSansPro = Source_Sans_3({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = metadataWith(
  "Carlos Valdez",
  "A software developer from California",
  "https://calejvaldez.com/",
  "https://gravatar.com/avatar/9ee4f31a2821014982fc155c5abbec7c92a71d30e6992673fdeb34324f45f1f8?s=350",
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSansPro.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
