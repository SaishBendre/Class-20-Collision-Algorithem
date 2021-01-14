var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
 movingRect= createSprite(400, 200, 50, 50);
 movingRect.shapeColor="black";

 fixedRect= createSprite(400, 200, 50, 50);
 fixedRect.shapeColor="black";

 movingRect.debug="true";
 fixedRect.debug = "true"
}

function draw() {
  background("blue");  

movingRect.x=mouseX;
  movingRect.y=mouseY;

  console.log(movingRect.x-fixedRect.x);
  console.log(movingRect.width/2+fixedRect.width/2)
  
if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
  && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
  &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
  &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
  
  ){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}


  drawSprites();
}