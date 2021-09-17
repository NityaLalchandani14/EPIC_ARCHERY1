const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var playerArrows = [];

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	angleMode(DEGREES);

   //Create Player Base and Computer Base Object

   var options = {
    isStatic: true
  };

    playerBase = Bodies.rectangle(200,350,180,150,options);
    World.add(world, playerBase);

 player = Bodies.rectangle(250, playerBase.Y, - 160, 50, 180, options);
 World.add (world, player);

playerArcher = new playerArcher(
  340,
    playerBase.position.y - 112,
    120,
    120
);

 }

function draw() {

  background(180);

  Engine.update(engine);
image (bassimage,playerBase.x, playerBase.y, 180, 150)
image (playerimage, player.x, player.y, 50, 180);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 


   //display Player and computerplayer


}
