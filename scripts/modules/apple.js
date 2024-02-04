import { Block } from "./block.js";

export class Apple {
  constructor(gameCanvas, color = "LimeGreen") {
    this.gameCanvas = gameCanvas;
    this.position = new Block(20, 20, this.gameCanvas);
    this.color = color;
  }

  draw() {
    this.position.drawCircle(this.color);
  }

  move(newColor) {
    let randomCol =
      Math.floor(Math.random() * (this.gameCanvas.widthInBlocks - 2)) + 1;
    let randomRow =
      Math.floor(Math.random() * (this.gameCanvas.heightInBlocks - 2)) + 1;
    this.color = newColor;
    this.position = new Block(randomCol, randomRow, this.gameCanvas);
  }
}
