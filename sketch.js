var wall,thickness;
var bullet,speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(200,200,50,20);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=rgb(80,80,80);
  weight=random(30,52);
  speed=random(223,321);
  bullet.velocityX=speed;
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
}

function draw() {
  background("cyan");  
  
  if (wall.x-bullet.x<bullet.width/2+wall.width/2) {
    bullet.x=wall.x;
    bullet.velocityX=0;
    if(damage<10) {
      wall.shapeColor="green";
    }
    if (damage>10) {
      wall.shapeColor="red";
    }
  }
  drawSprites();
}



