// 乱数関数
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 原子番号、元素記号、元素名（日本語）を対応させた辞書
const periodicTable = {
    1: { symbol: "H", name: "水素" },
    2: { symbol: "He", name: "ヘリウム" },
    3: { symbol: "Li", name: "リチウム" },
    4: { symbol: "Be", name: "ベリリウム" },
    5: { symbol: "B", name: "ホウ素" },
    6: { symbol: "C", name: "炭素" },
    7: { symbol: "N", name: "窒素" },
    8: { symbol: "O", name: "酸素" },
    9: { symbol: "F", name: "フッ素" },
    10: { symbol: "Ne", name: "ネオン" },
    11: { symbol: "Na", name: "ナトリウム" },
    12: { symbol: "Mg", name: "マグネシウム" },
    13: { symbol: "Al", name: "アルミニウム" },
    14: { symbol: "Si", name: "ケイ素" },
    15: { symbol: "P", name: "リン" },
    16: { symbol: "S", name: "硫黄" },
    17: { symbol: "Cl", name: "塩素" },
    18: { symbol: "Ar", name: "アルゴン" },
    19: { symbol: "K", name: "カリウム" },
    20: { symbol: "Ca", name: "カルシウム" },
    21: { symbol: "Sc", name: "スカンジウム" },
    22: { symbol: "Ti", name: "チタン" },
    23: { symbol: "V", name: "バナジウム" },
    24: { symbol: "Cr", name: "クロム" },
    25: { symbol: "Mn", name: "マンガン" },
    26: { symbol: "Fe", name: "鉄" },
    27: { symbol: "Co", name: "コバルト" },
    28: { symbol: "Ni", name: "ニッケル" },
    29: { symbol: "Cu", name: "銅" },
    30: { symbol: "Zn", name: "亜鉛" },
    31: { symbol: "Ga", name: "ガリウム" },
    32: { symbol: "Ge", name: "ゲルマニウム" },
    33: { symbol: "As", name: "ヒ素" },
    34: { symbol: "Se", name: "セレン" },
    35: { symbol: "Br", name: "臭素" },
    36: { symbol: "Kr", name: "クリプトン" },
    37: { symbol: "Rb", name: "ルビジウム" },
    38: { symbol: "Sr", name: "ストロンチウム" },
    39: { symbol: "Y", name: "イットリウム" },
    40: { symbol: "Zr", name: "ジルコニウム" },
    41: { symbol: "Nb", name: "ニオブ" },
    42: { symbol: "Mo", name: "モリブデン" },
    43: { symbol: "Tc", name: "テクネチウム" },
    44: { symbol: "Ru", name: "ルテニウム" },
    45: { symbol: "Rh", name: "ロジウム" },
    46: { symbol: "Pd", name: "パラジウム" },
    47: { symbol: "Ag", name: "銀" },
    48: { symbol: "Cd", name: "カドミウム" },
    49: { symbol: "In", name: "インジウム" },
    50: { symbol: "Sn", name: "スズ" },
    51: { symbol: "Sb", name: "アンチモン" },
    52: { symbol: "Te", name: "テルル" },
    53: { symbol: "I", name: "ヨウ素" },
    54: { symbol: "Xe", name: "キセノン" },
    55: { symbol: "Cs", name: "セシウム" },
    56: { symbol: "Ba", name: "バリウム" },
    57: { symbol: "La", name: "ランタン" },
    58: { symbol: "Ce", name: "セリウム" },
    59: { symbol: "Pr", name: "プラセオジム" },
    60: { symbol: "Nd", name: "ネオジム" },
    61: { symbol: "Pm", name: "プロメチウム" },
    62: { symbol: "Sm", name: "サマリウム" },
    63: { symbol: "Eu", name: "ユウロピウム" },
    64: { symbol: "Gd", name: "ガドリニウム" },
    65: { symbol: "Tb", name: "テルビウム" },
    66: { symbol: "Dy", name: "ジスプロシウム" },
    67: { symbol: "Ho", name: "ホルミウム" },
    68: { symbol: "Er", name: "エルビウム" },
    69: { symbol: "Tm", name: "ツリウム" },
    70: { symbol: "Yb", name: "イッテルビウム" },
    71: { symbol: "Lu", name: "ルテチウム" },
    72: { symbol: "Hf", name: "ハフニウム" },
    73: { symbol: "Ta", name: "タンタル" },
    74: { symbol: "W", name: "タングステン" },
    75: { symbol: "Re", name: "レニウム" },
    76: { symbol: "Os", name: "オスミウム" },
    77: { symbol: "Ir", name: "イリジウム" },
    78: { symbol: "Pt", name: "白金" },
    79: { symbol: "Au", name: "金" },
    80: { symbol: "Hg", name: "水銀" },
    81: { symbol: "Tl", name: "タリウム" },
    82: { symbol: "Pb", name: "鉛" },
    83: { symbol: "Bi", name: "ビスマス" },
    84: { symbol: "Po", name: "ポロニウム" },
    85: { symbol: "At", name: "アスタチン" },
    86: { symbol: "Rn", name: "ラドン" },
    87: { symbol: "Fr", name: "フランシウム" },
    88: { symbol: "Ra", name: "ラジウム" },
    89: { symbol: "Ac", name: "アクチニウム" },
    90: { symbol: "Th", name: "トリウム" },
    91: { symbol: "Pa", name: "プロトアクチニウム" },
    92: { symbol: "U", name: "ウラン" },
    93: { symbol: "Np", name: "ネプツニウム" },
    94: { symbol: "Pu", name: "プルトニウム" },
    95: { symbol: "Am", name: "アメリシウム" },
    96: { symbol: "Cm", name: "キュリウム" },
    97: { symbol: "Bk", name: "バークリウム" },
    98: { symbol: "Cf", name: "カリホルニウム" },
    99: { symbol: "Es", name: "アインスタイニウム" },
    100: { symbol: "Fm", name: "フェルミウム" },
    101: { symbol: "Md", name: "メンデレビウム" },
    102: { symbol: "No", name: "ノーベリウム" },
    103: { symbol: "Lr", name: "ローレンシウム" },
    104: { symbol: "Rf", name: "ラザホージウム" },
    105: { symbol: "Db", name: "ドブニウム" },
    106: { symbol: "Sg", name: "シーボーギウム" },
    107: { symbol: "Bh", name: "ボーリウム" },
    108: { symbol: "Hs", name: "ハッシウム" },
    109: { symbol: "Mt", name: "マイトネリウム" },
    110: { symbol: "Ds", name: "ダームスタチウム" },
    111: { symbol: "Rg", name: "レントゲニウム" },
    112: { symbol: "Cn", name: "コペルニシウム" },
    113: { symbol: "Nh", name: "ニホニウム" },
    114: { symbol: "Fl", name: "フレロビウム" },
    115: { symbol: "Mc", name: "モスコビウム" },
    116: { symbol: "Lv", name: "リバモリウム" },
    117: { symbol: "Ts", name: "テネシン" },
    118: { symbol: "Og", name: "オガネソン" }
};

