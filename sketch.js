
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Body = Matter.Body
const Constraint = Matter.Constraint

var engine,world
var ground1,ground2,b1,b2,b3,b4,
b5,b6,b7,b8,b9,b10,b11,b12
,b13,b14,slingshot,polygon,backgroundImg;
var score = 0;

function preload(){
  getBackgroundImg()
}

function setup() {
  createCanvas(900,500);
engine = Engine.create()
world = engine.world


ground1 = new Ground(390,300,150,20);
ground2 = new Ground(690,150,150,20);
b1 = new Box(344,295,30,30)
b2 = new Box(370,295,30,30)
b3 = new Box(398,295,30,30);
b4 = new Box(420,295,30,30);
b5 = new Box(370,270,30,30);
b6 = new Box(398,270,30,30);
b7 = new Box(387,220,30,30);
b8 = new Box(640,144,30,30);
b9 = new Box(670,144,30,30);
b10 = new Box(700,144,30,30);
b11 = new Box(730,144,30,30);
b12 = new Box(670,120,30,30);
b13 = new Box(700,120,30,30);
b14 = new Box(685,100,30,30);
polygon = new Polygon(50,400,40);
slingshot = new Slingshot(polygon.polygon,{x:200, y:200});

}



function draw() {
  if(backgroundImg){
    background(backgroundImg);
    } 
  Engine.update(engine);

  noStroke();
  textSize(34);
  fill("Black");
  text("Score: " + score, 20,100)
  ground1.display();
  ground2.display();
  b1.display();
  b1.score();
  b2.display();
  b2.score();
  b3.display();
  b3.score();
  b4.display();
  b4.score();
  b5.display();
  b5.score();
  b6.display();
  b6.score();
  b7.display();
  b7.score();
  b8.display();
  b8.score();
  b9.display();
  b9.score();
  b10.display();
  b10.score();
  b11.display();
  b11.score();
  b12.display();
  b12.score();
  b13.display();
  b13.score();
  b14.display();
  b14.score();
  polygon.display();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}


function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(polygon.polygon)
  }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldclockapi.com/api/json/cst/now");
    var responsejson = await response.json();
    var datetime = responsejson.currentDateTime;
    var hour = datetime.slice(11,13);
    console.log(response);
    console.log(responsejson);
    console.log(datetime);
    console.log(hour);

    if(hour => 19 && hour >= 6){
        backgroundImg = loadImage("sprites/bg.png");
    }

    else{
        backgroundImg = loadImage("sprites/bg2.png")
    }
}