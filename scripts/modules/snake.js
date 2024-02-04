import { Block } from "./block.js";

export class Snake {
  constructor(game, gameCanvas, color = "Blue") {
    this.game = game;
    this.gameCanvas = gameCanvas;
    this.segments = [
      new Block(7, 5, gameCanvas),
      new Block(6, 5, gameCanvas),
      new Block(5, 5, gameCanvas),
    ];
    this.direction = "right";
    this.nextDirection = "right";
    this.color = color;
  }

  draw() {
    for (let i = 0; i < this.segments.length; i++) {
      this.segments[i].drawSquare(this.color);
    }
  }

  move() {
    let head = this.segments[0];
    let newHead;
    this.direction = this.nextDirection;
    if (this.direction === "right") {
      newHead = new Block(head.col + 1, head.row, this.gameCanvas);
    } else if (this.direction === "down") {
      newHead = new Block(head.col, head.row + 1, this.gameCanvas);
    } else if (this.direction === "left") {
      newHead = new Block(head.col - 1, head.row, this.gameCanvas);
    } else if (this.direction === "up") {
      newHead = new Block(head.col, head.row - 1, this.gameCanvas);
    }

    if (this.checkCollision(newHead)) {
      this.game.snakeGameover();
      return;
    }
    this.segments.unshift(newHead);

    if (newHead.equal(this.game.apple.position)) {
      this.game.scoreBoard.score++;
      this.color = this.game.apple.color;
      this.game.apple.move(this.game.getRandomColor());
    } else {
      this.segments.pop();
    }
  }

  setDirection(newDirection) {
    if (this.direction === "up" && newDirection === "down") {
      return;
    } else if (this.direction === "right" && newDirection === "left") {
      return;
    } else if (this.direction === "down" && newDirection === "up") {
      return;
    } else if (this.direction === "left" && newDirection === "right") {
      return;
    }
    this.nextDirection = newDirection;
  }

  checkCollision(head) {
    let leftCollision = head.col === 0;
    let topCollision = head.row === 0;
    let rightCollision = head.col === this.gameCanvas.widthInBlocks - 1;
    let bottomCollision = head.row === this.gameCanvas.heightInBlocks - 1;
    let wallCollision =
      leftCollision || topCollision || rightCollision || bottomCollision;
    let selfCollision = false;
    for (let i = 0; i < this.segments.length; i++) {
      if (head.equal(this.segments[i])) {
        selfCollision = true;
      }
    }
    return wallCollision || selfCollision;
  }
}
