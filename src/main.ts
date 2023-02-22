import Game from "./Game/Game.js";

const game = new Game();

if (game) {
  if (game.view)
    document
      .querySelector(".game")!
      .append(game!.view!.renderer!.instance!.domElement);
}
