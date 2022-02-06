var pikachu, pikacharged,pikarunning;
var thunder,thunderImg,thunderGroup, background1,score;
function preload(){
  pikarunning = loadAnimation("s.gif")
  thunderImg = loadImage("water.png");
  background1 = loadImage("bg1.jpg");
  pikacharged = loadImage("chargedpika.jpg")
}

function setup(){
  createCanvas(1040,640)
  pikachu = createSprite(110,350,1,1);
 pikachu.addAnimation("running", pikarunning);
  pikachu.scale=0.4;

    
  thunderGroup = createGroup();
score=0;
pikachu.setCollider("circle",0,0,40);
pikachu.debug = true;
}
function draw(){
  background(background1);

  spawnThunder();
   

   if( thunderGroup.isTouching(pikachu)){

    // pikachu.add(pikacharged);
    // setTimeout(100000000);
    // thunderGroup.remove(thunder);
     thunderGroup.destroyEach();
   
    score = score+1;
  }
 
  pikachu.y=World.mouseY;
  drawSprites();
  fill("white")
  text("Score:"+score,300,35);
}

// function spawnThunder(){
//   if(frameCount % 50 === 0){
   
//     
//     thunder.addImage(thunderImg);
//     thunder.scale=0.6;
   
    
//     thunder.addlifetime= 50;
    
//     thunder.depth=pikachu.depth;
    
    
//     thunderGroup.add(thunder);
//   }
// }

 
function spawnThunder(){
 if (frameCount % 200 === 0){
  thunder= createSprite(640,75,40,10);
  thunder.velocityX =-4;
  thunder.y=Math.round(random(20,620))
  thunder.addImage(thunderImg);
    
   
  thunder.scale=0.2;
   
    
  thunder.addlifetime= 50;
  

  
  
  thunderGroup.add(thunder);
 }
}

   

 


