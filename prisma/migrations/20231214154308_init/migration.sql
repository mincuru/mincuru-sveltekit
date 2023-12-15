/*
  Warnings:

  - You are about to drop the `Body` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Break` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Engine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Interior` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Performance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Suspension` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tread` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bodyType` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Body" DROP CONSTRAINT "Body_carId_fkey";

-- DropForeignKey
ALTER TABLE "Break" DROP CONSTRAINT "Break_carId_fkey";

-- DropForeignKey
ALTER TABLE "Engine" DROP CONSTRAINT "Engine_carId_fkey";

-- DropForeignKey
ALTER TABLE "Interior" DROP CONSTRAINT "Interior_carId_fkey";

-- DropForeignKey
ALTER TABLE "Performance" DROP CONSTRAINT "Performance_carId_fkey";

-- DropForeignKey
ALTER TABLE "Suspension" DROP CONSTRAINT "Suspension_carId_fkey";

-- DropForeignKey
ALTER TABLE "Tread" DROP CONSTRAINT "Tread_bodyId_fkey";

-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "bodyHeight" INTEGER,
ADD COLUMN     "bodyLength" INTEGER,
ADD COLUMN     "bodyType" "BodyType" NOT NULL,
ADD COLUMN     "bodyWidth" INTEGER,
ADD COLUMN     "bore" INTEGER,
ADD COLUMN     "breakFront" TEXT,
ADD COLUMN     "breakRear" TEXT,
ADD COLUMN     "compressionRatio" DOUBLE PRECISION,
ADD COLUMN     "cylinderLayout" TEXT,
ADD COLUMN     "cylinderNum" INTEGER,
ADD COLUMN     "displacement" INTEGER,
ADD COLUMN     "ecrJc08" DOUBLE PRECISION,
ADD COLUMN     "ecrWltc" DOUBLE PRECISION,
ADD COLUMN     "ecrWltcExh" DOUBLE PRECISION,
ADD COLUMN     "ecrWltcH" DOUBLE PRECISION,
ADD COLUMN     "ecrWltcL" DOUBLE PRECISION,
ADD COLUMN     "ecrWltcM" DOUBLE PRECISION,
ADD COLUMN     "engineCode" TEXT,
ADD COLUMN     "engineType" TEXT,
ADD COLUMN     "fcrJc08" DOUBLE PRECISION,
ADD COLUMN     "fcrWltc" DOUBLE PRECISION,
ADD COLUMN     "fcrWltcExh" DOUBLE PRECISION,
ADD COLUMN     "fcrWltcH" DOUBLE PRECISION,
ADD COLUMN     "fcrWltcL" DOUBLE PRECISION,
ADD COLUMN     "fcrWltcM" DOUBLE PRECISION,
ADD COLUMN     "fuelEfficiency" TEXT[],
ADD COLUMN     "fuelSystem" TEXT,
ADD COLUMN     "fuelTankCap" INTEGER,
ADD COLUMN     "fuelType" "FuelType",
ADD COLUMN     "interiorHeight" INTEGER,
ADD COLUMN     "interiorLength" INTEGER,
ADD COLUMN     "interiorWidth" INTEGER,
ADD COLUMN     "maxOutputHigherRpm" INTEGER,
ADD COLUMN     "maxOutputKw" DOUBLE PRECISION,
ADD COLUMN     "maxOutputLowerRpm" INTEGER,
ADD COLUMN     "maxTorqueHigherRpm" INTEGER,
ADD COLUMN     "maxTorqueLowerRpm" INTEGER,
ADD COLUMN     "maxTorqueNm" DOUBLE PRECISION,
ADD COLUMN     "minTurningRadius" INTEGER,
ADD COLUMN     "mpcJc08" DOUBLE PRECISION,
ADD COLUMN     "mpcWltc" DOUBLE PRECISION,
ADD COLUMN     "ridingCap" INTEGER,
ADD COLUMN     "roadClearance" INTEGER,
ADD COLUMN     "stroke" INTEGER,
ADD COLUMN     "suspensionFront" TEXT,
ADD COLUMN     "suspensionRear" TEXT,
ADD COLUMN     "treadFront" INTEGER,
ADD COLUMN     "treadRear" INTEGER,
ADD COLUMN     "valveSystem" TEXT,
ADD COLUMN     "weight" INTEGER,
ADD COLUMN     "wheelBase" INTEGER;

-- DropTable
DROP TABLE "Body";

-- DropTable
DROP TABLE "Break";

-- DropTable
DROP TABLE "Engine";

-- DropTable
DROP TABLE "Interior";

-- DropTable
DROP TABLE "Performance";

-- DropTable
DROP TABLE "Suspension";

-- DropTable
DROP TABLE "Tread";
