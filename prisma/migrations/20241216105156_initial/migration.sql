-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL DEFAULT 'unbranded',
    "price" INTEGER NOT NULL,
    "specificationsId" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Specifications" (
    "id" TEXT NOT NULL,
    "size" TEXT,
    "weight" TEXT,
    "keyword" TEXT,
    "color" TEXT,
    "experationDate" TEXT,

    CONSTRAINT "Specifications_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_specificationsId_fkey" FOREIGN KEY ("specificationsId") REFERENCES "Specifications"("id") ON DELETE SET NULL ON UPDATE CASCADE;
