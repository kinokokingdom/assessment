   'use strict';
var qa = [
  ['ファミコンの発売は1985年である。', 2],
  ['７月15日はファミコンの日である。', 1],
  ['ファミコンソフトの最終発売は2016年である。', 1],
  ['ファミコンの色は原価が安いのであの配色になった。', 2],
  ['ファミコンの商標は任天堂以外も持っている。', 1],
  ['ファミコンの累積販売台数は１億台を超えている。', 2],
  ['クリボーは栗王国の王子である。', 2],
  ['高橋名人は実はゲームが苦手だった。', 1],
  ['ファミコンで株取引ができるシステムがあった。', 1],
  ['現在もトルコではファミコンを製造している。', 2]
];

var count = 0;
var correctNum = 0;

window.onload = function() {
  // 最初の問題を表示
  var question = document.getElementById('question');
  question.innerHTML = (count + 1) + '問目：' + qa[count][0];
};

// クリック時の答え判定
function hantei(btnNo) {
  if (qa[count][1] == btnNo) {
    correctNum++;
  }

  if (count == 9) {
    alert('あなたの正解数は' + correctNum + '問です！');
  }

  // 次の問題表示
  count++;
  var question = document.getElementById('question');
  question.innerHTML = (count + 1) + '問目：' + qa[count][0];
}
