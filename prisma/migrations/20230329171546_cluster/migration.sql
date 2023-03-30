-- CreateTable
CREATE TABLE `login` (
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`username`, `password`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `menu` (
    `id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(100) NULL,
    `price` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` VARCHAR(255) NOT NULL,
    `card_number` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `name` VARCHAR(100) NULL,
    `card_cvv` INTEGER NOT NULL,
    `card_exp` VARCHAR(100) NOT NULL,
    `total` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ItemsOnOrders` (
    `menuId` VARCHAR(191) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `assignedBy` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`menuId`, `orderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reservations` (
    `resdate` DATE NOT NULL,
    `nopeople` VARCHAR(5) NOT NULL,
    `restime` TIME(0) NOT NULL,
    `name` VARCHAR(255) NULL,

    PRIMARY KEY (`resdate`, `restime`, `nopeople`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ItemsOnOrders` ADD CONSTRAINT `ItemsOnOrders_menuId_fkey` FOREIGN KEY (`menuId`) REFERENCES `menu`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemsOnOrders` ADD CONSTRAINT `ItemsOnOrders_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
