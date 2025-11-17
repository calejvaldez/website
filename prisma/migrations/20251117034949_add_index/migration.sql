/*
  Warnings:

  - You are about to drop the column `unlisted` on the `PortfolioProjects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PortfolioProjects" DROP COLUMN "unlisted",
ADD COLUMN     "index" INTEGER;
