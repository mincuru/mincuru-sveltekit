import prisma from '$lib/prisma';
import type { CarDetail } from '$lib/model/CarDetail';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
  const data = await prisma.car.findUnique({
    where: { id: Number(params.slug) }
  });
  if (!data) {
    throw error(404, {
      message: 'Not found'
    });
  }

  const car: CarDetail = {
    id: data.id,
    modelName: data.modelName,
    modelCode: data.modelCode, //'6BA-EKEP',
    gradeName: data.gradeName, //'20S Smart Edition',
    makerName: data.makerName, //'マツダ',
    powerTrain: data.powerTrain, //'ICE',
    driveSystem: data.driveSystem, //'AWD',
    url: data.url, //'https://www.mazda.co.jp/cars/cx-5/',
    imageUrl: data.imageUrl,
    //'https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg',
    price: data.price, //3200000,
    body: {
      type: data.bodyType, //'SUV',
      length: data.bodyLength, //4747,
      width: data.bodyWidth, //1850,
      height: data.bodyHeight, //1690,
      wheelBase: data.wheelBase, //2700,
      tread: {
        front: data.treadFront, //1590,
        rear: data.treadRear //1590
      },
      roadClearance: data.roadClearance, //200,
      weight: data.weight //1550
    },
    interior: {
      length: data.interiorLength, //1890,
      width: data.interiorWidth, //1540,
      height: data.interiorHeight, //1265,
      ridingCap: data.ridingCap //5
    },
    steering: data.steering, //'ラック&ピニオン式',
    suspension: {
      front: data.suspensionFront, //'ストラット式',
      rear: data.suspensionRear //'マルチリンク式'
    },
    break: {
      front: data.breakFront, //'ベンチレーテッドディスク',
      rear: data.breakRear //'ディスク'
    },
    engine: {
      code: data.engineCode, //'PE-VPS',
      type: data.engineType, //'水冷直列4気筒DOHC16バルブ',
      cylinderNum: data.cylinderNum, //4,
      cylinderLayout: data.cylinderLayout, //'直列',
      valveSystem: data.valveSystem, //'DOHC',
      displacement: data.displacement, //1997,
      bore: data.bore, //83.5,
      stroke: data.stroke, //91.2,
      compressionRatio: data.compressionRatio, //13.0,
      maxOutputKw: data.maxOutputKw, //115,
      maxOutputLowerRpm: data.maxOutputLowerRpm, //6000,
      maxOutputHigherRpm: data.maxOutputHigherRpm, //4000,
      maxTorqueNm: data.maxTorqueNm, //213,
      maxTorqueLowerRpm: data.maxTorqueLowerRpm, //4000,
      maxTorqueHigherRpm: data.maxTorqueHigherRpm, //4000,
      fuelSystem: data.fuelSystem, //'筒内直接噴射(DI)',
      fuelType: data.fuelType, //'REGULAR',
      fuelTankCap: data.fuelTankCap //56
    },
    performance: {
      minTurningRadius: data.minTurningRadius, //5.5,
      fcrWltc: data.fcrWltc, //14.6,
      fcrWltcL: data.fcrWltcL, //11.2,
      fcrWltcM: data.fcrWltcM, //15.3,
      fcrWltcH: data.fcrWltcH, //16.2,
      fcrWltcExh: data.fcrWltcExh, //13.6,
      fcrJc08: data.fcrJc08, //15.6,
      mpcWltc: data.mpcWltc, //14.6,
      ecrWltc: data.ecrWltc,
      ecrWltcL: data.ecrWltcL,
      ecrWltcM: data.ecrWltcM,
      ecrWltcH: data.ecrWltcH,
      ecrWltcExh: data.ecrWltcExh,
      ecrJc08: data.ecrJc08,
      mpcJc08: data.mpcJc08,
      fuelEfficiency: data.fuelEfficiency //[
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
  return { car };
}) satisfies PageServerLoad;
