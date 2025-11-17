import { PrismaClient } from "@/generated/prisma/client";

export async function fetchProjects(includeUnlisted = false) {
  const prisma = new PrismaClient();
  const res = await prisma.portfolioProjects.findMany();
  const projects = includeUnlisted
    ? res
    : res.filter((project) => project.index !== null);

  return projects.sort((a, b) => a.index! - b.index!);
}
