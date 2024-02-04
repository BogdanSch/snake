export class GameCanvas {
  constructor(id) {
    this.canvas = document.getElementById(id);

    this.context = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.blockSize = 10;
    this.widthInBlocks = this.width / this.blockSize;
    this.heightInBlocks = this.height / this.blockSize;
  }

  drawBorder() {
    this.context.fillStyle = "Gray";
    this.context.fillRect(0, 0, this.width, this.blockSize);
    this.context.fillRect(
      0,
      this.height - this.blockSize,
      this.width,
      this.blockSize
    );
    this.context.fillRect(0, 0, this.blockSize, this.height);
    this.context.fillRect(
      this.width - this.blockSize,
      0,
      this.blockSize,
      this.height
    );
  }

  circle(x, y, radius, fillCircle) {
    this.context.beginPath();
    this.context.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
      this.context.fill();
    } else {
      this.context.stroke();
    }
  }
}
