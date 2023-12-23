import prisma from '$lib/prisma';
import type { CarDetail } from '$lib/model/CarDetail';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async (/*{ params }*/) => {
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
  return { cars };
}) satisfies PageServerLoad;
