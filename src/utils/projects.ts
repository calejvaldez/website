import { ProjectButtonProps } from "@/components/ProjectButton";

export const projectsData: ProjectButtonProps[] = [
  {
    name: "Iris",
    role: "Maintainer",
    description:
      "An open-source hospice management system. Tracks medications, video records, and more. Built with NextJS and Tauri.",
    link: "https://github.com/ojosproject/iris/releases/latest/",
    imageSrc: "https://ojosproject.org/images/iris-v0-summary.png",
    imageAlt: "Various screenshots of the Iris software.",
    startLabel: "October 2023",
    endLabel: "Present",
  },
  {
    name: "You Are Typing",
    role: "Developer",
    description:
      "A journaling app designed as a desktop chat app. Meant to help you become your own best friend. Built with Vite and Tauri.",
    link: "https://github.com/calejvaldez/YouAreTyping/releases/latest/",
    imageSrc:
      "https://raw.githubusercontent.com/calejvaldez/YouAreTyping/refs/heads/main/.github/assets/header.png",
    imageAlt: "You Are Typing logo",
    startLabel: "May 2023",
    endLabel: "Present",
  },
];
