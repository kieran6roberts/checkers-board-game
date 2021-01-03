import removeValidDrops from "./removeValidDrops";
import movePieceWithClickHandler from "./movePieceWithClickHandler";
import setValidMoves from "./setValidMoves";
import { selectedPiece, BOARD_STATE } from "./control";

function setCurrentPieceHandler(event: Event | string): void {
  let activePieceID: string | undefined;
  let target: Element | undefined;

  if (typeof event === "string") {
    event !== selectedPiece.id && removeValidDrops(movePieceWithClickHandler);
    activePieceID = event;
  } else {
    target = (<HTMLElement>event.target);
    target.id !== selectedPiece.id && removeValidDrops(movePieceWithClickHandler);
    target.getAttribute("data-color") ? activePieceID = target.id : activePieceID = target.parentElement?.id;
  }

  if (activePieceID) {
    const activePieceBoardPosition = BOARD_STATE.indexOf(activePieceID);
    selectedPiece.id = activePieceID;
    selectedPiece.index = activePieceBoardPosition;
    document.querySelector(`#${selectedPiece.id}`)?.classList.contains("king") ? selectedPiece.isPieceKing = true : selectedPiece.isPieceKing = false;
  }

  setValidMoves();
}

export default setCurrentPieceHandler;