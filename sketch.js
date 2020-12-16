var monkey, monkey_running;
var banana, bananaImage, bananaGroup, obstacle, obstacleImage;
var FoodGroup, obstacleGroup, ground;
var score = 0;
var survivalTime = 0;

function preload() {
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x);
}

function draw() {
  background(255);
  obstacles();
  bananas();
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  if (keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);

  stroke("white");
  textSize(20);
  fill("white");

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate());
  text("Survival Time: " + survivalTime, 100, 50);
  text("Score: " + score, 100, 70);

  drawSprites();
}

function obstacles() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(width, height - 70, 10, 10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -5;
    obstacle.lifetime = 200;

  }
}

function bananas() {
  if (frameCount % 80 === 0) {
    banana = createSprite(width, Math.round(random(120, 200)), 10, 10);
    banana.addImage(bananaImage);
    banana.scale = 0.15;
    banana.velocityX = -5;
    banana.lifetime = 200;
  }
}