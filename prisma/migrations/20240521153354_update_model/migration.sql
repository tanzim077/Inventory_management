/*
  Warnings:

  - You are about to drop the column `itemCount` on the `Product` table. All the data in the column will be lost.
  - Added the required column `itemsAvailable` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "orderedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "itemCount",
ADD COLUMN     "itemsAvailable" INTEGER NOT NULL;
