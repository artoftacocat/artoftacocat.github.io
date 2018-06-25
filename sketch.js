// bball dude for Tacocat

let backgroundMusic;
let lostBallSound;
let bounceSound;
let noWaySound;
let bballDude;
let bball;
let meanieShowing = false;
let x = 75;
let y = 350;
let dy = -3;
let dx = 0;
let theta = 0;
let canvas;

function preload() {
  backgroundMusic = loadSound("assets/OrbitalColossus.mp3");
  noWaySound = loadSound("assets/magic1.wav");
  bballDude = loadImage("images/bball-dude.png");
  bball = loadImage("images/bball.png");
  lostBallSound = loadSound("assets/swing.wav");
}

function setup() {
  canvas = createCanvas(bballDude.width+50, bballDude.height+20);
  canvas.parent("bball-dude");
  backgroundMusic.loop();
}

function draw() {
  background(255);
  bounceTheBall();
  imageMode(CORNER);
  image(bballDude, 50, 0);
  imageMode(CENTER);
  push();
  translate(x, y);
  rotate(theta);
  image(bball, 0, 0);
  pop();
  theta += 0.01;
  x += dx;
  if (x < -100) {
    dx = 1;
  }
  if (x >= 75) {
    x = 75;
    dx = 0;
    meanieShowing = false;
  }

  if (meanieShowing) {
    fill(255, 200);
    rect(75, 100, 150, 75);
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER);
    text("Meanie!", 150, 150);
  }
}

function bounceTheBall() {
  if (y > 425) {
    dy *= -1;
  }
  else if (y < 325) {
    dy *= -1;
  }
  y += dy;
}

function mousePressed() {
  if (x < 20) {
    noWaySound.play();
  }
  lostBallSound.play();
  dx = -1;
  meanieShowing = true;
}
