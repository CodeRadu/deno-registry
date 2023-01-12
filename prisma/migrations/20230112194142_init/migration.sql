-- CreateTable
CREATE TABLE "Package" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "repository" TEXT NOT NULL DEFAULT '',
    "repositoryName" TEXT NOT NULL DEFAULT '',
    "fullRepositoryName" TEXT NOT NULL DEFAULT '',
    "valid" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Package_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Package_name_key" ON "Package"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Package_repository_key" ON "Package"("repository");

-- CreateIndex
CREATE UNIQUE INDEX "Package_repositoryName_key" ON "Package"("repositoryName");

-- CreateIndex
CREATE UNIQUE INDEX "Package_fullRepositoryName_key" ON "Package"("fullRepositoryName");
