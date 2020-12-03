var fixedRect, movingRect;
var gameObject1,gameObject2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameObject1 = createSprite(400,600,50,80)
  gameObject2 = createSprite(400,300,50,80)
  gameObject1.shapeColor = "green"
  gameObject2.shapeColor = "green"
  gameObject1.debug = true;
  gameObject2.debug = true;
  
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect) 
gameObject2.x = mouseX
gameObject2.y = mouseY
  if(isTouching(gameObject2,gameObject1)){
gameObject1.shapeColor = "red"
gameObject2.shapeColor = "red"
  }
  else{
    gameObject1.shapeColor = "green"
    gameObject2.shapeColor = "green"
  }
  drawSprites();
}