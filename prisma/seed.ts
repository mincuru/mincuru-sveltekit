import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const cx5 = await prisma.car.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      modelName: 'CX-5',
      modelCode: '6BA-EKEP',
      gradeName: '20S Smart Edition',
      makerName: 'マツダ',
      powerTrain: 'ICE',
      driveSystem: 'AWD',
      url: 'https://www.mazda.co.jp/cars/cx-5/',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg',
      price: 3200000,
      bodyType: 'SUV',
      bodyLength: 4747,
      bodyWidth: 1850,
      bodyHeight: 1690,
      wheelBase: 2700,
      treadFront: 1590,
      treadRear: 1590,
      roadClearance: 200,
      weight: 1550,
      interiorLength: 1890,
      interiorWidth: 1540,
      interiorHeight: 1265,
      ridingCap: 5,
      steering: 'ラック&ピニオン式',
      suspensionFront: 'ストラット式',
      suspensionRear: 'マルチリンク式',
      breakFront: 'ベンチレーテッドディスク',
      breakRear: 'ディスク',
      engineCode: 'PE-VPS',
      engineType: '水冷直列4気筒DOHC16バルブ',
      cylinderNum: 4,
      cylinderLayout: '直列',
      valveSystem: 'DOHC',
      displacement: 1997,
      bore: 83.5,
      stroke: 91.2,
      compressionRatio: 13.0,
      maxOutputKw: 115,
      maxOutputLowerRpm: 6000,
      maxOutputHigherRpm: 4000,
      maxTorqueNm: 213,
      maxTorqueLowerRpm: 4000,
      maxTorqueHigherRpm: 4000,
      fuelSystem: '筒内直接噴射(DI)',
      fuelType: 'REGULAR',
      fuelTankCap: 56,
      fcrWltc: 14.6,
      fcrWltcL: 11.2,
      fcrWltcM: 15.3,
      fcrWltcH: 16.2,
      fcrJc08: 15.6,
      minTurningRadius: 5.5,
      fuelEfficiency: [
        'ミラーサイクルエンジン',
        'アイドリングストップ機構',
        '筒内直接噴射(DI)',
        '可変バルブタイミング',
        '気筒休止(PY-RPS型車)',
        '充電制御',
        'ロックアップ機構付トルクコンバーター',
        '電動パワーステアリング'
      ]
    }
  });
  console.log({ cx5 });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
