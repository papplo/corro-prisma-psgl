-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "freightId" TEXT;

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "host" TEXT,
    "alt_text" TEXT,
    "productId" TEXT,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_id_key" ON "Image"("id");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_freightId_fkey" FOREIGN KEY ("freightId") REFERENCES "Freight"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
