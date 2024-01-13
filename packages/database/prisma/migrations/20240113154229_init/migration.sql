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
    "powerTrain" "PowerTrain" NOT NULL,
    "driveSystem" TEXT NOT NULL,
    "url" TEXT,
    "imageUrl" TEXT,
    "price" INTEGER,
    "bodyType" "BodyType" NOT NULL,
    "bodyLength" INTEGER,
    "bodyWidth" INTEGER,
    "bodyHeight" INTEGER,
    "wheelBase" INTEGER,
    "treadFront" INTEGER,
    "treadRear" INTEGER,
    "roadClearance" INTEGER,
    "weight" INTEGER,
    "interiorLength" INTEGER,
    "interiorWidth" INTEGER,
    "interiorHeight" INTEGER,
    "ridingCap" INTEGER,
    "steering" TEXT,
    "suspensionFront" TEXT,
    "suspensionRear" TEXT,
    "breakFront" TEXT,
    "breakRear" TEXT,
    "engineCode" TEXT,
    "engineType" TEXT,
    "engineCylinderNum" INTEGER,
    "engineCylinderLayout" TEXT,
    "engineValveSystem" TEXT,
    "engineDisplacement" INTEGER,
    "engineBore" INTEGER,
    "engineStroke" INTEGER,
    "engineCompressionRatio" DOUBLE PRECISION,
    "engineMaxOutputKw" DOUBLE PRECISION,
    "engineMaxOutputLowerRpm" INTEGER,
    "engineMaxOutputHigherRpm" INTEGER,
    "engineMaxTorqueNm" DOUBLE PRECISION,
    "engineMaxTorqueLowerRpm" INTEGER,
    "engineMaxTorqueHigherRpm" INTEGER,
    "fuelSystem" TEXT,
    "fuelType" "FuelType",
    "fuelTankCap" INTEGER,
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

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
