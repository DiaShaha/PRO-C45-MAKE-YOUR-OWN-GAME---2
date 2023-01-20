var PLAY = 1;
var END = 0;
var gameState = PLAY;
var inputBox;
var button;

function preload(){
  red1 = loadImage("Red.png")
  redAttack1 = loadImage("RedAttack.png");
  green1 = loadImage("Green.png")
  greenAttack1 = loadImage("GreenAttack.png");
  blue1 = loadImage("Blue.png")
  blueAttack1 = loadImage("BlueAttack.png");
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
  openingImg = loadImage("opening.png")
  Arena1 = loadImage("L4.png")
 
}
//everything you only want once
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(openingImg);
  openingImg.scale = 0.75

  fill("black")
  textSize(25)
  text("Enter your name below", width/2 - 135, windowHeight/2 + 250 )

  inputBox = createInput("").attribute("placeholder", "Enter your name");
  inputBox.style('color', 'black') 
  inputBox.style('font-size', '20px')
  inputBox.position(width/2 - 105, windowHeight/2 + 260)
  inputBox.size(200, 30) 

  button = createButton("Submit")
  button.style('background-color', "#FFBD59")
  button.style('color', "black")
  button.style('font-size', '25px')
  button.position(windowWidth/2 - 50, windowHeight/2 + 320)

  button.mousePressed(()=>{
    name1 = inputBox.value()
    if(name1 === ""){
      alert("Please enter your name in the space provided below")
      return  false
    }
    else{
      button.mousePressed(greeting)
    }
  })

 /* green = createSprite()

  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;*/
}
//everything you want repeatedly

function draw() {  
  if (gameState===PLAY){
  //  score = score + Math.round(getFrameRate()/60);
    }
  
  else if (gameState === END) {
   /* gameOver.visible = true;
    restart.visible = true;*/   
  }
 
  drawSprites();
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
}

function greeting(){
  background(Arena1)
  inputBox.hide()
  button.hide()
  
  red = createSprite(width/7, height/2)
  red.addImage(red1)
  red.scale = 0.5

  green = createSprite(width/2, height/6)
  green.addImage(green1)
  green.scale = 0.5

  blue = createSprite(width/1.25, height/1.5)
  blue.addImage(blue1)
  blue.scale = 0.5

}










/* add backgrounnd
make fish shoot shells and choose keys for each sish shooting eg. r for red to shoot
change annimationa nd fish position when shooting*/
