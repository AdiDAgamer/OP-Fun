
const {Engine, World, Bodies, Constraint} = Matter;
var engine, world;
var ground;
var platform;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10, block11, block12, block13, block14, block15, block16;
var block17, block18, block19, block20, block21;
var block22, block23, block24;
var block25;
var ball;
var block26, block27, block28, block29, block30, block31, block32, block33, block34;
var block35, block36, block37, block38, block39, block40, block41;
var block42, block43, block44, block45, block46;
var block47, block48;
var block49;
var bg;
var blockimg;
var slingShot;
var angle = 0;

function preload()
{
  bg = loadImage("animations/bg.png");
  blockimg = loadImage("animations/enemy.png");
}

function setup() 
{
  createCanvas(800, 600);
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new GroundG(400, 575, 800, 50);
  
  ball = new boomboom(140, 385);

  platform = new Platform(600, 300);
  
  block1 = new Block(700, 560);
  block2 = new Block(700 - 25, 560);
  block3 = new Block(700 - (25*2), 560);
  block4 = new Block(700 - (25*3), 560);
  block5 = new Block(700 - (25*4), 560);
  block6 = new Block(700 - (25*5), 560);
  block7 = new Block(700 - (25*6), 560);
  block8 = new Block(700 - (25*7), 560);
  block9 = new Block(700 - (25*8), 560);

  block10 = new Block(700 - 25, 545 - 30);
  block11 = new Block(700 - (25*2), 545 - 30);
  block12 = new Block(700 - (25*3), 545 - 30);
  block13 = new Block(700 - (25*4), 545 - 30);
  block14 = new Block(700 - (25*5), 545 - 30);
  block15 = new Block(700 - (25*6), 545 - 30);
  block16 = new Block(700 - (25*7), 545 - 30);

  block17 = new Block(700 - (25*2), 552.5 - (30*2));
  block18 = new Block(700 - (25*3), 552.5 - (30*2));
  block19 = new Block(700 - (25*4), 552.5 - (30*2));
  block20 = new Block(700 - (25*5), 552.5 - (30*2));
  block21 = new Block(700 - (25*6), 552.5 - (30*2));

  block22 = new Block(700 - (25*3), 552.5 - (30*3));
  block23 = new Block(700 - (25*4), 552.5 - (30*3));
  block24 = new Block(700 - (25*5), 552.5 - (30*3));

  block25 = new Block(700 - (25*4), 552.5 - (30*4));

  block26 = new Block(700, 300 - 25);
  block27 = new Block(700 - 25, 300 - 25);
  block28 = new Block(700 - (25*2), 300 - 25);
  block29 = new Block(700 - (25*3), 300 - 25);
  block30 = new Block(700 - (25*4), 300 - 25);
  block31 = new Block(700 - (25*5), 300 - 25);
  block32 = new Block(700 - (25*6), 300 - 25);
  block33 = new Block(700 - (25*7), 300 - 25);
  block34 = new Block(700 - (25*8), 300 - 25);

  block35 = new Block(700 - 25, 300 - (25*2));
  block36 = new Block(700 - (25*2), 300 - (25*2));
  block37 = new Block(700 - (25*3), 300 - (25*2));
  block38 = new Block(700 - (25*4), 300 - (25*2));
  block39 = new Block(700 - (25*5), 300 - (25*2));
  block40 = new Block(700 - (25*6), 300 - (25*2));
  block41 = new Block(700 - (25*7), 300 - (25*2));

  block42 = new Block(700 - (25*2), 300 - (25*3));
  block43 = new Block(700 - (25*3), 300 - (25*3));
  block44 = new Block(700 - (25*4), 300 - (25*3));
  block45 = new Block(700 - (25*5), 300 - (25*3));
  block46 = new Block(700 - (25*6), 300 - (25*3));

  block47 = new Block(700 - (25*3), 300 - (25*4));
  block48 = new Block(700 - (25*4), 300 - (25*4));
  block49 = new Block(700 - (25*5), 300 - (25*4));

  block50 = new Block(700 - (25*4), 300 - (25*5));
  
  slingShot = new SlingShot(ball.body,{x: 140, y: 385});
}

function draw() 
{
  //console.log(frameCount);
  background(bg);
  Engine.update(engine);
    
  //angle = angle + 1;

  ground.display();
  platform.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();

  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();

  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();

  block42.display();
  block43.display();
  block44.display();
  block45.display();
  block46.display();

  block47.display();
  block48.display();
  block49.display();
  
  block50.display();

  slingShot.display();
  ball.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased()
{
  slingShot.fly();
}

function keyPressed()
{
  if(keyCode === 32)
  {
    World.remove(world, ball);
    ball = new boomboom(140, 385);
    slingShot.attach(ball.body);
  }
}