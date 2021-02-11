var fixedrect,movingrect;
var rect,rect2,rect3,rect4,rect5,rect6,rect7,rect8,rect9,rect10;

function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(400, 200, 50, 50);
 fixedrect.shapeColor="blue";
 movingrect= createSprite(600, 200, 50, 50);
 movingrect.shapeColor="blue";
rect= createSprite(100,100,30,30);
rect.shapeColor="red";
//rect.velocityY=3;
rect.velocityX=3;
rect2= createSprite(300,300,30,30);
rect2.shapeColor="pink";
rect2.velocityY=-3;
//rect2.velocityX=-3;
rect3=createSprite(200,100,20,20);
rect3.shapeColor="black";
rect3.velocityY=2;
rect4=createSprite(500,300,50,50);
rect4.shapeColor="brown";
rect4.velocityX=-2;
rect5=createSprite(150,150,20,20);
rect5.shapeColor="purple";

rect6=createSprite(200,300,20,20);
rect6.shapeColor="pink";
rect6.velocityY=-2;
rect7=createSprite(250,250,30,30);
rect7.shapeColor="blue";
rect7.velocityX=2;
rect8=createSprite(350,350,20,20);
rect8.shapeColor="red";
rect8.velocityX=2;
rect9=createSprite(750,200,20,20);
rect9.shapeColor="purple";
rect9.velocityX=2;
rect10=createSprite(400,300,20,20);
rect10.shapeColor="black";
rect10.velocityX=2;
}

function draw() {
  background("yellow");  
  rect5.x=World.mouseX;
  rect5.y=World.mouseY;
  if(isTouching(rect5,rect6)){
    rect5.shapeColor="green";
    rect6.shapeColor="green";
  }
  else{
    rect5.shapeColor="grey";
    rect6.shapeColor="grey";
  }
 bounceoff(rect3,rect6);
  drawSprites();
}
