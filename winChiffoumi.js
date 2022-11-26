/**
 * @param {string} player1
 * @param {string} player2
 * @param {object} scores
 * @return {object}
 */
export function winChiffoumi(player1, player2, scores) {
  if (player1 === player2) {
    console.log("égalité");
    return scores;
  } else if (
    (player1 === 0 && player2 === 2) ||
    (player1 === 1 && player2 === 0) ||
    (player1 === 2 && player2 === 1)
  ) {
    scores.player++;
    console.log("vous gagnez");
    return scores;
  } else {
    scores.computer++;
    console.log("l'ordinateur gagne");
    return scores;
  }
}
