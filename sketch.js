
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbinline1
var dustbinline2;
var dustbinline3;
var ground;
var paper;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,690,800,5);
	dustbinline3 = new Dustbin(645,650,300,5);
	dustbinline1 = new Dustbin(500,600,5,100);
	dustbinline2 = new Dustbin(790,550,5,100);
	paper = new Paper(100,190,50,50);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  
  ground.display();
  dustbinline1.display();
  dustbinline2.display();
  dustbinline3.display();
  paper.display();
 
}

function keyPressed(){
if (keycode === 32){
	Body.applyForce(paperObject.body,paperObbject.body.position,{x:85,y:-85})
}

}