// 範囲
let range_e, range_s, page
range_e = 61
range_s = 80
page = 3


// 元素の名前を出題
function name_question() {
    return periodicTable[rand(range_s, range_e)].name + 'の元素記号を答えよ。';
}

// 元素記号を出題
function symbol_question() {
    return periodicTable[rand(range_s, range_e)].symbol + 'の元素名を答えよ。';
}

// 原子番号を出題
function number_question() {
    return `原子番号${rand(range_s, range_e)}番の元素名を答えよ。`    
}

// 元素記号から原子番号
function symbol_number_question() {
    return periodicTable[rand(range_s, range_e)].symbol + 'の原子番号を答えよ。'
}

// 改行関数
function line_break_func(num) {
    let result = '';
    for (let i=0; i<num; i++){
        result += '<br>'
    }
    return result
}

display = document.getElementById("display_html");

function display_print() {
    for (let i=0; i<30; i++) {
        if (i % 2 == 0) {
            left_or_right = 'left';
            line_break = ''
        } else {
            left_or_right = 'right';
            line_break = line_break_func(3)
        }
        if (0 <= i && i < 10) {
            display.innerHTML += `<div class="${left_or_right}">(${i+1}) ${name_question()}</div>`;
        }
        if (10 <= i && i < 20) {
            display.innerHTML += `<div class="${left_or_right}">(${i+1}) ${symbol_question()}</div>`;
        }
        if (20 <= i && i < 24) {
            display.innerHTML += `<div class="${left_or_right}">(${i+1}) ${number_question()}</div>`;
        }
        if (24 <= i && i < 30) {
            display.innerHTML += `<div class="${left_or_right}">(${i+1}) ${symbol_number_question()}</div>`;
        }
        if (i != 29){
            display.innerHTML += line_break
        }
    }
    display.innerHTML += '<br>'
}


for (let i=0; i<page; i++) {
    display_print()
}