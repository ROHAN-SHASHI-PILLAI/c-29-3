const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
 var stones=[];
var ground,leftBase,rightBase,bridge,jointPoint,stone,jointLink;


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80); 
  ground = new Base(200,680,600,20);
  leftBase=new Base(40,350,300,100);
  rightBase=new Base(1230,350,300,100);
  bridge = new Bridge(15, { x: width / 2 - 400, y: height / 2 }); 
  jointPoint = new Base(width - 600, height / 2 + 10, 40, 20);

  for(var i=0;i<=8;i++){
var x=random(width/4-200,width/2+300);
var y=random(-10,140);
var stone=new Stone(x,y,80,80);
stones.push(stone);
  }

  Matter.Composite.add(bridge.body,jointPoint);
  jointLink= new Link(bridge,jointPoint);
}

function draw() {
  background(51);
  Engine.update(engine);

ground.show();
leftBase.show();
rightBase.show();
bridge.show();

for (var stone of stones) { 
  stone.show(); }

}
