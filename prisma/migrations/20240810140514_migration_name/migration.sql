-- CreateTable
CREATE TABLE `Burned` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tokenIds` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Unrevealed` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tokenIds` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Metadata` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tokenId` INTEGER NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Metadata_tokenId_key`(`tokenId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attribute` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` VARCHAR(191) NOT NULL,
    `trait_type` VARCHAR(191) NOT NULL,
    `metadataId` INTEGER NOT NULL,

    INDEX `Attribute_metadataId_idx`(`metadataId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Attribute` ADD CONSTRAINT `Attribute_metadataId_fkey` FOREIGN KEY (`metadataId`) REFERENCES `Metadata`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
