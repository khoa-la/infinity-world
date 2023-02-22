import State from "../State/State";
import Chunk from "./Chunk.js";

export default class Chunks {
  constructor() {
    this.state = State.getInstance();

    this.state.chunks.events.on("create", (chunkState) => {
      const chunk = new Chunk(chunkState);

      chunkState.events.on("destroy", () => {
        chunk.destroy();
      });
    });
  }

  update() {}
}
