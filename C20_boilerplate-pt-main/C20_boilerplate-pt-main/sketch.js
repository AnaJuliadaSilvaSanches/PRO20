const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var engine, world;
var block1,block2,block3;
var ground;

function setup() {
    createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  var ball_opitions={
      restitution:1,
      friction:0.3,
      frictionAir:0.001
  }
  block1 = Bodies.circle(100,15,50,ball_opitions);
  ellipseMode(CENTER);
  World.add(world,block1);

  var rectangle_options={
    restitution: 0.01,
    friction: 0.01,
    frictionAir: 0.02
  }
  block2 = Bodies.rectangle(270,20,150,100,rectangle_options);
  rectMode(CENTER);
  World.add(world,block2);

  var quadrado_options={
    restitution: 1.5,
    friction: 1,
    frictionAir:0.05
  }
  block3 = Bodies.rectangle(450,10,100,100,quadrado_options);
  rectMode(CENTER);
  World.add(world,block3);

  var ground_opitions={
      isStatic: true
  }
  ground = Bodies.rectangle(0,550,1200,25,ground_opitions);
  rectMode(CENTER);
  World.add(world,ground);
  fill(20);
}

function draw() 
{
  background("pink");
  Engine.update(engine);  

  ellipse(block1.position.x,block1.position.y,100);
  rect(block2.position.x,block2.position.y,150,100);
  rect(block3.position.x,block3.position.y,100,100);
  rect(ground.position.x,ground.position.y,1200,25);
}

