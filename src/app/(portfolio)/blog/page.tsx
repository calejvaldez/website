/*
blog/page.tsx
Carlos Valdez
*/
import { metadataWith } from "@/utils/metadata";
import { redirect } from "next/navigation";

export const metadata = metadataWith(
  "/blog | Carlos Valdez",
  "These are topics that interest me as a software developer.\n\nCarlos Valdez is a passionate full-stack developer with a background in human-computer interaction. He focuses on solutions that prioritize a user's experience and security.",
  "https://carlos.vldz.tech/blog/",
);

export default async function BlogIndex() {
  redirect("/card");
}
