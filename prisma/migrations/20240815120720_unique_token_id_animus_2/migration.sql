/*
  Warnings:

  - A unique constraint covering the columns `[tokenId]` on the table `Animus` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Animus_tokenId_key` ON `Animus`(`tokenId`);
