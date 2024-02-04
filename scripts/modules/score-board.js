export class ScoreBoard {
  constructor(gameCanvas) {
    this.gameCanvas = gameCanvas;
    this.score = 0;
  }

  draw() {
    this.gameCanvas.context.font = "20px Courier";
    this.gameCanvas.context.fillStyle = "Black";
    this.gameCanvas.context.textAlign = "left";
    this.gameCanvas.context.textBaseline = "top";
    this.gameCanvas.context.fillText(
      "Score: " + this.score,
      this.gameCanvas.blockSize,
      this.gameCanvas.blockSize
    );
  }
}
