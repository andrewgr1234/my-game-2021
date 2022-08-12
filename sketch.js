let player;
let bgimg;
let pimg;
let obsimg;
let obstacales = [];
let wordClassiFier;

function preload() {
  bgimg = loadImage("backround.jpg");
  pimg = loadImage("player.gif");
  obsimg = loadImage("obstacle1.png");

  let options = {
    probabilityThreshold: 0.85,
  };

  wordClassiFier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(1920, 1080);
  player = new Player();
  wordClassiFier.classify(heardWord);
}

function heardWord(error, results) {
  console.log(results[0].label + " " + results[0].confidence);

  if (results[0].label == "up") {
    player.jump();
  }
}

function draw() {
  background(bgimg);

  if (random(1) < 0.008) {
    obstacales.push(new Obstacle());
  }

  for (let obs of obstacales) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      push();
      textSize(80);
      fill("#005f73");
      text("u lost\n" + "noob\n" + "reload the page to play again", 800, 500);
      pop();
      noLoop();
    }
  }

  player.show();
  player.move();
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}
