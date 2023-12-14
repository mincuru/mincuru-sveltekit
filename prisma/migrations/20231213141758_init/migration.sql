-- CreateEnum
CREATE TYPE "PowerTrain" AS ENUM ('ICE', 'StrHV', 'MldHV', 'SerHV', 'PHEV', 'BEV', 'RexEV', 'FCEV');

-- CreateEnum
CREATE TYPE "FuelType" AS ENUM ('DIESEL', 'REGULAR', 'PREMIUM', 'LPG', 'BIO', 'HYDROGEN');

-- CreateEnum
CREATE TYPE "BodyType" AS ENUM ('SEDAN', 'HATCHBACK', 'CROSS_COUNTRY', 'K', 'COUPE', 'STATION_WAGON', 'SUV', 'ONEBOX', 'K_OPEN', 'K_ONEBOX', 'OPEN', 'PICKUP_TRUCK');

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "modelName" TEXT NOT NULL,
    "modelCode" TEXT NOT NULL,
    "gradeName" TEXT NOT NULL,
    "makerName" TEXT NOT NULL,
    "powerTrain" "PowerTrain",
    "driveSystem" TEXT NOT NULL,
    "url" TEXT,
    "imageUrl" TEXT,
    "price" INTEGER,
    "steering" TEXT,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Body" (
    "id" SERIAL NOT NULL,
    "type" "BodyType" NOT NULL,
    "length" INTEGER,
    "width" INTEGER,
    "height" INTEGER,
    "wheelBase" INTEGER,
    "roadClearance" INTEGER,
    "weight" INTEGER,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "Body_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tread" (
    "id" SERIAL NOT NULL,
    "front" INTEGER,
    "rear" INTEGER,
    "bodyId" INTEGER NOT NULL,

    CONSTRAINT "Tread_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interior" (
    "id" SERIAL NOT NULL,
    "length" INTEGER,
    "width" INTEGER,
    "height" INTEGER,
    "ridingCap" INTEGER,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "Interior_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Suspension" (
    "id" SERIAL NOT NULL,
    "front" TEXT,
    "rear" TEXT,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "Suspension_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Break" (
    "id" SERIAL NOT NULL,
    "front" TEXT,
    "rear" TEXT,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "Break_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Engine" (
    "id" SERIAL NOT NULL,
    "code" TEXT,
    "type" TEXT,
    "cylinderNum" INTEGER,
    "cylinderLayout" TEXT,
    "valveSystem" TEXT,
    "displacement" INTEGER,
    "bore" INTEGER,
    "stroke" INTEGER,
    "compressionRatio" DOUBLE PRECISION,
    "maxOutputKw" DOUBLE PRECISION,
    "maxOutputLowerRpm" INTEGER,
    "maxOutputHigherRpm" INTEGER,
    "maxTorqueNm" DOUBLE PRECISION,
    "maxTorqueLowerRpm" INTEGER,
    "maxTorqueHigherRpm" INTEGER,
    "fuelSystem" TEXT,
    "fuelType" "FuelType",
    "fuelTankCap" INTEGER,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "Engine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Performance" (
    "id" SERIAL NOT NULL,
    "minTurningRadius" INTEGER,
    "fcrWltc" DOUBLE PRECISION,
    "fcrWltcL" DOUBLE PRECISION,
    "fcrWltcM" DOUBLE PRECISION,
    "fcrWltcH" DOUBLE PRECISION,
    "fcrWltcExh" DOUBLE PRECISION,
    "fcrJc08" DOUBLE PRECISION,
    "mpcWltc" DOUBLE PRECISION,
    "ecrWltc" DOUBLE PRECISION,
    "ecrWltcL" DOUBLE PRECISION,
    "ecrWltcM" DOUBLE PRECISION,
    "ecrWltcH" DOUBLE PRECISION,
    "ecrWltcExh" DOUBLE PRECISION,
    "ecrJc08" DOUBLE PRECISION,
    "mpcJc08" DOUBLE PRECISION,
    "fuelEfficiency" TEXT[],
    "carId" INTEGER NOT NULL,

    CONSTRAINT "Performance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Body_carId_key" ON "Body"("carId");

-- CreateIndex
CREATE UNIQUE INDEX "Tread_bodyId_key" ON "Tread"("bodyId");

-- CreateIndex
CREATE UNIQUE INDEX "Interior_carId_key" ON "Interior"("carId");

-- CreateIndex
CREATE UNIQUE INDEX "Suspension_carId_key" ON "Suspension"("carId");

-- CreateIndex
CREATE UNIQUE INDEX "Break_carId_key" ON "Break"("carId");

-- CreateIndex
CREATE UNIQUE INDEX "Engine_carId_key" ON "Engine"("carId");

-- CreateIndex
CREATE UNIQUE INDEX "Performance_carId_key" ON "Performance"("carId");

-- AddForeignKey
ALTER TABLE "Body" ADD CONSTRAINT "Body_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tread" ADD CONSTRAINT "Tread_bodyId_fkey" FOREIGN KEY ("bodyId") REFERENCES "Body"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interior" ADD CONSTRAINT "Interior_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Suspension" ADD CONSTRAINT "Suspension_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Break" ADD CONSTRAINT "Break_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Engine" ADD CONSTRAINT "Engine_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Performance" ADD CONSTRAINT "Performance_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
