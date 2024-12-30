import { ReactNode } from "react"
import Heading from "./Heading"

type SectionProps = {
    title: string
    children: ReactNode
  }

export default function Section({title, children}: SectionProps) {
    return <>
        <Heading level="h2" sectionId={title.toLowerCase().replaceAll(" ", "-")}>{title}</Heading>
        {children}
    </>
}