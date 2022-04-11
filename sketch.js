const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg,bgImg
var Ice= [];
var maxSnow = 30;

function preload(){
bgImg=loadImage("snow2.jpg")
}

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  if(frameCount % 150 === 0){
    for(var i=0; i<maxSnow; i++){
      var tempice = new Snow(random(0,1350), random(0,50));
      Ice.push(tempice);
    }
  }
  //Ice=new Snow(120,120);

}

function draw() {
   background(bgImg)
   Engine.update(engine);
   for(var i=0; i<maxSnow; i++){
      
      Ice[i].display();
      Ice[i].changePosition();
   }
  drawSprites();
}