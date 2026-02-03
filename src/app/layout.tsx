/*
layout.tsx
Carlos Valdez
*/
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
