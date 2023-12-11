import type { CarDetail } from './CarDetail';

export class CarDisplay {
  data: CarDetail;

  // コンストラクタ
  constructor(data: CarDetail) {
    this.data = data;
  }

  // メソッド
  // ボディタイプのラベルを返す
  get bodyTypeLabel(): string {
    switch (this.data.body.type) {
      case 'SEDAN':
        return 'セダン';
      case 'HATCHBACK':
        return 'ハッチバック';
      case 'CROSS_COUNTRY':
        return 'クロスカントリー';
      case 'K':
        return 'K';
      case 'COUPE':
        return 'クーペ';
      case 'STATION_WAGON':
        return 'ステーションワゴン';
      case 'SUV':
        return 'SUV';
      case 'ONEBOX':
        return 'ワンボックス';
      case 'K_OPEN':
        return 'Kオープン';
      case 'K_ONEBOX':
        return 'Kワンボックス';
      case 'OPEN':
        return 'オープン';
      case 'PICKUP_TRUCK':
        return 'ピックアップトラック';
      default:
        return '';
    }
  }

  // パワートレインのラベルを返す
  get powerTrainLabel(): string {
    switch (this.data.powerTrain) {
      case 'ICE':
        return 'エンジン';
      case 'StrHV':
        return 'ストロングHV';
      case 'MldHV':
        return 'マイルドHV';
      case 'SerHV':
        return 'シリーズHV';
      case 'PHEV':
        return 'プラグインHV';
      case 'BEV':
        return 'バッテリーEV';
      case 'RexEV':
        return 'レンジエクステンダーEV';
      case 'FCEV':
        return '燃料電池車';
      default:
        return '';
    }
  }

  // 燃料種別のラベルを返す
  get fuelTypeLabel(): string {
    switch (this.data.engine?.fuelType) {
      case 'DIESEL':
        return '軽油';
      case 'REGULAR':
        return '無鉛レギュラーガソリン';
      case 'PREMIUM':
        return '無鉛プレミアムガソリン';
      case 'LPG':
        return 'LPG';
      case 'BIO':
        return 'バイオ燃料';
      case 'HYDROGEN':
        return '水素';
      default:
        return '';
    }
  }
}
