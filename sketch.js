
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(400,377,900,10);
  ground.velocityX = -6;
  
   
  
  console.log(ground.x);
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
}


function draw() {
  background("white");
drawSprites();
     spawnObstacles();
  spawnbananas();
monkey.collide(ground);
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -15;
    }
    
    monkey.velocityY = monkey.velocityY + 1.2;
  
  if (ground.x  <0){
      ground.x = ground.width/2;
    }
  survivaltime = Math.ceil(frameCount/frameRate());
  text("survivaltime: "+ survivaltime,100,50);
 }

function spawnbananas() {
    if (frameCount % 80 === 0) {
    banana = createSprite(600,120,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.1;
    banana.velocityX = -7;
    
     
    banana.lifetime = 200;
    
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
    FoodGroup.add(banana);
  }
  
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
     obstacle = createSprite(300,335,10,30);
     obstacle.addImage(obstaceImage);
     obstacle.x = Math.round(random(400,500)); 
     obstacle.scale = 0.2;
     obstacle.velocityX = -7;
          
      obstacle.lifetime = 300;
    
   obstaclesGroup.add(obstacle);
  }
}





