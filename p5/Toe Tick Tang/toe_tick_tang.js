/*
  Toe-Tick-Tang
  Ralph McCracken, III
  23 Jan 2017
*/

var gamestatus = true;
var blocksize = 500 / 3;
var turn = 1;
var plays = 0;
var check = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var mark = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var cell;
var tie = false;
var p1win = false;
var p2win = false;
var win = false;
var p1wins = 0;
var p2wins = 0;

function setup() {
  createCanvas(500, 500);
  drawGrid();
}

function drawGrid() {
  background(0);
  rectMode(CORNER);
  for (var i = 0; i < 9; ++i) {
    if (i < 3) {
      rect(i * blocksize, 0, blocksize, blocksize);
    } else if (i >= 3 && i < 6) {
      rect((i - 3) * blocksize, blocksize, blocksize, blocksize);
    } else if (i >= 6) {
      rect((i - 6) * blocksize, 2 * blocksize, blocksize, blocksize);
    }
  }
}

function mousePressed() {
  if (gamestatus === true) {
    play();
  }
}

function play() {
  textAlign(CENTER);
  textSize(120);
  if (mouseX >= 0 && mouseX < blocksize && mouseY >= 0 && mouseY < blocksize) {
    cell = 0;
    while (check[cell] === 0) {
      if (turn == 1) {
        text("X", round(blocksize / 2), round(blocksize - 45));
        endTurn(cell);
      } else {
        text("O", round(blocksize / 2), round(blocksize - 45));
        endTurn(cell);
      }
    }
  } else if (mouseX >= blocksize && mouseX < 2 * blocksize && mouseY >= 0 && mouseY < blocksize) {
    cell = 1;
    while (check[cell] === 0) {
      if (turn == 1) {
        text("X", round((2 * blocksize) - (blocksize / 2)), round(blocksize - 45));
        endTurn(cell);
      } else {
        text("O", round((2 * blocksize) - (blocksize / 2)), round(blocksize - 45));
        endTurn(cell);
      }
    }
  } else if (mouseX >= 2 * blocksize && mouseX < 3 * blocksize && mouseY >= 0 && mouseY < blocksize) {
    cell = 2;
    while (check[cell] === 0) {
      if (turn == 1) {
        text("X", round((3 * blocksize) - (blocksize / 2)), round(blocksize - 45));
        endTurn(cell);
      } else {
        text("O", round((3 * blocksize) - (blocksize / 2)), round(blocksize - 45));
        endTurn(cell);
      }
    }
  } else if (mouseX >= 0 && mouseX < blocksize && mouseY >= blocksize && mouseY < 2 * blocksize) {
    cell = 3;
    while (check[cell] === 0) {
      if (turn == 1) {
        text("X", round(blocksize / 2), round(2 * blocksize - 45));
        endTurn(cell);
      } else {
        text("O", round(blocksize / 2), round(2 * blocksize - 45));
        endTurn(cell);
      }
    }
  } else if (mouseX >= blocksize && mouseX < 2 * blocksize && mouseY >= blocksize && mouseY < 2 * blocksize) {
    cell = 4;
    while (check[cell] === 0) {
      if (turn == 1) {
        text("X", round((2 * blocksize) - (blocksize / 2)), round(2 * blocksize - 45));
        endTurn(cell);
      } else {
        text("O", round((2 * blocksize) - (blocksize / 2)), round(2 * blocksize - 45));
        endTurn(cell);
      }
    }
  } else if (mouseX >= 2 * blocksize && mouseX < 3 * blocksize && mouseY >= blocksize && mouseY < 2 * blocksize) {
    cell = 5;
    while (check[cell] === 0) {
      if (turn == 1) {
        text("X", round((3 * blocksize) - (blocksize / 2)), round(2 * blocksize - 45));
        endTurn(cell);
      } else {
        text("O", round((3 * blocksize) - (blocksize / 2)), round(2 * blocksize - 45));
        endTurn(cell);
      }
    }
  } else if (mouseX >= 0 && mouseX < blocksize && mouseY >= 2 * blocksize && mouseY < 3 * blocksize) {
    cell = 6;
    while (check[cell] === 0) {
      if (turn == 1) {
        text("X", round(blocksize / 2), round(3 * blocksize - 45));
        endTurn(cell);
      } else {
        text("O", round(blocksize / 2), round(3 * blocksize - 45));
        endTurn(cell);
      }
    }
  } else if (mouseX >= blocksize && mouseX < 2 * blocksize && mouseY >= 2 * blocksize && mouseY < 3 * blocksize) {
    cell = 7;
    while (check[cell] === 0) {
      if (turn == 1) {
        text("X", round((2 * blocksize) - (blocksize / 2)), round(3 * blocksize - 45));
        endTurn(cell);
      } else {
        text("O", round((2 * blocksize) - (blocksize / 2)), round(3 * blocksize - 45));
        endTurn(cell);
      }
    }
  } else if (mouseX >= 2 * blocksize && mouseX < 3 * blocksize && mouseY >= 2 * blocksize && mouseY < 3 * blocksize) {
    cell = 8;
    while (check[cell] === 0) {
      if (turn == 1) {
        text("X", round((3 * blocksize) - (blocksize / 2)), round(3 * blocksize - 45));
        endTurn(cell);
      } else {
        text("O", round((3 * blocksize) - (blocksize / 2)), round(3 * blocksize - 45));
        endTurn(cell);
      }
    }
  }
}

