var fixed
var move


function setup() {
  createCanvas(1200,800);
   fixed = createSprite(600,400, 50, 100)
   move = createSprite(400,400, 100, 50)
  
   move.velocityX=4
  fixed.velocityX=-4

   fixed.debug=true;
   move.debug=true;
}

function draw() {
  background(0);  

  if(move.x - fixed.x < fixed.width/2 + move.width/2 
    && fixed.x - move.x < fixed.width/2 + move.width/2 ){
  move.velocityX=-4
  fixed.velocityX=4
  }

/*
  if(move.x - fixed.x < fixed.width/2 + move.width/2 
     && fixed.x - move.x < fixed.width/2 + move.width/2  
     && move.y - fixed.y < fixed.height/2 + move.height/2 
     && fixed.y - move.y < fixed.height/2 + move.height/2  ){
    fixed.shapeColor = "red"
    move.shapeColor = "red"
  }
  else{
    fixed.shapeColor = "green"
    move.shapeColor = "green"
  }
*/
  
  
  

  
  
  
  drawSprites();
}