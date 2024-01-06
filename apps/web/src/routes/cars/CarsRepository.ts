import type { PrismaClient } from '@prisma/client';
import type { CarsFilter } from './CarsFilter';

export class CarsRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async getCars() {
    return await this.prisma.car.findMany();
  }

  async generateFilter(url: URL): Promise<CarsFilter> {
    console.log(url.searchParams);

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
        const makerNames = url.searchParams.get('makerNames');
        let b = false;
        if (makerNames != null) {
          b = makerNames!.includes(m.makerName);
        }
        return {
          title: m.makerName,
          value: m.makerName,
          checked: b
        };
      }),
      bodyTypes: bodyTypes.map((b) => {
        return {
          title: b.bodyType,
          value: b.bodyType,
          checked: url.searchParams.has(b.bodyType)
        };
      }),
      powerTrains: powerTrains.map((p) => {
        return {
          title: p.powerTrain!,
          value: p.powerTrain!,
          checked: url.searchParams.has(p.powerTrain!)
        };
      }),
      driveSystems: driveSystems.map((d) => {
        return {
          title: d.driveSystem,
          value: d.driveSystem,
          checked: url.searchParams.has(d.driveSystem)
        };
      })
    };
    return filter;
  }
}
