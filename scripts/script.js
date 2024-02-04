"use strict";

import { GameCanvas } from "./modules/game-canvas.js";
import { SnakeGame } from "./modules/game.js";

const gameCanvas = new GameCanvas("canvas");
const game = new SnakeGame(gameCanvas);
game.start();
