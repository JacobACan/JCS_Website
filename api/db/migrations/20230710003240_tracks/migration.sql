-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "songId" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Track_songId_key" ON "Track"("songId");
