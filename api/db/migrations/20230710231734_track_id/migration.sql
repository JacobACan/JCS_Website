/*
  Warnings:

  - You are about to drop the column `songId` on the `Track` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[trackId]` on the table `Track` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `trackId` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Track_songId_key";

-- AlterTable
ALTER TABLE "Track" DROP COLUMN "songId",
ADD COLUMN     "trackId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Track_trackId_key" ON "Track"("trackId");
