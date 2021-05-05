import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';

// ALEXANDER - THE BURDEN OF THE SON NORMAL
// A8N

export default {
  zoneId: ZoneId.AlexanderTheBurdenOfTheSon,
  timelineFile: 'a8n.txt',
  timelineTriggers: [
    {
      id: 'A8N Hydrothermal Missile',
      regex: /Hydrothermal Missile/,
      beforeSeconds: 3,
      response: Responses.tankCleave('info'),
    },
    {
      id: 'A8N Flarethrower',
      regex: /Flarethrower/,
      beforeSeconds: 3,
      response: Responses.tankCleave('info'),
    },
    {
      id: 'A8N Super Jump Soon',
      regex: /Super Jump/,
      beforeSeconds: 8,
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Bait Super Jump',
          de: 'Supersprung ködern',
          fr: 'Attirez le Super saut',
          ja: 'スーパージャンプを誘導',
          cn: '引导超级跳',
          ko: '슈퍼 점프',
        },
      },
    },
  ],
  triggers: [
    {
      id: 'A8N Megabeam Onslaughter',
      netRegex: NetRegexes.startsUsing({ source: 'Onslaughter', id: '1732', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Schlachter', id: '1732', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Attaqueur', id: '1732', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'オンスローター', id: '1732', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '突击者', id: '1732', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '맹습자', id: '1732', capture: false }),
      // Insert sound effect from Arthars here.
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Megabeamu~',
          de: 'Megalaser~',
          fr: 'Mégarayon~',
          ja: 'メガビーム～',
          cn: '巨型光束炮~',
          ko: '고출력 광선~',
        },
      },
    },
    {
      id: 'A8N Megabeam Brute Justice',
      netRegex: NetRegexes.startsUsing({ source: 'Brute Justice', id: '174F', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Brutalus', id: '174F', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Justicier', id: '174F', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'ブルートジャスティス', id: '174F', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '残暴正义号', id: '174F', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '포악한 심판자', id: '174F', capture: false }),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Megabeamu~!',
          de: 'Megalaser~!',
          fr: 'Mégarayon~ !',
          ja: 'メガビーム～',
          cn: '巨型光束炮~!',
          ko: '고출력 광선~!',
        },
      },
    },
    {
      id: 'A8N Execution',
      netRegex: NetRegexes.ability({ source: 'Onslaughter', id: '1632', capture: false }),
      netRegexDe: NetRegexes.ability({ source: 'Schlachter', id: '1632', capture: false }),
      netRegexFr: NetRegexes.ability({ source: 'Attaqueur', id: '1632', capture: false }),
      netRegexJa: NetRegexes.ability({ source: 'オンスローター', id: '1632', capture: false }),
      netRegexCn: NetRegexes.ability({ source: '突击者', id: '1632', capture: false }),
      netRegexKo: NetRegexes.ability({ source: '맹습자', id: '1632', capture: false }),
      condition: function(data) {
        return data.role === 'dps' || data.job === 'BLU';
      },
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Kill Regulators',
          de: 'Dampfregler besiegen',
          fr: 'Tuez les Régulateurs',
          ja: 'スチームジャッジを倒す',
          cn: '击杀小怪',
          ko: '증기 감독 없애기',
        },
      },
    },
    {
      id: 'A8N Perpetual Ray',
      netRegex: NetRegexes.startsUsing({ source: 'Onslaughter', id: '1730' }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Schlachter', id: '1730' }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Attaqueur', id: '1730' }),
      netRegexJa: NetRegexes.startsUsing({ source: 'オンスローター', id: '1730' }),
      netRegexCn: NetRegexes.startsUsing({ source: '突击者', id: '1730' }),
      netRegexKo: NetRegexes.startsUsing({ source: '맹습자', id: '1730' }),
      condition: Conditions.caresAboutMagical(),
      response: Responses.tankBuster(),
    },
    {
      id: 'A8N Low Arithmeticks',
      // Note: both high and low use '0025' headmarker
      netRegex: NetRegexes.gainsEffect({ effectId: '3FD' }),
      condition: Conditions.targetIsYou(),
      durationSeconds: 10,
      suppressSeconds: 10,
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Get High',
          de: 'Geh nach Oben',
          fr: 'Montez',
          ja: '高い床に乗る',
          cn: '上高台',
          ko: '높은곳으로',
        },
      },
    },
    {
      id: 'A8N High Arithmeticks',
      netRegex: NetRegexes.gainsEffect({ effectId: '3FE' }),
      condition: Conditions.targetIsYou(),
      durationSeconds: 10,
      suppressSeconds: 10,
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Get Down',
          de: 'Geh nach Unten',
          fr: 'Descendez',
          ja: '低い床に乗る',
          cn: '下低台',
          ko: '낮은곳으로',
        },
      },
    },
    {
      id: 'A8N Super Cyclone',
      netRegex: NetRegexes.startsUsing({ source: 'Vortexer', id: '1747', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Wirbler', id: '1747', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Tourbillonneur', id: '1747', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'ボルテッカー', id: '1747', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '环旋者', id: '1747', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '교반자', id: '1747', capture: false }),
      response: Responses.knockback(),
    },
    {
      id: 'A8N Enumeration',
      netRegex: NetRegexes.headMarker({ id: ['0040', '0041', '0042'] }),
      infoText: function(data, matches, output) {
        // 0040 = 2, 0041 = 3, 0042 = 4
        const count = 2 + parseInt(matches.id, 16) - parseInt('0040', 16);
        return output.text({ player: data.ShortName(matches.target), count: count });
      },
      outputStrings: {
        text: {
          en: '${player}: ${count}',
          de: '${player}: ${count}',
          fr: '${player}: ${count}',
          ja: '${player}: ${count}',
          cn: '${player}生命计算法: ${count}',
          ko: '${player}: ${count}',
        },
      },
    },
    {
      id: 'A8N Double Rocket Punch',
      netRegex: NetRegexes.startsUsing({ source: 'Brute Justice', id: '174E' }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Brutalus', id: '174E' }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Justicier', id: '174E' }),
      netRegexJa: NetRegexes.startsUsing({ source: 'ブルートジャスティス', id: '174E' }),
      netRegexCn: NetRegexes.startsUsing({ source: '残暴正义号', id: '174E' }),
      netRegexKo: NetRegexes.startsUsing({ source: '포악한 심판자', id: '174E' }),
      condition: Conditions.caresAboutPhysical(),
      response: Responses.tankBuster(),
    },
    {
      // Flarethrower comes up at the same time as Long Needle at multiple points.
      // This is *very* dangerous if the healers aren't ready, so we collect the active tank
      // in order to warn them not to stack.
      id: 'A8N Brute Active Tank',
      netRegex: NetRegexes.ability({ source: 'Brute Justice', id: '174C' }),
      netRegexDe: NetRegexes.ability({ source: 'Brutalus', id: '174C' }),
      netRegexFr: NetRegexes.ability({ source: 'Justicier', id: '174C' }),
      netRegexJa: NetRegexes.ability({ source: 'ブルートジャスティス', id: '174C' }),
      netRegexCn: NetRegexes.ability({ source: '残暴正义号', id: '174C' }),
      netRegexKo: NetRegexes.ability({ source: '포악한 심판자', id: '174C' }),
      run: function(data, matches) {
        data.bruteTank = matches.target;
      },
    },
    {
      // The only dangerous Flarethrower is the first one in any rotation.
      // This one is always after J-Kick but before Super Jump,
      // so we can just look for those two abilities and activate triggers on that basis.
      // (The first dangerous Flarethrower is before Super Jump,
      // so all Long Needle triggers will check against false values,
      // since data.bruteTankOut will not be initialized at that point.)
      // 1750 is Super Jump, 1756 is J-Kick.
      id: 'A8N Long Needle Toggle',
      netRegex: NetRegexes.ability({ source: 'Brute Justice', id: ['1750', '1756'] }),
      netRegexDe: NetRegexes.ability({ source: 'Brutalus', id: ['1750', '1756'] }),
      netRegexFr: NetRegexes.ability({ source: 'Justicier', id: ['1750', '1756'] }),
      netRegexJa: NetRegexes.ability({ source: 'ブルートジャスティス', id: ['1750', '1756'] }),
      netRegexCn: NetRegexes.ability({ source: '残暴正义号', id: ['1750', '1756'] }),
      netRegexKo: NetRegexes.ability({ source: '포악한 심판자', id: ['1750', '1756'] }),
      suppressSeconds: 5,
      run: function(data, matches) {
        data.bruteTankOut = matches.id === '1756';
      },
    },
    {
      id: 'A8N Long Needle Party',
      netRegex: NetRegexes.headMarker({ id: '003E' }),
      condition: (data) => !(data.me === data.bruteTank && data.bruteTankOut),
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'A8N Long Needle Active Tank',
      netRegex: NetRegexes.headMarker({ id: '003E', capture: false }),
      condition: (data) => data.me === data.bruteTank && data.bruteTankOut,
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Don\'t Stack! (tank cleave)',
          de: 'Nicht Sammeln! (Tank Cleave)',
          fr: 'Ne vous packez pas ! (tank cleave)',
          ja: '集まらない! (タンクへのスラッシュ)',
          cn: '别去集合！（坦克顺劈）',
          ko: '산개하기! (광역 탱버)',
        },
      },
    },
    {
      id: 'A8N Short Needle',
      netRegex: NetRegexes.ability({ source: 'Brute Justice', id: '1753', capture: false }),
      netRegexDe: NetRegexes.ability({ source: 'Brutalus', id: '1753', capture: false }),
      netRegexFr: NetRegexes.ability({ source: 'Justicier', id: '1753', capture: false }),
      netRegexJa: NetRegexes.ability({ source: 'ブルートジャスティス', id: '1753', capture: false }),
      netRegexCn: NetRegexes.ability({ source: '残暴正义号', id: '1753', capture: false }),
      netRegexKo: NetRegexes.ability({ source: '포악한 심판자', id: '1753', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      id: 'A8N Apocalyptic Ray',
      netRegex: NetRegexes.startsUsing({ source: 'Brute Justice', id: '1751', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Brutalus', id: '1751', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Justicier', id: '1751', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'ブルートジャスティス', id: '1751', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '残暴正义号', id: '1751', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '포악한 심판자', id: '1751', capture: false }),
      response: Responses.awayFromFront(),
    },
    {
      id: 'A8N Super Jump',
      netRegex: NetRegexes.startsUsing({ source: 'Brute Justice', id: '1750' }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Brutalus', id: '1750' }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Justicier', id: '1750' }),
      netRegexJa: NetRegexes.startsUsing({ source: 'ブルートジャスティス', id: '1750' }),
      netRegexCn: NetRegexes.startsUsing({ source: '残暴正义号', id: '1750' }),
      netRegexKo: NetRegexes.startsUsing({ source: '포악한 심판자', id: '1750' }),
      alertText: function(data, matches, output) {
        if (data.me !== matches.target)
          return;
        return output.superJumpOnYou();
      },
      infoText: function(data, matches, output) {
        if (data.me === matches.target)
          return;
        return output.superJumpOn({ player: data.ShortName(matches.target) });
      },
      outputStrings: {
        superJumpOn: {
          en: 'Super Jump on ${player}',
          de: 'Supersprung auf ${player}',
          fr: 'Super saut sur ${player}',
          ja: '${player}にスーパージャンプ',
          cn: '超级跳点${player}',
          ko: '"${player}" 슈퍼 점프',
        },
        superJumpOnYou: {
          en: 'Super Jump on YOU',
          de: 'Supersprung auf DIR',
          fr: 'Super saut sur VOUS',
          ja: '自分にスーパージャンプ',
          cn: '超级跳点名',
          ko: '슈퍼 점프 대상자',
        },
      },
    },
    {
      id: 'A8N Mirage Marker',
      netRegex: NetRegexes.headMarker({ id: '0008' }),
      condition: Conditions.targetIsYou(),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Mirage on YOU',
          de: 'Mirage auf DIR',
          fr: 'Mirage sur VOUS',
          ja: '自分にミラージュ',
          cn: '分身点名',
          ko: '환영 징 대상자',
        },
      },
    },
    {
      id: 'A8N Ice Missile Marker',
      netRegex: NetRegexes.headMarker({ id: '0043' }),
      condition: Conditions.targetIsYou(),
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Ice Missile on YOU',
          de: 'Eis-Rakete auf DIR',
          fr: 'Missile de glace sur VOUS',
          ja: '自分にアイスミサイル',
          cn: '冰点名',
          ko: '얼음 미사일 대상자',
        },
      },
    },
    {
      id: 'A8N Mirage Supercharge',
      netRegex: NetRegexes.startsUsing({ source: 'Blaster Mirage', id: '1749', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Blaster-Replikant', id: '1749', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Réplique Du Fracasseur', id: '1749', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'ブラスター・ミラージュ', id: '1749', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '爆破者幻象', id: '1749', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '폭파자의 환영', id: '1749', capture: false }),
      suppressSeconds: 5,
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Avoid Mirage Dashes',
          de: 'Weiche den Replikant Ansturm aus',
          fr: 'Évitez la charge de la Réplique',
          ja: 'ミラージュの正面から離れる',
          cn: '躲避分身冲锋',
          ko: '환영 돌진 피하기',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Blaster Mirage': 'Blaster-Replikant',
        'Blaster(?! Mirage)': 'Blaster',
        'Brawler': 'Blechbrecher',
        'Brute Justice': 'Brutalus',
        'Hidden Mine': 'Minenfalle',
        'Onslaughter': 'Schlachter',
        'Steam Regulator B': 'β-Dampfregler',
        'Swindler': 'Schwindler',
        'Vortexer': 'Wirbler',
      },
      'replaceText': {
        '--orbs--': '--kugeln--',
        '--regulator check--': '--dampfregler check--',
        '100-Megatonze Shock': '100-Megatonzen-Schock',
        'Apocalyptic Ray': 'Apokalyptischer Strahl ',
        'Attachment': 'Anlegen',
        'Ballistic Missile': 'Ballistische Rakete',
        'Brute Force': 'Brutaler Schlag',
        'Discoid': 'Diskoid',
        'Double Buster': 'Doppelsprenger',
        'Double Rocket Punch': 'Doppelraketenschlag',
        'Earth Missile': 'Erd-Geschoss',
        'Enumeration': 'Zählen',
        'Execution': 'Exekutive',
        'Flarethrower': 'Großflammenwerfer',
        'Height': 'Nivellierung',
        'Hydrothermal Missile': 'Hydrothermales Geschoss',
        'Ice Missile': 'Eisgeschoss',
        'J Kick': 'Gewissenstritt',
        'Long Needle': 'Großes Kaliber',
        'Magicked Mark': 'Magiegeschoss',
        'Mega Beam': 'Megastrahl',
        'Minefield': 'Minenfeld',
        'Mind Blast': 'Geiststoß',
        'Mirage': 'Illusion',
        'Missile Command': 'Raketenkommando',
        'Perpetual Ray': 'Perpetueller Strahl',
        'Seed of the Sky': 'Samen des Himmels',
        'Short Needle': 'Kleines Kaliber',
        'Single Buster': 'Einzelsprenger',
        'Super Cyclone': 'Superzyklon',
        'Super Jump': 'Supersprung',
        'Supercharge': 'Superladung',
        'Transform': 'Geballte Rechtsgewalt',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Blaster Mirage': 'Réplique du Fracasseur',
        'Blaster(?! Mirage)': 'Fracasseur',
        'Brawler': 'Bagarreur',
        'Brute Justice': 'Justicier',
        'Hidden Mine': 'Explosion de mine',
        'Onslaughter': 'Attaqueur',
        'Steam Regulator B': 'Régulateur de vapeur β',
        'Swindler': 'Arnaqueur',
        'Vortexer': 'Tourbillonneur',
      },
      'replaceText': {
        '--orbs--': '--orbes--',
        '--regulator check--': '--vérification du régulateur--',
        '100-Megatonze Shock': 'Choc de 100 mégatonz',
        'Apocalyptic Ray': 'Rayon apocalyptique',
        'Attachment': 'Extension',
        'Ballistic Missile': 'Missiles balistiques',
        'Brute Force': 'Force brute',
        'Discoid': 'Discoïde',
        'Double Buster': 'Double pulsoréacteur',
        'Double Rocket Punch': 'Double coup de roquette',
        'Earth Missile': 'Missile de terre',
        'Enumeration': 'Compte',
        'Execution': 'Exécution',
        'Flarethrower': 'Lance-brasiers',
        'Height': 'Dénivellation',
        'Hydrothermal Missile': 'Missile hydrothermique',
        'Ice Missile': 'Missile de glace',
        'J Kick': 'Pied justicier',
        'Long Needle': 'Gros missiles',
        'Magicked Mark': 'Tir magique',
        'Mega Beam': 'Mégarayon',
        'Minefield': 'Champ de mines',
        'Mind Blast': 'Explosion mentale',
        'Mirage': 'Mirage',
        'Missile Command': 'Commande missile',
        'Perpetual Ray': 'Rayon perpétuel',
        'Seed Of The Sky': 'Graine du ciel',
        'Short Needle': 'Petits missiles',
        'Single Buster': 'Pulsoréacteur',
        'Super Cyclone': 'Super cyclone',
        'Super Jump': 'Super saut',
        'Supercharge': 'Super charge',
        'Transform': 'Assemblage Justicier',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Blaster Mirage': 'ブラスター・ミラージュ',
        'Blaster(?! Mirage)': 'ブラスター',
        'Brawler': 'ブロウラー',
        'Brute Justice': 'ブルートジャスティス',
        'Hidden Mine': '地雷爆発',
        'Onslaughter': 'オンスローター',
        'Steam Regulator B': 'スチームジャッジβ',
        'Swindler': 'スウィンドラー',
        'Vortexer': 'ボルテッカー',
      },
      'replaceText': {
        '--orbs--': '--オーブ--',
        '--regulator check--': '--レギュレーターチェック--',
        '100-Megatonze Shock': '100メガトンズショック',
        'Apocalyptic Ray': 'アポカリプティクレイ',
        'Attachment': 'アタッチメント',
        'Ballistic Missile': 'ミサイル発射',
        'Brute Force': 'ブルートパンチ',
        'Discoid': 'ディスコイド',
        'Double Buster': 'ダブルバスターアタック',
        'Double Rocket Punch': 'ダブルロケットパンチ',
        'Earth Missile': 'アースミサイル',
        'Enumeration': 'カウント',
        'Execution': '執行準備',
        'Flarethrower': '大火炎放射',
        'Height': 'ハイト',
        'Hydrothermal Missile': '蒸気ミサイル',
        'Ice Missile': 'アイスミサイル',
        'J Kick': 'ジャスティスキック',
        'Long Needle': '大型ミサイル',
        'Magicked Mark': 'マジックショット',
        'Mega Beam': 'メガビーム',
        'Minefield': '地雷散布',
        'Mind Blast': 'マインドブラスト',
        'Mirage': 'ミラージュシステム',
        'Missile Command': 'ミサイル全弾発射',
        'Perpetual Ray': 'パーペチュアルレイ',
        'Seed of the Sky': 'シード・オブ・スカイ',
        'Short Needle': '小型ミサイル',
        'Single Buster': 'バスターアタック',
        'Super Cyclone': 'スーパーサイクロン',
        'Super Jump': 'スーパージャンプ',
        'Supercharge': 'スーパーチャージ',
        'Transform': 'ジャスティス合体',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Blaster Mirage': '爆破者幻象',
        'Blaster(?! Mirage)': '爆破者',
        'Brawler': '争斗者',
        'Brute Justice': '残暴正义号',
        'Hidden Mine': '地雷爆炸',
        'Onslaughter': '突击者',
        'Steam Regulator B': '蒸汽调整者β',
        'Swindler': '欺诈者',
        'Vortexer': '环旋者',
      },
      'replaceText': {
        '--orbs--': '--球--',
        '--regulator check--': '--调节器检查--',
        '100-Megatonze Shock': '亿万吨震荡',
        'Apocalyptic Ray': '末世宣言',
        'Attachment': '配件更换',
        'Ballistic Missile': '导弹发射',
        'Brute Force': '残暴铁拳',
        'Discoid': '圆盘',
        'Double Buster': '双重破坏炮击',
        'Double Rocket Punch': '双重火箭飞拳',
        'Earth Missile': '大地导弹',
        'Enumeration': '计数',
        'Execution': '执行准备',
        'Flarethrower': '大火炎放射',
        'Height': '高度算术',
        'Hydrothermal Missile': '蒸汽导弹',
        'Ice Missile': '寒冰导弹',
        'J Kick': '正义飞踢',
        'Long Needle': '大型导弹',
        'Magicked Mark': '魔力射击',
        'Mega Beam': '巨型光束炮',
        'Minefield': '地雷散布',
        'Mind Blast': '精神冲击',
        'Mirage': '幻影系统',
        'Missile Command': '导弹齐发',
        'Perpetual Ray': '永恒射线',
        'Seed of the Sky': '天空之种',
        'Short Needle': '小型导弹',
        'Single Buster': '破坏炮击',
        'Super Cyclone': '超级气旋',
        'Super Jump': '超级跳跃',
        'Supercharge': '超突击',
        'Transform': '正义合体',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Blaster Mirage': '폭파자의 환영',
        'Blaster(?! Mirage)': '폭파자',
        'Brawler': '폭격자',
        'Brute Justice': '포악한 심판자',
        'Hidden Mine': '지뢰 폭발',
        'Onslaughter': '맹습자',
        'Steam Regulator B': '증기 감독 β',
        'Swindler': '조작자',
        'Vortexer': '교반자',
      },
      'replaceText': {
        '--orbs--': '--구슬--',
        '--regulator check--': '--증기 감옥 확인--',
        '100-Megatonze Shock': '100메가톤즈 충격',
        'Apocalyptic Ray': '파멸 계시',
        'Attachment': '무기 장착',
        'Auxiliary Power': '에너지 지원',
        'Ballistic Missile': '미사일 발사',
        'Brute Force': '폭력적인 주먹',
        'Discoid': '원반',
        'Double Buster': '양손 버스터',
        'Double Rocket Punch': '양손 로켓 주먹',
        'Earth Missile': '대지 미사일',
        'Enumeration': '계산',
        'Execution': '집행 준비',
        'Flarethrower': '대화염방사',
        'Height': '고도',
        'Hydrothermal Missile': '증기 미사일',
        'Ice Missile': '얼음 미사일',
        'J Kick': '정의의 발차기',
        'Long Needle': '대형 미사일',
        'Magicked Mark': '마법 사격',
        'Mega Beam': '고출력 광선',
        'Minefield': '지뢰 살포',
        'Mind Blast': '정신파괴',
        'Mirage': '환영 시스템',
        'Missile Command': '미사일 전탄 발사',
        'Perpetual Ray': '영원한 빛줄기',
        'Seed of the Sky': '하늘의 원천',
        'Short Needle': '소형 미사일',
        'Single Buster': '한손 버스터',
        'Super Cyclone': '대형 돌개바람',
        'Super Jump': '슈퍼 점프',
        'Supercharge': '강력 돌진',
        'Transform': '정의의 합체',
      },
    },
  ],
};