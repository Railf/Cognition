/*
    Rocket Liftoff
    Ralph McCracken, III
    22 Jan 2017
    
    Notable points:
      Shape Generation
      Shape Collaboration
      Shape Movement
      Shape Relative Movement
      Mouse Click Recognition
      Frame rate: ~60fps
*/

var speed = 1;
var middleX = 600 / 2;
var windowH = 350;
var count = 0;

var ship = {
  topx: middleX - 15,
  topy: windowH - 65,
  topx2: middleX,
  topy2: windowH - 100,
  topx3: middleX + 15,
  topy3: windowH - 65,
  bodyx: middleX,
  bodyy: windowH - 30,
  bodyw: 30,
  bodyh: 70,
  fireby: windowH,
  firebx1: middleX - 15,
  firebx2: middleX + 15,
  firebpx: middleX,
  firebpy: windowH + 100
};

function setup() {
  createCanvas(600, 350);
}

function draw() {
  background(0);
  Credits();
  noStroke();
  rectMode(CENTER);
  
  fill(255,0,0);
  triangle(ship.firebx1, ship.fireby, ship.firebpx, ship.firebpy, ship.firebx2, ship.fireby);
  fill(255,255,0);
  triangle(ship.firebx1, ship.fireby, ship.firebpx, ship.firebpy-50, ship.firebx2, ship.fireby);
  
  fill(255);
  triangle(ship.topx, ship.topy, ship.topx2, ship.topy2, ship.topx3, ship.topy3);
  rect(ship.bodyx, ship.bodyy, ship.bodyw, ship.bodyh);
  
  liftOff();
}

function liftOff() {
  ship.topy -= speed;
  ship.topy2 -= speed;
  ship.topy3 -= speed;
  ship.bodyy -= speed;
  ship.fireby -= speed;
  ship.firebpy -= speed;
  ship.firebpx += random(-0.5,0.5);
  count++;
}

function mousePressed () {
  revert();
}

function revert() {
  ship.topy += count;
  ship.topy2 += count;
  ship.topy3 += count;
  ship.bodyy += count;
  ship.fireby += count;
  ship.firebpy += count;
  count = 0;
}

function Credits() {
  fill(255);
  textAlign(CENTER);
  text("Rocket Liftoff\nRalph McCracken, III\nFrame rate: " + round(frameRate()), round(windowWidth/2), round(windowHeight/2));
}
