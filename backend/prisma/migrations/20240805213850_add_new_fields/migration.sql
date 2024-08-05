/*
  Warnings:

  - Added the required column `teacher` to the `task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topic` to the `task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "task" ADD COLUMN     "teacher" TEXT NOT NULL,
ADD COLUMN     "topic" TEXT NOT NULL;
