/*
  Warnings:

  - You are about to drop the `Attribute` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Metadata` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Attribute` DROP FOREIGN KEY `Attribute_metadataId_fkey`;

-- DropTable
DROP TABLE `Attribute`;

-- DropTable
DROP TABLE `Metadata`;

-- CreateTable
CREATE TABLE `Animus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tokenId` VARCHAR(191) NOT NULL,
    `species` VARCHAR(191) NOT NULL,
    `generation` VARCHAR(191) NOT NULL,
    `aura` VARCHAR(191) NOT NULL,
    `element` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
