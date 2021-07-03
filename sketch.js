var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 movingRect.velocityY=-5; 
 fixedRect.velocityY=5;
}
function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
 bounceoff(movingRect,fixedRect);
  drawSprites();
}
function bounceoff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2)
{object1.velocityX=object1.velocityX *(-1);
  object2.velocityX=object.velocityX*(-1);
}

 
  if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2)
{object1.velocityY=object1.velocityY *(-1);
object2.velocityY=object.velocityY*(-1);
}
}
