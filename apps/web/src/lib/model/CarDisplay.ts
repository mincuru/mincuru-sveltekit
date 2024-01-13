import { BodyType, FuelType, PowerTrain } from '@prisma/client';
import type { CarDetail } from './CarDetail';

export class CarDisplay {
  data: CarDetail;

  public constructor(data: CarDetail) {
    this.data = data;
  }

  // メソッド
  // パワートレインのラベルを返す
  get powerTrainLabel(): string {
    switch (this.data.powerTrain) {
      case PowerTrain.ICE:
        return 'エンジン';
      case PowerTrain.StrHV:
        return 'ストロングHV';
      case PowerTrain.MldHV:
        return 'マイルドHV';
      case PowerTrain.SerHV:
        return 'シリーズHV';
      case PowerTrain.PHEV:
        return 'プラグインHV';
      case PowerTrain.BEV:
        return 'バッテリーEV';
      case PowerTrain.RexEV:
        return 'レンジエクステンダーEV';
      case PowerTrain.FCEV:
        return '燃料電池車';
      default:
        return 'N/A';
    }
  }

  // 価格ラベルを返す
  get priceLabel(): string {
    return this.data.price?.toLocaleString() ?? 'N/A';
  }

  // ボディタイプのラベルを返す
  get bodyTypeLabel(): string {
    switch (this.data.body.type) {
      case BodyType.SEDAN:
        return 'セダン';
      case BodyType.HATCHBACK:
        return 'ハッチバック';
      case BodyType.CROSS_COUNTRY:
        return 'クロスカントリー';
      case BodyType.K:
        return 'K';
      case BodyType.COUPE:
        return 'クーペ';
      case BodyType.STATION_WAGON:
        return 'ステーションワゴン';
      case BodyType.SUV:
        return 'SUV';
      case BodyType.ONEBOX:
        return 'ワンボックス';
      case BodyType.K_OPEN:
        return 'Kオープン';
      case BodyType.K_ONEBOX:
        return 'Kワンボックス';
      case BodyType.OPEN:
        return 'オープン';
      case BodyType.PICKUP_TRUCK:
        return 'ピックアップトラック';
      default:
        return 'N/A';
    }
  }

  get bodyLengthLabel(): string {
    return this.data.body.length?.toString() ?? 'N/A';
  }

  get bodyWidthLabel(): string {
    return this.data.body.width?.toString() ?? 'N/A';
  }

  get bodyHeightLabel(): string {
    return this.data.body.height?.toString() ?? 'N/A';
  }

  get wheelBaseLabel(): string {
    return this.data.body.wheelBase?.toString() ?? 'N/A';
  }

  get treadFrontLabel(): string {
    return this.data.body.tread?.front?.toString() ?? 'N/A';
  }

  get treadRearLabel(): string {
    return this.data.body.tread?.rear?.toString() ?? 'N/A';
  }

  get roadClearanceLabel(): string {
    return this.data.body.roadClearance?.toString() ?? 'N/A';
  }

  get weightLabel(): string {
    return this.data.body.weight?.toString() ?? 'N/A';
  }

  get interiorLengthLabel(): string {
    return this.data.interior?.length?.toString() ?? 'N/A';
  }

  get interiorWidthLabel(): string {
    return this.data.interior?.width?.toString() ?? 'N/A';
  }

  get interiorHeightLabel(): string {
    return this.data.interior?.height?.toString() ?? 'N/A';
  }

  get ridingCapLabel(): string {
    return this.data.interior?.ridingCap?.toString() ?? 'N/A';
  }

  get steeringLabel(): string {
    return this.data.steering ?? 'N/A';
  }

  get suspensionFrontLabel(): string {
    return this.data.suspension?.front?.toString() ?? 'N/A';
  }

  get suspensionRearLabel(): string {
    return this.data.suspension?.rear?.toString() ?? 'N/A';
  }

  get breakFrontLabel(): string {
    return this.data.break?.front?.toString() ?? 'N/A';
  }

  get breakRearLabel(): string {
    return this.data.break?.rear?.toString() ?? 'N/A';
  }

  get engineCodeLabel(): string {
    return this.data.engine?.code ?? 'N/A';
  }

  get engineTypeLabel(): string {
    return this.data.engine?.type ?? 'N/A';
  }

  get engineCylinderNumLabel(): string {
    return this.data.engine?.cylinderNum?.toString() ?? 'N/A';
  }

