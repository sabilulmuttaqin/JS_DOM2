function pilihanComp() {
  const comp = Math.random();
  if (comp < 0.34) return "elephant";
  if (comp >= 0.34 && comp < 0.67) return "ant";
  return "people";
}
function rules(comp, user) {
  if (user == comp) return "seri";
  if (user == "elephant") return comp == "people" ? "menang" : "kalah";
  if (user == "people") return comp == "ant" ? "menang" : "kalah";
  if (user == "ant") return comp == "elephant" ? "menang" : "kalah";
}

function random() {
  const gambarComp = document.querySelector(".img-komputer");
  let i = 0;
  const gambar = ["elephant", "people", "ant"];
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    gambarComp.setAttribute("src", `pic/${gambar[i++]}.jpg`);
    if (i == gambar.length) i = 0;
  }, 100);
}
let playerScore = 0;
let compScore = 0;
const pilihan = document.querySelectorAll("li img");

pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pComp = pilihanComp();
    const pPlayer = pil.className;
    const hasil = rules(pComp, pPlayer);
    const skorOrang = document.querySelector(".scorePlayer");
    const skorKomp = document.querySelector(".scoreKomp");
    const imgComp = document.querySelector(".img-komputer");

    if (hasil === "menang") {
      playerScore++;
    } else if (hasil == "kalah") {
      compScore++;
    }
    random();
    setTimeout(function () {
      imgComp.setAttribute("src", `pic/${pComp}.jpg`);
      const tampilTulisan = document.querySelector(".info");
      tampilTulisan.innerHTML = hasil;
      skorOrang.innerHTML = `Skor Player: ${playerScore}`;
      skorKomp.innerHTML = `Skor Komputer: ${compScore}`;
    }, 1000);
  });
});

