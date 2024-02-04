export class GameOverScreen {
  constructor(gameCanvas) {
    this.gameCanvas = gameCanvas;
    this.width = this.gameCanvas.width;
    this.height = this.gameCanvas.height;
  }

  draw() {
    this.gameCanvas.context.font = "60px Courier";
    this.gameCanvas.context.fillStyle = "Black";
    this.gameCanvas.context.textAlign = "center";
    this.gameCanvas.context.textBaseline = "middle";
    this.gameCanvas.context.fillText(
      "Game Over",
      this.width / 2,
      this.height / 2
    );
  }
}
