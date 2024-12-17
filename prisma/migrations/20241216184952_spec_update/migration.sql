/*
  Warnings:

  - You are about to drop the column `experationDate` on the `Specifications` table. All the data in the column will be lost.
  - You are about to drop the column `keyword` on the `Specifications` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Specifications" DROP COLUMN "experationDate",
DROP COLUMN "keyword",
ADD COLUMN     "model" TEXT;
