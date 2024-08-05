/*
  Warnings:

  - You are about to drop the column `subject_id` on the `task` table. All the data in the column will be lost.
  - You are about to drop the `subject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "task" DROP CONSTRAINT "task_subject_id_fkey";

-- AlterTable
ALTER TABLE "task" DROP COLUMN "subject_id";

-- DropTable
DROP TABLE "subject";
