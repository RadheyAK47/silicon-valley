var gameState = "start";
var branch1, branch1Img;
var flag;
var flagPole;
var block1,block2,block3,block4;
var  blockImg;
var flagImg,flag2Img;
var bird,birdImg,bird2Img;
var anthem;


function preload(){
  branch1Img = loadImage("images/branch1.png");

  blockImg = loadImage("images/stone.png");

  flagImg = loadImage("images/flag.png");
  flag2Img = loadImage("images/indian .png");
  birdImg = loadImage("images/bird.png");
  bird2Img = loadImage("images/bird2.png");

  anthem = loadSound("Jana Gana Mana.mp3");
}


function setup(){
  canvas = createCanvas(displayWidth, displayHeight);

  branch1 = createSprite(displayWidth/10,200,20,21);
  branch1.addImage(branch1Img);
  branch1.scale = 0.3; 

  bird = createSprite(250,120,20,21);
  bird.addImage(birdImg);
  bird.scale = 0.1;

  flag = createSprite(displayWidth/2,displayHeight-80,200,91);
  flag.addImage("flag",flagImg);
  flag.scale = 0.3; 

  flagPole = createSprite(displayWidth-200,displayHeight/2.5,20,200);
  flagPole.shapeColor = "brown";
  flagPole.debug = true;
 
  block1 = createSprite(350,400,50,51);
  block1.addImage(blockImg);
  block1.scale = 4;

  block2 = createSprite(350,800,50,51);
  block2.addImage(blockImg);
  block2.scale = 4;

  block3 = createSprite(450,550,50,51);
  block3.addImage(blockImg);
  block3.scale = 4;

  block4 = createSprite(600,700,50,51);
  block4.addImage(blockImg);
  block4.scale = 4;

  block5 = createSprite(700,850,50,51);
  block5.addImage(blockImg);
  block5.scale = 4;

  block6 = createSprite(500,900,50,51);
  block6.addImage(blockImg);
  block6.scale = 4;

  block7 = createSprite(800,1000,50,51);
  block7.addImage(blockImg);
  block7.scale = 4;

  anthem.play();
}

function draw(){
  background("#A4EBF3");

  if(gameState === "start"){
    textFont( 'Satisfy');
    textSize(200);
    fill("green");
    text("BIRD", 300, 200);
    fill("ORANGE");
    text("SHAPE", 1100, 200);
    textSize(80);
    text("Press 'S' to Start",100,displayHeight/1.10);
  }

  if(keyDown("s")){
    gameState = "play";
  }

  if (keyDown("RIGHT_ARROW")){
    bird.x += 5;
  }

  if (keyDown("DOWN_ARROW")){
    bird.y += 5; 
  }

  if (keyDown("LEFT_ARROW")){
    bird.x -= 5; 
  }

  

  if(gameState === "play"){

    // if (bird.isTouching(branch1)){
    //   bird.velocityY = 0;
    // }

    if (bird.isTouching(block1) || bird.isTouching(block2)
        || bird.isTouching(block3) || bird.isTouching(block4)
        || bird.isTouching(block5) || bird.isTouching(block6
        || bird.isTouching(block7))){
      bird.velocityY = 0; 
    }

    if (keyDown("SPACE")){
      bird.velocityY = -5; 
    }

    bird.velocityY += 0.6;

    if (bird.isTouching(flag)){
      flag.visible = false;
      bird.addImage(bird2Img);
      bird.scale = 0.5;

     
    }



    if (bird.isTouching(flagPole)){
      flagPole.addImage(flag2Img);
  

      
    }


    drawSprites();
  }

  
}



