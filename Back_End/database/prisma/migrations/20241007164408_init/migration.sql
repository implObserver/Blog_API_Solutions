/*
  Warnings:

  - Made the column `tag` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "tag" SET NOT NULL,
ALTER COLUMN "tag" SET DEFAULT 'Other';
