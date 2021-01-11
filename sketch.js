const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world

var stand1, stand2, slingshot
var ball, ground
var slingshot
var polygon_img;

function setup(){

    engine = Engine.create();
    world = engine.world();

    createCanvas(900,400);

  stand1 = new Ground(380,300,270,10);
  stand2 = new Ground(700,200,200,10);

    //level one
   var block1 = new Block(280,275,30,40);  
   var block2 = new Block(310,275,30,40);
   var block3 = new Block(340,275,30,40);
   var block4 = new Block(370,275,30,40);
   var block5 = new Block(400,275,30,40);
   var block6 = new Block(430,275,30,40);
   var block7 = new Block(460,275,30,40);
   var block8 = new Block(490,275,30,40);
    //level two
   var block9 = new Block(310,235,30,40);
   var block10 = new Block(340,235,30,40);
   var block11 = new Block(370,235,30,40);
   var block12 = new Block(400,235,30,40);
   var block13 = new Block(430,235,30,40);
   var block14 = new Block(460,235,30,40);
    //level three
   var block15 = new Block(340,195,30,40);
   var block16 = new Block(370,195,30,40);
   var block17 = new Block(400,195,30,40);
   var block18 = new Block(430,195,30,40);
    //level four
   var block19 = new Block(370,155,30,40);
   var block20 = new Block(400,155,30,40);
    //level five
   var block21 = new Block(385,115,30,40);

   ball = Bodies.circle(50,200,20);
   World.add(world,ball);

   slingshot = new Slingshot(this.ball,{x:200,y:200});
}

function draw(){
    background("white");
    Engine.update(engine);

    
  stand1.display();
  stand2.display();
  
  stroke(15);
  fill("black")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  stroke(15)
  fill("orange")
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
 stroke(15)
 fill("violet")
  block15.display();
  block16.display();
  block17.display();
  block18.display();
    stroke(15)
    fill("green")
  block19.display();
  block20.display();
 stroke(15)
 fill("blue")
  block21.display();

  stroke(15)
  fill("red")
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  stroke(15)
  fill("yellow")
  blocks6.display();
  blocks7.display();
  blocks8.display();
 //text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks");
 console.log("Rey is stupid");
 ellipse(ball.position.x,ball.position.y,20);
 slingshot.display();
}


function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
   slingshot.fly();
  }

