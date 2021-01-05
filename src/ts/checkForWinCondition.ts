import { gameControl } from "./control";

const newGameBtn = document.querySelector(".win-modal__reset");
const winModal = document.querySelector(".win-modal");
const winModalWinner = document.querySelector(".win-modal__winner");

const checkForWinCondition = (pieces: number): void => {
  if (pieces === 0) {
    winModal?.classList.add("show-modal");
    winModalWinner ? winModalWinner.textContent = `${gameControl.currentPlayer} Player Wins!` : null;
    newGameBtn ? newGameBtn.addEventListener("click", () => document.location.reload()) : document.location.reload();
  }
};

export default checkForWinCondition;