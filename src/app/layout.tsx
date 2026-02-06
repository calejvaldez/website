/*
layout.tsx
Carlos Valdez
*/
import { Nunito, Lora } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>{children}</body>
    </html>
  );
}
