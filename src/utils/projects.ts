import prisma from "./prisma";

export async function getProjects() {
  const projects = await prisma.project.findMany();
  return projects
    .filter((p) => p.isPublic && p.publicIndex !== null && p.promoteUrl)
    .sort((a, b) => a.publicIndex! - b.publicIndex!);
}
