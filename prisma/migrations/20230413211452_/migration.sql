-- CreateEnum
CREATE TYPE "product_category" AS ENUM ('products', 'sale', 'demo', 'variation');

-- CreateEnum
CREATE TYPE "shipping_category" AS ENUM ('express', 'next_day', 'bi_weekly', 'exportation');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "published" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "draft" BOOLEAN DEFAULT true,
    "product_reference_id" TEXT,
    "price" DOUBLE PRECISION,
    "rebate" DOUBLE PRECISION,
    "category" "product_category" DEFAULT 'products',
    "description_short" TEXT,
    "description_body" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product_variation" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "draft" BOOLEAN DEFAULT true,
    "product_reference_id" TEXT,
    "price" DOUBLE PRECISION,
    "rebate" DOUBLE PRECISION,
    "description_short" TEXT,
    "description_body" TEXT,
    "productId" TEXT,

    CONSTRAINT "Product_variation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Freight" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "price" DOUBLE PRECISION,
    "description" TEXT,
    "category" "shipping_category",

    CONSTRAINT "Freight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_reference_id_key" ON "Product"("product_reference_id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_variation_id_key" ON "Product_variation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_variation_product_reference_id_key" ON "Product_variation"("product_reference_id");

-- CreateIndex
CREATE UNIQUE INDEX "Freight_id_key" ON "Freight"("id");

-- AddForeignKey
ALTER TABLE "Product_variation" ADD CONSTRAINT "Product_variation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
