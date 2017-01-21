/*
    Bouncing ball
    Ralph McCracken, III
    21 Jan 2017
    
    Notable points:
      Dynamic Sizing
      Shape Generation
      Shape Movement
      Collision Detection
      Frame rate: ~60fps
*/

// Starting Variables
var startPosition = 13;
var startSpeed = 3;

// Ellipse Positioning Variables
var x = startPosition;
var y = startPosition;

// Ellipse Size Variables
var eWidth = 24;
var eHeight = 24;

// Ellipse Movement Variables
var xSpeed = startSpeed;
var ySpeed = startSpeed;

// Ellipse Collision-Detection Variables
var xCollide = false;
var yCollide = false;

// Draw Ellipse to Screen and Begin Movement
function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  ellipse(x, y, eWidth, eHeight);
  Move();
  Credits();
}

// Ellipse Movement
function Move() {
  Collide();
  Bounce();

  x += xSpeed;
  y += ySpeed;
}

// Ellipse-Window Collision Detection
function Collide() {
  if (x <= 0 || x >= width) {
    xCollide = true;
  } else {
    xCollide = false;
  }

  if (y <= 0 || y >= height) {
    yCollide = true;
  } else {
    yCollide = false;
  }
}

// Ellipse Bounce Appearance
function Bounce() {
  var flatLength = 48;
  var flatHeight = 12
  var normal = 24;

  if (xCollide) {
    eWidth = flatHeight;
    eHeight = flatLength;
    xSpeed *= -1;
  } else if (yCollide) {
    eWidth = flatLength;
    eHeight = flatHeight;
    ySpeed *= -1;
  } else {
    eHeight = eWidth = normal;
  }
}

// Bouncing Ball Credits
function Credits() {
  fill(255);
  textAlign(CENTER);
  text("Bouncing Ball\nRalph McCracken, III\nFrame rate: " + round(frameRate()), round(windowWidth/2), round(windowHeight/2));
}
