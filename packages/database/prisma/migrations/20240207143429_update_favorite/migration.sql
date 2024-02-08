/*
  Warnings:

  - You are about to drop the column `favorite` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "favorite",
ADD COLUMN     "favorites" INTEGER[];
