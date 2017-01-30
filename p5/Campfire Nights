/*
  Campfire Nights
  Ralph McCracken, III
  29 Jan 2017
*/

var stars = 250;

var x;
var y;
var x_star;
var y_star;
var size_star;
var starCount = 0;
var _red;
var _orange;
var col = 0;
var col_0;
var move;

function setup() {
  x = round(windowWidth / 2);
  y = round(windowHeight);

  createCanvas(400, 400);
  background(0);

  Stars();
  Credits();
}

function Stars() {
  setInterval(GenerateStars, 250);
}

function GenerateStars() {
  if (starCount < stars) {
    x_star = random(0, windowWidth);
    y_star = random(0, windowHeight);
    size_star = random(3);

    ++starCount;

    fill(255);
    noStroke();
    ellipse(x_star, y_star, size_star, size_star);
  }
}

function draw() {
  move = floor(random(4));
  Fire(move);
  Control();
}

function Fire(move) {
  _red = stroke(col, 0, 0);
  point(x, y);
  point(x - 1, y);
  point(x - 2, y);
  _orange = stroke(2 * col, col, 0);
  point(x, y);

  Transition();
  Move(move);
}

function Transition() {
  if (col === 0) {
    col_0 = 1;
  } else if (col === 255) {
    col_0 = 0;
  }

  switch (col_0) {
    case 0:
      --col;
      break;
    case 1:
      ++col;
      break;
  }
}

function Move(move) {
  switch (move) {
    case 0:
      ++x;
      break;
    case 1:
      --x;
      break;
    case 2:
      ++y;
      break;
    case 3:
      --y;
      break;
  }
}

function Control() {
  if (keyIsPressed) {
    if (keyCode === UP_ARROW) {
      --y;
    } else if (keyCode === DOWN_ARROW) {
      ++y;
    } else if (keyCode === LEFT_ARROW) {
      --x;
    } else if (keyCode === RIGHT_ARROW) {
      ++x;
    }
  }
}

function Credits() {
  textAlign(CENTER);

  fill(255);
  text(12);
  textFont("Courier New");
  text("Ralph McCracken, III", x + 70, y / 2 + 10);


  fill(255);
  textSize(20);
  textFont("Zapfino");
  text("Campfire Nights", x - 20, y / 2);
}
