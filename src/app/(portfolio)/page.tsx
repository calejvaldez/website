/*
/app/page.tsx
Carlos Valdez
*/
import { metadataWith } from "@/utils/metadata";
import { redirect } from "next/navigation";

export const metadata = metadataWith(
  "Carlos Valdez, full-stack developer in California",
  "Carlos Valdez is a passionate full-stack developer with a background in human-computer interaction. He focuses on solutions that prioritize a user's experience and security.",
  "https://carlos.vldz.tech/",
);

export default async function Home() {
  redirect("/card");
}
