import prisma from '$lib/prisma';
import type { CarDetail } from '$lib/model/CarDetail';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
  const data = await prisma.car.findMany();
  if (!data) {
    throw error(404, {
      message: 'Not found'
    });
  }

  const cars = data.map((d) => {
    const car: CarDetail = {
      id: d.id,
      modelName: d.modelName,
      modelCode: d.modelCode, //'6BA-EKEP',
      gradeName: d.gradeName, //'20S Smart Edition',
      makerName: d.makerName, //'マツダ',
      powerTrain: d.powerTrain, //'ICE',
      driveSystem: d.driveSystem, //'AWD',
      url: d.url, //'https://www.mazda.co.jp/cars/cx-5/',
      imageUrl: d.imageUrl,
      //'https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg',
      price: d.price, //3200000,
      body: {
        type: d.bodyType, //'SUV',
        length: d.bodyLength, //4747,
        width: d.bodyWidth, //1850,
        height: d.bodyHeight, //1690,
        wheelBase: d.wheelBase, //2700,
        tread: {
          front: d.treadFront, //1590,
          rear: d.treadRear //1590
        },
        roadClearance: d.roadClearance, //200,
        weight: d.weight //1550
      },
      interior: {
        length: d.interiorLength, //1890,
        width: d.interiorWidth, //1540,
        height: d.interiorHeight, //1265,
        ridingCap: d.ridingCap //5
      },
      steering: d.steering, //'ラック&ピニオン式',
      suspension: {
        front: d.suspensionFront, //'ストラット式',
        rear: d.suspensionRear //'マルチリンク式'
      },
      break: {
        front: d.breakFront, //'ベンチレーテッドディスク',
        rear: d.breakRear //'ディスク'
      },
      engine: {
        code: d.engineCode, //'PE-VPS',
        type: d.engineType, //'水冷直列4気筒DOHC16バルブ',
        cylinderNum: d.cylinderNum, //4,
        cylinderLayout: d.cylinderLayout, //'直列',
        valveSystem: d.valveSystem, //'DOHC',
        displacement: d.displacement, //1997,
        bore: d.bore, //83.5,
        stroke: d.stroke, //91.2,
        compressionRatio: d.compressionRatio, //13.0,
        maxOutputKw: d.maxOutputKw, //115,
        maxOutputLowerRpm: d.maxOutputLowerRpm, //6000,
        maxOutputHigherRpm: d.maxOutputHigherRpm, //4000,
        maxTorqueNm: d.maxTorqueNm, //213,
        maxTorqueLowerRpm: d.maxTorqueLowerRpm, //4000,
        maxTorqueHigherRpm: d.maxTorqueHigherRpm, //4000,
        fuelSystem: d.fuelSystem, //'筒内直接噴射(DI)',
        fuelType: d.fuelType, //'REGULAR',
        fuelTankCap: d.fuelTankCap //56
      },
      performance: {
        minTurningRadius: d.minTurningRadius, //5.5,
        fcrWltc: d.fcrWltc, //14.6,
        fcrWltcL: d.fcrWltcL, //11.2,
        fcrWltcM: d.fcrWltcM, //15.3,
        fcrWltcH: d.fcrWltcH, //16.2,
        fcrWltcExh: d.fcrWltcExh, //13.6,
        fcrJc08: d.fcrJc08, //15.6,
        mpcWltc: d.mpcWltc, //14.6,
        ecrWltc: d.ecrWltc,
        ecrWltcL: d.ecrWltcL,
        ecrWltcM: d.ecrWltcM,
        ecrWltcH: d.ecrWltcH,
        ecrWltcExh: d.ecrWltcExh,
        ecrJc08: d.ecrJc08,
        mpcJc08: d.mpcJc08,
        fuelEfficiency: d.fuelEfficiency //[
        //   'ミラーサイクルエンジン',
        //   'アイドリングストップ機構',
        //   '筒内直接噴射(DI)',
        //   '可変バルブタイミング',
        //   '気筒休止(PY-RPS型車)',
        //   '充電制御',
        //   'ロックアップ機構付トルクコンバーター',
        //   '電動パワーステアリング'
        // ]
      }
    };
    return car;
  });

  // const cars: CarDetail[] = [
  //   {
  //     id: 1,
  //     modelName: 'CX-5',
  //     modelCode: '6BA-KFEP',
  //     gradeName: '20S',
  //     makerName: 'マツダ',
  //     powerTrain: 'ICE',
  //     driveSystem: 'AWD',
  //     url: 'https://www.mazda.co.jp/cars/cx-5/',
  //     imageUrl:
  //       'https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg',
  //     price: 3200000,
  //     body: {
  //       type: 'SUV',
  //       length: 4747,
  //       width: 1850,
  //       height: 1690
  //     },
  //     engine: {
  //       fuelType: 'REGULAR'
  //     }
  //   },
  //   {
  //     id: 2,
  //     modelName: 'カローラツーリング',
  //     modelCode: '6AA-XWE211-AEXSB',
  //     gradeName: 'WxB',
  //     makerName: 'トヨタ',
  //     powerTrain: 'StrHV',
  //     driveSystem: 'AWD',
  //     url: 'https://toyota.jp/corollatouring/',
  //     imageUrl:
  //       'https://upload.wikimedia.org/wikipedia/commons/8/8a/Toyota_COROLLA_TOURING_HYBRID_W%C3%97B_2WD_%286AA-ZWE211W-AWXSB%29_front.jpg',
  //     price: 2678500,
  //     body: {
  //       type: 'STATION_WAGON',
  //       length: 4495,
  //       width: 1745,
  //       height: 1460
  //     },
  //     engine: {
  //       fuelType: 'REGULAR'
  //     }
  //   },
  //   {
  //     id: 3,
  //     modelName: 'NSX',
  //     modelCode: '5AA-NC1',
  //     gradeName: 'Type S',
  //     makerName: 'ホンダ',
  //     powerTrain: 'MldHV',
  //     driveSystem: 'AWD',
  //     url: 'https://www.honda.co.jp/NSX/types/',
  //     imageUrl:
  //       'https://upload.wikimedia.org/wikipedia/commons/e/ea/2019_Honda_NSX_3.5_CAA-NC1_%2820190722%29_01.jpg',
  //     price: 27940000,
  //     body: {
  //       type: 'COUPE',
  //       length: 4535,
  //       width: 1940,
  //       height: 1215
  //     },
  //     engine: {
  //       fuelType: 'PREMIUM'
  //     }
  //   },
  //   {
  //     id: 4,
  //     modelName: 'Honda e',
  //     modelCode: 'ZAA-ZC7',
  //     gradeName: 'Advance',
  //     makerName: 'ホンダ',
  //     powerTrain: 'BEV',
  //     driveSystem: 'RR',
  //     url: 'https://www.honda.co.jp/honda-e/',
  //     imageUrl:
  //       'https://upload.wikimedia.org/wikipedia/commons/9/9e/Honda_e_Advance_%28ZAA-ZC7%29_front.jpg',
  //     price: 4950000,
  //     body: {
  //       type: 'HATCHBACK',
  //       length: 3895,
  //       width: 1750,
  //       height: 1510
  //     },
  //     engine: {
  //       fuelType: null
  //     }
  //   },
  //   {
  //     id: 5,
  //     modelName: 'ノート',
  //     modelCode: 'HR15DE',
  //     gradeName: '15RX',
  //     makerName: '日産',
  //     powerTrain: 'SerHV',
  //     driveSystem: 'FF',
  //     url: 'https://www3.nissan.co.jp/vehicles/new/note.html',
  //     imageUrl:
  //       'https://upload.wikimedia.org/wikipedia/commons/0/0a/Nissan_Note_e-POWER_%28E13%29%2C_2021%2C_front-left.jpg',
  //     price: 2445300,
  //     body: {
  //       type: 'HATCHBACK',
  //       length: 4045,
  //       width: 1695,
  //       height: 1520,
  //       tread: {
  //         front: 1480,
  //         rear: 1475
  //       }
  //     },
  //     engine: {
  //       fuelType: 'REGULAR'
  //     }
  //   },
  //   {
  //     id: 6,
  //     modelName: '3シリーズツーリング',
  //     modelCode: '3BA-6K20',
  //     gradeName: '318iツーリング',
  //     makerName: 'BMW',
  //     powerTrain: 'ICE',
  //     driveSystem: 'AWD',
  //     url: 'https://www.bmw.co.jp/ja/all-models/3-series/touring/2019/bmw-3-series-touring-inspire.html',
  //     imageUrl: '',
  //     price: 6340000,
  //     body: {
  //       type: 'STATION_WAGON',
  //       length: 4715,
  //       width: 1825,
  //       height: 1475
  //     },
  //     engine: {
  //       fuelType: 'DIESEL'
  //     }
  //   }
  // ];
  return { cars };
}) satisfies PageServerLoad;
