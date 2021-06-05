import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';

export default {
  zoneId: ZoneId.Amaurot,
  timelineFile: 'amaurot.txt',
  triggers: [
    {
      id: 'Amaurot Meteor',
      netRegex: NetRegexes.headMarker({ id: '0039' }),
      condition: Conditions.targetIsYou(),
      preRun: (data) => data.meteor = (data.meteor || 0) + 1,
      infoText: (data, _matches, output) => {
        if (data.meteor === 1)
          return output.dropMeteorWest();
        else if (data.meteor === 2)
          return output.dropMeteorEast();

        return output.meteor();
      },
      outputStrings: {
        dropMeteorWest: {
          en: 'Drop Meteor West',
          de: 'Meteor im Westen ablegen',
          fr: 'Déposez le météore à l\'ouest',
          ja: 'メテオを西に',
          cn: '西侧放陨石',
          ko: '메테오 서쪽으로 빼기',
        },
        dropMeteorEast: {
          en: 'Drop Meteor East',
          de: 'Meteor im Osten ablegen',
          fr: 'Déposez le météore à l\'est',
          ja: 'メテオを東に',
          cn: '陨石放东边',
          ko: '메테오 동쪽으로 빼기',
        },
        meteor: {
          en: 'Meteor',
          de: 'Meteor',
          fr: 'Météore',
          ja: 'メテオ',
          cn: '陨石',
          ko: '메테오',
        },
      },
    },
    {
      id: 'Amaurot Spread',
      netRegex: NetRegexes.headMarker({ id: '008B' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Amaurot Final Sky',
      netRegex: NetRegexes.startsUsing({ id: '3CCB', source: 'The First Beast', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3CCB', source: '(?:der|die|das) Erst(?:e|er|es|en) Unheil', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3CCB', source: 'Annélide De L\'Apocalypse', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3CCB', source: 'ファースト・ビースト', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3CCB', source: '第一之兽', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3CCB', source: '최초의 야수', capture: false }),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Hide Behind Boulder',
          de: 'Hinter einem Felsen verstecken',
          fr: 'Cachez-vous derrière un rocher',
          ja: '隕石の後ろに',
          cn: '躲在岩石后',
          ko: '바위 뒤에 숨기',
        },
      },
    },
    {
      id: 'Amaurot Shadow Wreck',
      netRegex: NetRegexes.startsUsing({ id: '3CE3', source: 'Therion', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3CE3', source: 'Therion', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3CE3', source: 'Mégatherion', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3CE3', source: 'メガセリオン', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3CE3', source: '至大灾兽', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3CE3', source: '메가테리온', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      id: 'Amaurot Apokalypsis',
      netRegex: NetRegexes.startsUsing({ id: '3CD7', source: 'Therion', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3CD7', source: 'Therion', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3CD7', source: 'Mégatherion', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3CD7', source: 'メガセリオン', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3CD7', source: '至大灾兽', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3CD7', source: '메가테리온', capture: false }),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Get Off',
          de: 'Runter gehen',
          fr: 'Descendez',
          ja: '横へ',
          cn: '站左右小平台',
          ko: '바깥으로 피하기',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'The First Beast': '(?:der|die|das) erst(?:e|er|es|en) Unheil',
        'The Face of the Beast': 'Antlitz des Boten',
        'Fallen Star': 'Komet',
        'Therion': 'Therion',
        'Terminus Roiler': 'Terminus-Trüber',
        'Terminus Pursuer': 'Terminus-Verfolger',
        'Terminus Bellwether': 'Läuter der Totenglocke',
        'The First Doom': 'Ersten Unheil',
        'The Second Doom': 'Zweiten Unheil',
        'The Third Doom': 'Dritten Unheil',
      },
      'replaceText': {
        'Adds': 'Adds',
        'The Final Sky': 'Letzter Himmel',
        'The Falling Sky': 'Unheilvoller Himmel',
        'The Burning Sky': 'Brennender Himmel',
        'Venomous Breath': 'Giftatem',
        'Therion Charge': 'Therions Rage',
        'Shrill Shriek': 'Schriller Schrei',
        'Shadow Wreck': 'Schatten des Unheils',
        'Misfortune': 'Unglück',
        'Meteor Rain': 'Meteorschauer',
        'Earthquake': 'Erdbeben',
        'Deathly Ray': 'Tödlicher Strahl',
        'Cosmic Shrapnel': 'Kosmos-Splitter',
        'Cosmic Kiss': 'Einschlag',
        'Burst': 'Explosion',
        'Apokalypsis': 'Apokalypse',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'The First Beast': 'Annélide de l\'apocalypse',
        'The Face of the Beast': 'Visages de la Bête',
        'Fallen Star': 'Étoile',
        'Therion': 'Mégatherion',
        'Terminus Roiler': 'Nébulosité de l\'apocalypse',
        'Terminus Pursuer': 'Poursuivant de l\'apocalypse',
        'Terminus Bellwether': 'Sonneur de glas de l\'apocalypse',
        'The First Doom': 'La première Calamité',
        'The Second Doom': 'La deuxième Calamité',
        'The Third Doom': 'La troisième Calamité',
      },
      'replaceText': {
        'The Final Sky': 'Étoile de la ruine',
        'The Falling Sky': 'Étoile de la calamité',
        'The Burning Sky': 'Étoile du désastre',
        'Venomous Breath': 'Souffle venimeux',
        'Therion Charge': 'Charge de therion',
        'Shrill Shriek': 'Cri perçant',
        'Shadow Wreck': 'Calamité sombre',
        'Misfortune': 'Infortune',
        'Meteor Rain': 'Pluie d\'étoiles',
        'Earthquake': 'Tremblement de terre',
        'Deathly Ray': 'Rayon létal',
        'Cosmic Shrapnel': 'Éclatement',
        'Cosmic Kiss': 'Impact',
        'Burst': 'Explosion',
        'Apokalypsis': 'Apokalypsis',
        'Adds': 'Adds',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'The First Beast': 'ファースト・ビースト',
        'The Face of the Beast': 'フェイス・オブ・ビースト',
        'Fallen Star': '流星',
        'Therion': 'メガセリオン',
        'Terminus Roiler': 'ターミナス・ロイラー',
        'Terminus Pursuer': 'ターミナス・パースアー',
        'Terminus Bellwether': 'ターミナス・ベルウェザー',
        'The First Doom': '第一の災い',
        'The Second Doom': '第二の災い',
        'The Third Doom': '第三の災い',
      },
      'replaceText': {
        'Adds': '雑魚',
        'The Final Sky': '終末の流星',
        'The Falling Sky': '厄災の流星',
        'The Burning Sky': '変災の流星',
        'Venomous Breath': 'ベノムブレス',
        'Therion Charge': 'セリオンチャージ',
        'Shrill Shriek': '絶叫',
        'Shadow Wreck': 'シャドウレック',
        'Misfortune': 'ミスフォーチュン',
        'Meteor Rain': '流星群',
        'Earthquake': '地震',
        'Deathly Ray': 'デスリ―レイ',
        'Cosmic Shrapnel': '飛散',
        'Cosmic Kiss': '着弾',
        'Burst': '爆発',
        'Apokalypsis': 'アポカリュプシス',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'The First Beast': '第一之兽',
        'The Face of the Beast': '灾兽之面',
        'Fallen Star': '流星',
        'Therion': '至大灾兽',
        'Terminus Roiler': '终末的动荡',
        'Terminus Pursuer': '终末的追捕',
        'Terminus Bellwether': '终末的指引',
        'The First Doom': '第一之灾难',
        'The Second Doom': '第二之灾难',
        'The Third Doom': '第三之灾难',
      },
      'replaceText': {
        'Adds': '小怪',
        'The Final Sky': '末日流星',
        'The Falling Sky': '灾厄流星',
        'The Burning Sky': '灾变流星',
        'Venomous Breath': '毒气吐息',
        'Therion Charge': '灾兽冲锋',
        'Shrill Shriek': '绝叫',
        'Shadow Wreck': '暗影毁灭',
        'Misfortune': '厄难',
        'Meteor Rain': '流星群',
        'Earthquake': '地震',
        'Deathly Ray': '灭亡射线',
        'Cosmic Shrapnel': '飞散',
        'Cosmic Kiss': '流星坠落',
        'Burst': '大爆炸',
        'Apokalypsis': '启示录',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'The First Beast': '최초의 야수',
        'The Face of the Beast': '야수의 얼굴',
        'Fallen Star': '별똥별',
        'Therion': '메가테리온',
        'Terminus Roiler': '종말의 교란자',
        'Terminus Pursuer': '종말의 추격자',
        'Terminus Bellwether': '종말의 선도자',
        'The First Doom': '첫 번째 재앙',
        'The Second Doom': '두 번째 재앙',
        'The Third Doom': '세 번째 재앙',
      },
      'replaceText': {
        'Adds': '쫄들',
        'The Final Sky': '종말의 유성',
        'The Falling Sky': '재앙의 유성',
        'The Burning Sky': '변재의 유성',
        'Venomous Breath': '독 숨결',
        'Therion Charge': '테리온 돌격',
        'Shrill Shriek': '절규',
        'Shadow Wreck': '그림자 파멸',
        'Misfortune': '불운',
        'Meteor Rain': '유성군',
        'Earthquake': '지진',
        'Deathly Ray': '죽음 광선',
        'Cosmic Shrapnel': '산산조각',
        'Cosmic Kiss': '착탄',
        'Burst': '대폭발',
        'Apokalypsis': '묵시록',
      },
    },
  ],
};