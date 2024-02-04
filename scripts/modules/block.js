export class Block {
  constructor(col, row, gameCanvas) {
    this.col = col;
    this.row = row;
    this.gameCanvas = gameCanvas;
  }

  drawSquare(color) {
    let x = this.col * this.gameCanvas.blockSize;
    let y = this.row * this.gameCanvas.blockSize;
    this.gameCanvas.context.fillStyle = color;
    this.gameCanvas.context.fillRect(
      x,
      y,
      this.gameCanvas.blockSize,
      this.gameCanvas.blockSize
    );
  }

  drawCircle(color) {
    let centerX =
      this.col * this.gameCanvas.blockSize + this.gameCanvas.blockSize / 2;
    let centerY =
      this.row * this.gameCanvas.blockSize + this.gameCanvas.blockSize / 2;
    this.gameCanvas.context.fillStyle = color;
    this.gameCanvas.circle(
      centerX,
      centerY,
      this.gameCanvas.blockSize / 2,
      true
    );
  }

  equal(otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
  }
}
