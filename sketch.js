

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper,ground,bottom,leftside,rightside;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	//creating bodies
	ball=new Paper(100,600,10)
	ground=new Ground(400,680,800,20);
	leftside= new Dustbin(550,620,20,100);
	bottom=new Dustbin(610,660,100,20);
	rightside=new Dustbin(670,620,20,100);

  
}


function draw() {
  rectMode(CENTER);
	background(0);
	ball.display();
	ground.display();
	leftside.display();
	bottom.display();
	rightside.display();
	drawSprites();

}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}