import { question } from "./question.js";
import { winChiffoumi } from "./winChiffoumi.js";

// jeu du chiffoumi
console.log("Bienvenue dans le jeu du chiffoumi");
let score = { player: 0, computer: 0 };
const choix = ["pierre", "feuille", "ciseaux"];
let player, computer;
// boucle de jeu
while (score.player < 3 && score.computer < 3) {
  player = await question("pierre(1), feuille(2) ou ciseaux(3) ? : ", true);
  // verification de la saisie numérique
  if (player < 1 || player > 3 || isNaN(player)) {
    console.log("saisie incorrecte");
    continue;
  }
  // random computer in [0,2]
  computer = Math.floor(Math.random() * choix.length);
  console.log(
    `👨 vous avez choisi ${choix[player - 1]} et 🤖 l'ordinateur a choisi ${
      choix[computer]
    }`
  );
  score = winChiffoumi(player - 1, computer, score);
  console.log(`score : ${score.player} - ${score.computer}`);
}
console.log("--------------------");
console.log(`le gagnant est ${score.player === 3 ? "vous" : "l'ordinateur"}`);
console.log("--------------------");

// fin de partie