  get engineCylinderLayoutLabel(): string {
    return this.data.engine?.cylinderLayout ?? 'N/A';
  }

  get engineValveSystemLabel(): string {
    return this.data.engine?.valveSystem ?? 'N/A';
  }

  get engineDisplacementLabel(): string {
    return this.data.engine?.displacement?.toString() ?? 'N/A';
  }

  get engineBoreLabel(): string {
    return this.data.engine?.bore?.toString() ?? 'N/A';
  }

  get engineStrokeLabel(): string {
    return this.data.engine?.stroke?.toString() ?? 'N/A';
  }

  get engineCompressionRatioLabel(): string {
    return this.data.engine?.compressionRatio?.toString() ?? 'N/A';
  }

  get engineMaxOutputKwLabel(): string {
    return this.data.engine?.maxOutputKw?.toString() ?? 'N/A';
  }

  get engineMaxOutputLowerRpmLabel(): string {
    return this.data.engine?.maxOutputLowerRpm?.toString() ?? 'N/A';
  }

  get engineMaxOutputHigherRpmLabel(): string {
    return this.data.engine?.maxOutputHigherRpm?.toString() ?? 'N/A';
  }

  get engineMaxTorqueNmLabel(): string {
    return this.data.engine?.maxTorqueNm?.toString() ?? 'N/A';
  }

  get engineMaxTorqueLowerRpmLabel(): string {
    return this.data.engine?.maxTorqueLowerRpm?.toString() ?? 'N/A';
  }

  get engineMaxTorqueHigherRpmLabel(): string {
    return this.data.engine?.maxTorqueHigherRpm?.toString() ?? 'N/A';
  }

  get fuelSystemLabel(): string {
    return this.data.engine?.fuelSystem ?? 'N/A';
  }

  // 燃料種別のラベルを返す
  get fuelTypeLabel(): string {
    switch (this.data.engine?.fuelType) {
      case FuelType.DIESEL:
        return '軽油';
      case FuelType.REGULAR:
        return '無鉛レギュラーガソリン';
      case FuelType.PREMIUM:
        return '無鉛プレミアムガソリン';
      case FuelType.LPG:
        return 'LPG';
      case FuelType.BIO:
        return 'バイオ燃料';
      case FuelType.HYDROGEN:
        return '水素';
      default:
        return 'N/A';
    }
  }

  get fuelTankCapLabel(): string {
    return this.data.engine?.fuelTankCap?.toString() ?? 'N/A';
  }

  get minTurningRadiusLabel(): string {
    return this.data.performance?.minTurningRadius?.toString() ?? 'N/A';
  }
  get fcrWltcLabel(): string {
    return this.data.performance?.fcrWltc?.toString() ?? 'N/A';
  }

  get fcrWltcLLabel(): string {
    return this.data.performance?.fcrWltcL?.toString() ?? 'N/A';
  }

  get fcrWltcMLabel(): string {
    return this.data.performance?.fcrWltcM?.toString() ?? 'N/A';
  }

  get fcrWltcHLabel(): string {
    return this.data.performance?.fcrWltcH?.toString() ?? 'N/A';
  }

  get fcrWltcExhLabel(): string {
    return this.data.performance?.fcrWltcExh?.toString() ?? 'N/A';
  }

  get fcrJc08Label(): string {
    return this.data.performance?.fcrJc08?.toString() ?? 'N/A';
  }

  get mpcWltcLabel(): string {
    return this.data.performance?.mpcWltc?.toString() ?? 'N/A';
  }

  get ecrWltcLabel(): string {
    return this.data.performance?.ecrWltc?.toString() ?? 'N/A';
  }

  get ecrWltcLLabel(): string {
    return this.data.performance?.ecrWltcL?.toString() ?? 'N/A';
  }

  get ecrWltcMLabel(): string {
    return this.data.performance?.ecrWltcM?.toString() ?? 'N/A';
  }

  get ecrWltcHLabel(): string {
    return this.data.performance?.ecrWltcH?.toString() ?? 'N/A';
  }

  get ecrWltcExhLabel(): string {
    return this.data.performance?.ecrWltcExh?.toString() ?? 'N/A';
  }

  get ecrJc08Label(): string {
    return this.data.performance?.ecrJc08?.toString() ?? 'N/A';
  }

  get mpcJc08Label(): string {
    return this.data.performance?.mpcJc08?.toString() ?? 'N/A';
  }
}