function endTurn(cell) {
  check[cell]++;

  if (turn == 1) {
    mark[cell] = 1;
  } else {
    mark[cell] = 2;
  }

  turn *= -1;
  plays++;
  checkWin();
}

function checkWin() {
  checking();

  if (p1win === true || p2win === true) {
    win = true;
  }

  if (win === false && plays === 9) {
    tie = true;
  }

  if (win === true || tie === true) {
    end(p1win, p2win, tie);
  }
}

function checking() {
  if (mark[0] == 1 && mark[1] == 1 && mark[2] == 1) {
    p1win = true;
  } else if (mark[3] == 1 && mark[4] == 1 && mark[5] == 1) {
    p1win = true;
  } else if (mark[6] == 1 && mark[7] == 1 && mark[8] == 1) {
    p1win = true;
  } else if (mark[0] == 1 && mark[3] == 1 && mark[6] == 1) {
    p1win = true;
  } else if (mark[1] == 1 && mark[4] == 1 && mark[7] == 1) {
    p1win = true;
  } else if (mark[2] == 1 && mark[5] == 1 && mark[8] == 1) {
    p1win = true;
  } else if (mark[0] == 1 && mark[4] == 1 && mark[8] == 1) {
    p1win = true;
  } else if (mark[2] == 1 && mark[4] == 1 && mark[6] == 1) {
    p1win = true;
  }

  if (mark[0] == 2 && mark[1] == 2 && mark[2] == 2) {
    p2win = true;
  } else if (mark[3] == 2 && mark[4] == 2 && mark[5] == 2) {
    p2win = true;
  } else if (mark[6] == 2 && mark[7] == 2 && mark[8] == 2) {
    p2win = true;
  } else if (mark[0] == 2 && mark[3] == 2 && mark[6] == 2) {
    p2win = true;
  } else if (mark[1] == 2 && mark[4] == 2 && mark[7] == 2) {
    p2win = true;
  } else if (mark[2] == 2 && mark[5] == 2 && mark[8] == 2) {
    p2win = true;
  } else if (mark[0] == 2 && mark[4] == 2 && mark[8] == 2) {
    p2win = true;
  } else if (mark[2] == 2 && mark[4] == 2 && mark[6] == 2) {
    p2win = true;
  }
}

function end(p1win, p2win, tie) {
  gamestatus = false;
  rectMode(CENTER);
  textSize(12);
  rect(windowWidth / 2, windowHeight / 2, 300, 100);

  if (tie === true) {
    text("Tie Game!\n[ Hit Any Key To Restart ]", windowWidth / 2, windowHeight / 2 - 8);
  } else if (p1win === true) {
    p1wins++;
    text("Player 1 Won! (X)\n[ Hit Any Key To Restart ]", windowWidth / 2, windowHeight / 2 - 8);
  } else if (p2win === true) {
    p2wins++;
    text("Player 2 Won! (O)\n[ Hit Any Key To Restart ]", windowWidth / 2, windowHeight / 2 - 8);
  }
  
  text("Score: " + p1wins + " - " + p2wins, windowWidth / 2 - 115, windowHeight / 2 - 35);
  text("Toe-Tick-Tang                                Ralph McCracken, III", windowWidth / 2, windowHeight / 2 + 45);
}

function keyPressed() {
  if (gamestatus === false) {
    restartGame();
  }
}

function restartGame() {
  drawGrid();
  gamestatus = true;
  tie = false;
  p1win = false;
  p2win = false;
  win = false;
  turn = 1;
  check = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  mark = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  plays = 0;
}
