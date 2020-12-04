var bullet , wall , wallI;
var thickness , speed , weight;
var sound;
function preload(){
sound = loadSound("sound.mp3");
}
function setup() {
  createCanvas(1600,400);
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness =  Math.round(random(22,83));
  bullet = createSprite(90,250,50,10);
  wall = createSprite(1300,200,thickness,400);
}

function draw() {
  background("black");
  if(keyDown("space")){
    bullet.velocityX = speed;
    sound.play();
  }
  if(bullet.x>1342){
    bullet.x=1360;
  }
  if(hasCollided(wall,bullet)){
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor = "red"
    }
    if(damage<10){
      wall.shapeColor = "green"
    }
  }
  drawSprites();
}
