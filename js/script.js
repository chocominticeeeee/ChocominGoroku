// animejs使い方
// https://tr.you84815.space/animejs/
// https://easings.net/ja

// zText
// https://bennettfeely.com/ztext/

// Rellax使い方
// https://moshashugyo.com/media/rellax

//効果音データ
const trackDataArry = [
  { title: "アル中からから～", path: "./sound/ある中からから～.mp3" },
  { title: "いーでぃー", path: "./sound/いーでぃー.mp3" },
  { title: "ええてぇ", path: "./sound/ええてぇ.mp3" },
  { title: "きいちゃいねぇわ", path: "./sound/きいちゃいねぇわ.mp3" },
  {
    title: "きぶんしだいですぼくは",
    path: "./sound/きぶんしだいですぼくは.mp3",
  },
  { title: "さよ～なら～", path: "./sound/さよ～なら～.mp3" },
  { title: "すやすや", path: "./sound/すやすや.mp3" },
  { title: "せやなー", path: "./sound/せやなー.mp3" },
  { title: "だめだよ", path: "./sound/だめだよ.mp3" },
  { title: "ちー...パコーン！", path: "./sound/ちー...パコーン！.mp3" },
  {
    title: "バレテーラロマネコンティー",
    path: "./sound/ばれてーらろまねこんてぃ.mp3",
  },
  { title: "ブッ（脱屁）", path: "./sound/ブッ（脱屁）.mp3" },
  { title: "ホーリーシット", path: "./sound/ホーリーシット.mp3" },
  { title: "まだ？", path: "./sound/まだ？.mp3" },
  {
    title: "義務があるん？どこに？",
    path: "./sound/義務があるん？どこに？.mp3",
  },
  { title: "今日は日曜日～", path: "./sound/今日は～日曜日～.mp3" },
  { title: "俺が君を守る", path: "./sound/俺が君を守る.mp3" },
  { title: "きもちぃ", path: "./sound/きもちぃ.mp3" },
  { title: "キムチィ", path: "./sound/キムチぃ.mp3" },
  { title: "金持ちぃ", path: "./sound/金持ちぃ.mp3" },
  { title: "文句しか言わんやん", path: "./sound/文句しかいわんやん.mp3" },
  { title: "ｳｨｰｰｰｰ", path: "./sound/ｳｨｰｰｰｰ.mp3" },
  { title: "ｱﾆｬｰﾁｮﾑﾆﾀﾞｰｲｵｰ", path: "./sound/ｱﾆｬｰﾁｮﾑﾆﾀﾞｰｲｵｰ.mp3" },
  { title: "雑魚がよ", path: "./sound/雑魚がよ.mp3" },
  { title: "君センスないねぇ", path: "./sound/君センスないねぇ.mp3" },
  { title: "君センスあるねぇえ", path: "./sound/君センスあるねぇえ.mp3" },
  { title: "そうだよ", path: "./sound/そうだよ.mp3" },
];

//トラックの雛形のDOMを取得
const trackElem = document.querySelector(".track");

//音源を定義
const seArry = [];
for (let i = 0; i < trackDataArry.length; i++) {
  const se = new Audio(trackDataArry[i].path);
  se.volume = 0.5;
  seArry[i] = se;
}

//Forで回す
for (let i = 1; i < trackDataArry.length + 1; i++) {
  //雛形からDOMをコピー
  const copyedTrackElem = trackElem.cloneNode(true);
  copyedTrackElem.id = "track" + i;

  //トラックの番号とタイトルのDOMを取得
  const trackNumElem = copyedTrackElem.children[0];
  const trackTitleElem = copyedTrackElem.children[1];

  //番号とタイトルをinnerHTMLで挿入
  trackNumElem.innerHTML = i;
  const trackTitle = trackDataArry[i - 1].title;
  trackTitleElem.innerHTML = trackTitle;

  //親要素を取得してappendChild
  const parentTrackElem = document.querySelector("#tracks");
  parentTrackElem.appendChild(copyedTrackElem);

  //プレイボタン
  const playBtnElem = document.querySelector(
    "#track" + i + " .buttons .playBtn"
  );
  playBtnElem.addEventListener(
    "click",
    function () {
      seArry[i - 1].pause();
      seArry[i - 1].currentTime = 0;
      seArry[i - 1].play();
    },
    false
  );

  //stopボタン
  const stopBtnElem = document.querySelector(
    "#track" + i + " .buttons .stopBtn"
  );
  stopBtnElem.addEventListener(
    "click",
    function () {
      seArry[i - 1].pause();
      seArry[i - 1].currentTime = 0;
    },
    false
  );

  //スライダー
  const volumeSlider = document.querySelector("#track" + i + " #volume");
  volumeSlider.addEventListener(
    "change",
    function () {
      seArry[i - 1].volume = volumeSlider.value;
    },
    false
  );
}

//雛形削除
const removeTgt = document.querySelector("#template");
removeTgt.remove();

//各種リンク
function linkTwitter() {
  const url = "https://twitter.com/CS_EyKum";
  window.open(url, "_blank");
}

function linkGit() {
  const url = "https://github.com/chocominticeeeee?tab=repositories";
  window.open(url, "_blank");
}

function linkCSGO() {
  const url = "https://chocominticeeeee.github.io/csgocommands/";
  window.open(url, "_blank");
}

function linkgakushu() {
  const url = "https://chocominticeeeee.github.io/cmi.code/index.html";
  window.open(url, "_blank");
}

const uploaderElem = document.querySelector(".uploaderMenuBg");
const hamburgerMenuElem = document.querySelector(".hamburgerMenu");
const hamburgerMenuListElem = document.querySelector(".hamburgerMenuList");
//hamburger
function openHamburger() {
  if (hamburgerMenuElem.style.display == "flex") {
    //閉じる
    hamburgerMenuElem.style.display = "none";
    hamburgerMenuListElem.style.transform = "translateX(-200px)";
  } else {
    //開く
    hamburgerMenuElem.style.display = "flex";
    hamburgerMenuListElem.style.transform = "none";
    uploaderElem.style.display = "none";
  }
}

//アップローダー
function openUploader() {
  //hamburger閉じる
  hamburgerMenuElem.style.display = "none";
  hamburgerMenuListElem.style.transform = "translateX(-200px)";
  //アップローダーを開く
  uploaderElem.style.display = "block";
}
