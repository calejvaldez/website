import { IndexLinkProps } from "@/app/_components/IndexLink";
import { ProjectButtonProps } from "@/components/ProjectButton";

export const projectsData: IndexLinkProps[] = [
  {
    url: "https://ojosproject.org/iris/",
    img: "https://ojosproject.org/images/iris-v0-summary.png",
    title:
      "Iris: a system to collaboratively care for a patient in palliative care",
    description:
      "As the lead developer, I used modern web technology (and a hint of Rust 🦀) to build an app that helps with many of the essentials in palliative care. Its focuses are to empower patient independence while caregivers can rest assured as they remotely monitor. It tracks medications, conducts questionnaires, records video, and more. It’s currently being used at UC Irvine to port it to Android.",
  },
  {
    url: "https://github.com/calejvaldez/YouAreTyping/releases/latest/",
    img: "https://raw.githubusercontent.com/calejvaldez/YouAreTyping/refs/heads/main/.github/assets/screenshot-pov.png",
    title: "You Are Typing: a chat to engaging in self-dialog",
    description:
      "I used Vite to create an app that lets you chat with yourself. This is meant to act as a grounding method for people to sort out their thoughts through self-dialog. You can send messages and mirror their perspective, making it look as if you're texting someone else.",
  },
];
