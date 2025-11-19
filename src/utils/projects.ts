import { prisma } from "@/prisma";

export async function fetchProjects(includeUnlisted = false) {
  const res = await prisma.portfolioProjects.findMany();
  const projects = includeUnlisted
    ? res
    : res.filter((project) => project.index !== null);

  return projects.sort((a, b) => a.index! - b.index!);
}
