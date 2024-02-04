import { ScoreBoard } from "./score-board.js";
import { GameOverScreen } from "./game-over-screen.js";
import { Apple } from "./apple.js";
import { Snake } from "./snake.js";

export class SnakeGame {
  constructor(canvas) {
    this.canvas = canvas;
    this.scoreBoard = new ScoreBoard(this.canvas);
    this.gameOverScreen = new GameOverScreen(this.canvas);

    this.directions = {
      37: "left",
      38: "up",
      39: "right",
      40: "down",
    };
    this.colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
    this.isGameOver = false;

    this.snake = new Snake(this, this.canvas, this.getRandomColor());
    this.apple = new Apple(this.canvas, this.getRandomColor());
  }

  start() {
    this.canvas.drawBorder();
    this.scoreBoard.draw();

    document.addEventListener("keydown", (event) => {
      if (!this.isGameOver) {
        let newDirection = this.directions[event.keyCode];
        if (newDirection !== undefined) {
          this.snake.setDirection(newDirection);
        }
      }
    });

    this.intervalId = setInterval(() => {
      this.canvas.context.clearRect(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      this.scoreBoard.draw();
      this.snake.move();
      this.snake.draw();
      this.apple.draw();
      this.canvas.drawBorder();
    }, 100);
  }

  getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
  snakeGameover() {
    this.isGameOver = true;
    this.gameOverScreen.draw();
    this.showRestartButton();
  }
  showRestartButton() {}
}
