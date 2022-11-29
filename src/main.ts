import { winChiffoumi } from "./func/winChiffoumi.js";
import "./style.css";

const play = document.querySelectorAll(".play");
const choix = document.querySelectorAll(".choix");
const pierre = document.querySelector(".pierre");
const feuille = document.querySelector(".feuille");
const ciseaux = document.querySelector(".ciseaux");
const choixGameur = document.querySelector(".choix-gameur");
const choixComputer = document.querySelector(".choix-computer");

const chiffoumiChoix = ["pierre", "feuille", "ciseaux"];
const chiffoumiEmojis = ["👊", "🖐️", "✌️"];
let score = { player: 0, computer: 0 };
let manche, computer, player;

play.forEach((elem) => {
  elem.addEventListener("click", () => {
    choix.forEach((ch) => {
      ch.style.display = "block";
    });
    play.forEach((pl) => {
      pl.style.display = "none";
    });
    computer = Math.floor(Math.random() * chiffoumiChoix.length);
    pierre.addEventListener("click", (e) => {
      player = parseInt(e.target.getAttribute("data-id"));
      computer = Math.floor(Math.random() * chiffoumiChoix.length);
      videChoixRemplaceParResultat(player, computer);
      score = winChiffoumi(player, computer, score);
      afficheScore(score);
    });
    feuille.addEventListener("click", (e) => {
      player = parseInt(e.target.getAttribute("data-id"));
      computer = Math.floor(Math.random() * chiffoumiChoix.length);
      videChoixRemplaceParResultat(player, computer);
      score = winChiffoumi(player, computer, score);
      afficheScore(score);
    });
    ciseaux.addEventListener("click", (e) => {
      player = parseInt(e.target.getAttribute("data-id"));
      computer = Math.floor(Math.random() * chiffoumiChoix.length);
      videChoixRemplaceParResultat(player, computer);
      score = winChiffoumi(player, computer, score);
      afficheScore(score);
    });
  });
});

// create element innerHTML
const videChoixRemplaceParResultat = (player: number, computer: number) => {
  choixGameur.innerHTML = "";
  choixComputer.innerHTML = "";
  const contentPlayeur = document.createElement("span");
  const contentComputer = document.createElement("span");
  contentPlayeur.innerHTML = chiffoumiEmojis[player];
  contentComputer.innerHTML = chiffoumiEmojis[computer];
  choixGameur.appendChild(contentPlayeur);
  choixComputer.appendChild(contentComputer);
};

const afficheScore = (score: { player: number; computer: number }) => {
  const scorePlayer = document.querySelector(".score-player");
  const scoreComputer = document.querySelector(".score-computer");
  scorePlayer.innerHTML = score.player;
  scoreComputer.innerHTML = score.computer;

  console.log(
    `👨 vous avez choisi ${chiffoumiChoix[player]} et 🤖 l'ordinateur a choisi ${chiffoumiChoix[computer]}`
  );
  console.log(`score : ${score.player} - ${score.computer}`);
};
