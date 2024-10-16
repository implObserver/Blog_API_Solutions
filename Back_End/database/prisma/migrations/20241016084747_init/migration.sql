/*
  Warnings:

  - You are about to drop the column `Author` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "Author",
ADD COLUMN     "author" TEXT NOT NULL DEFAULT '';
