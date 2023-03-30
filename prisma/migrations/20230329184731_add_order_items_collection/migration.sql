/*
  Warnings:

  - The primary key for the `ItemsOnOrders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `menuId` on the `ItemsOnOrders` table. All the data in the column will be lost.
  - Added the required column `itemId` to the `ItemsOnOrders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ItemsOnOrders` DROP FOREIGN KEY `ItemsOnOrders_menuId_fkey`;

-- AlterTable
ALTER TABLE `ItemsOnOrders` DROP PRIMARY KEY,
    DROP COLUMN `menuId`,
    ADD COLUMN `itemId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`itemId`, `orderId`);

-- CreateTable
CREATE TABLE `items` (
    `id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `price` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ItemsOnOrders` ADD CONSTRAINT `ItemsOnOrders_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `items`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
