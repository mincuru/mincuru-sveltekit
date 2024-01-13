import { BodyType, PowerTrain, type PrismaClient } from '@prisma/client';
import type { CarsFilter } from './CarsFilter';
import { error } from '@sveltejs/kit';
import type { Car } from '$lib/model/CarDisplay';

export class CarsRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async generateFilter(url: URL): Promise<CarsFilter> {
    const makers = await this.prisma.car.findMany({
      select: {
        makerName: true
      },
      distinct: ['makerName']
    });
    const bodyTypes = await this.prisma.car.findMany({
      select: {
        bodyType: true
      },
      distinct: ['bodyType']
    });
    const powerTrains = await this.prisma.car.findMany({
      select: {
        powerTrain: true
      },
      distinct: ['powerTrain']
    });
    const driveSystems = await this.prisma.car.findMany({
      select: {
        driveSystem: true
      },
      distinct: ['driveSystem']
    });
    const filter: CarsFilter = {
      makers: makers.map((m) => {
        return {
          title: m.makerName,
          value: m.makerName,
          checked: url.searchParams.get('makerNames')?.includes(m.makerName) ?? false
        };
      }),
      bodyTypes: bodyTypes.map((b) => {
        return {
          title: b.bodyType,
          value: b.bodyType,
          checked: url.searchParams.get('bodyTypes')?.includes(b.bodyType) ?? false
        };
      }),
      powerTrains: powerTrains.map((p) => {
        return {
          title: p.powerTrain!,
          value: p.powerTrain!,
          checked: url.searchParams.get('powerTrains')?.includes(p.powerTrain) ?? false
        };
      }),
      driveSystems: driveSystems.map((d) => {
        return {
          title: d.driveSystem,
          value: d.driveSystem,
          checked: url.searchParams.get('driveSystems')?.includes(d.driveSystem) ?? false
        };
      })
    };
    return filter;
  }

  async queryCars(filter: CarsFilter): Promise<Car[]> {
    const inMakerNames = filter.makers.filter((m) => m.checked).map((m) => m.value);
    let whereMakerName = {};
    if (inMakerNames.length > 0) {
      whereMakerName = { makerName: { in: inMakerNames } };
    }

    const inBodyTypes = filter.bodyTypes
      .filter((b) => b.checked)
      .map((b) => BodyType[b.value as unknown as keyof typeof BodyType]);
    let whereBodyType = {};
    if (inBodyTypes.length > 0) {
      whereBodyType = { bodyType: { in: inBodyTypes } };
    }

    const inPowerTrains = filter.powerTrains
      .filter((p) => p.checked)
      .map((p) => PowerTrain[p.value as unknown as keyof typeof PowerTrain]);
    let wherePowerTrain = {};
    if (inPowerTrains.length > 0) {
      wherePowerTrain = { powerTrain: { in: inPowerTrains } };
    }

    const inDriveSystems = filter.driveSystems.filter((d) => d.checked).map((d) => d.value);
    let whereDriveSystem = {};
    if (inDriveSystems.length > 0) {
      whereDriveSystem = { driveSystem: { in: inDriveSystems } };
    }
    const where = {
      where: { ...whereMakerName, ...whereBodyType, ...wherePowerTrain, ...whereDriveSystem }
    };
    // console.log(where);
    const data = await this.prisma.car.findMany(where);

    if (!data) {
      throw error(404, {
        message: 'Not found'
      });
    }

    return data;
  }
}
