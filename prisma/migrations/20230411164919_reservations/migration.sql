/*
  Warnings:

  - The primary key for the `reservations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nopeople` on the `reservations` table. All the data in the column will be lost.
  - You are about to drop the column `resdate` on the `reservations` table. All the data in the column will be lost.
  - You are about to drop the column `restime` on the `reservations` table. All the data in the column will be lost.
  - Added the required column `date` to the `reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number_of_guests` to the `reservations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reservations` DROP PRIMARY KEY,
    DROP COLUMN `nopeople`,
    DROP COLUMN `resdate`,
    DROP COLUMN `restime`,
    ADD COLUMN `date` DATE NOT NULL,
    ADD COLUMN `id` VARCHAR(255) NOT NULL,
    ADD COLUMN `number_of_guests` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);
