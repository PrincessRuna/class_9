var box ;
function setup() {
  createCanvas(1000,1000);
  box = createSprite (200,200,10,20)
  box.shapeColor = "red";
}

function draw() 
{

  background(0);
  drawSprites();
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 0.5
  }

  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x - 0.5
  }

  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y  - 0.5
  }

  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y + 0.5
  }
}





