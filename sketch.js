
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint
var bob1, bob2, bob3, bob4, bob5, chain1, chain2, chain3, chain4, chain5, roof;


//function preload() {

//}

function setup() {
	createCanvas(1000, 700);
	//rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
     
	bob1=new Bob(350,400,20);
	bob2=new Bob(390,400,20);
	bob3=new Bob(430,400,20);
	bob4=new Bob(470,400,20);
	bob5=new Bob(510,400,20);

	roof=new Roof(430,150,350,30)

	chain1=new Rope(bob1.body,roof.body,-80,0)
	chain2=new Rope(bob2.body,roof.body,-40,0)
	chain3=new Rope(bob3.body,roof.body, 0,0)
	chain4=new Rope(bob4.body,roof.body,40,0)
	chain5=new Rope(bob5.body,roof.body,80,0)
	

	Engine.run(engine);



}


function draw() {
	//rectMode(CENTER);
	background("white");
Engine.update(engine);
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 roof.display();

 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:20,y:-40})
}

}
