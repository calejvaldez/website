-- CreateTable
CREATE TABLE "BlogMetadata" (
    "id" TEXT NOT NULL,
    "slug" TEXT,
    "url" TEXT,
    "title" TEXT NOT NULL,
    "timestamp" INTEGER NOT NULL,
    "tags" TEXT[],
    "description" TEXT,
    "unlisted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "BlogMetadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PortfolioProjects" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "unlisted" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PortfolioProjects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BlogMetadata_id_key" ON "BlogMetadata"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PortfolioProjects_id_key" ON "PortfolioProjects"("id");
