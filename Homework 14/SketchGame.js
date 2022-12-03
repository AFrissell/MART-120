    
    //DEFINING VARIABLES
    //Character location and size
    var characterx = 50;
    var charactery = 50;
    var characterDiameter = 15;
    //Wall 1 variables
    var WallMove1= 1;
    var Wall1x=400;
    var Wall1y=10;
    //Wall 2 Variables
    var Wall2y=470;
    var WallMove2= 2;
    //Mouse Object Variables
    var mouseShapeX=5;
    var mouseShapeY=5;
    var mouseX = -5;
    var mouseY = -5;
    //sphere 1 obstacle Randomness
    var sphere1X = 96;
    var sphere1Y = 23;
    var sphere1XSpeed;
    var sphere1YSpeed;
     //sphere 2 obstacle Randomness
     var sphere2X = 89;
     var sphere2Y = 247;
     var sphere2XSpeed;
     var sphere2YSpeed;

     //ARRAY SHAPE VARS BELOW)
     // x and y for a shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];
//color var in shape array
var RedShades = [];

     
    
    //SET UP CANVAS (also moving object sphere speeds)
    function setup()
    {
        createCanvas(800,600);

        //NEW ARRAYS RANDOM SPEEDS
        for (var i = 0; i < 10; i++) {
          shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
          shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);

            shapeXs[i] = getRandomNumber(800);
            shapeYs[i] = getRandomNumber(600);
            diameters[i] = getRandomNumber(15);
            RedShades[i] = Math.floor(Math.random()*100);
      }
          //OLD SHAPES BELOW (NOT ARRAYS) SPEEDS
        //speed for shape 1
        sphere1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() *5)) + 1);
        sphere1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() *5)) + 1);
        //speed for shape 2
        sphere2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() *3)) + 2);
        sphere2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() *3)) + 2);
       
    }
    function draw()
    {
      background(80, 0, 0);
        
      //call createCharacter Function (diameter)
      createCharacter(15);

      //call CharacterMovement (speed)
      characterMovement(4);
     
      //call createBorders function (width)
      createBorders(10);
     
      //call title (for decoration and a static obstacle itself)
      createTitle();
     
      //call WallObstacle1+movement 
      createWallObstacle1();

      //call WallObstacle2+movement
      createWallObstacle2();

      //call ObstacleRandom1 (size)
      createObstacleRandom1(20);

      //call ObstacleRandom2 (size)
      createObstacleRandom2(30);

      //call characterWin screen (Font Size)
      CharacterWin(150);

      //mousclick Obstacle (MouseClickObstacle size)
      createMouseClickObstacle(10);

       //WallCollisions (FOR FUN!)
       WallCollisions();


        //ARRAYS ENEMIES 

    // draw the shapes with arrays
    for (var i = 0; i < shapeXs.length; i++) {
        fill(RedShades[i], 0, 0);
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        



        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > 800) {
            shapeXs[i] = 0;
        }

        if (shapeXs[i] < 0) {
            shapeXs[i] = 800;
        }

        if (shapeYs[i] > 600) {
            shapeYs[i] = 0;
        }

        if (shapeYs[i] < 0) {
            shapeYs[i] = 600;
        }
    }

    }



//START OF FUNCTIONS

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
//Borders function (with corners)
function createBorders(borderWidth)
{
  fill(192, 192, 192)
  rect(0, 0, borderWidth, 600)
  rect(0, 0, 800, borderWidth)
  rect(0, 590, 730, borderWidth)
  rect(790, borderWidth, 10, 600)
    triangle(0, 0, 0, 75, 75, 0)
    triangle(0, 600, 0, 525, 75, 600)
    triangle(800, 0, 725, 0, 800, 75)
}
function createCharacter(characterDiameter)
{
  fill(0, 100, 0);
        circle(characterx,charactery,characterDiameter);
}
function characterMovement(characterMovementSpeed)
{
  if (keyIsDown(83)) 
      {
        charactery += characterMovementSpeed;
      } 
      else if (keyIsDown(87)) 
      {
        charactery -= characterMovementSpeed;
      }
      if(keyIsDown(68))
      {
          characterx+=characterMovementSpeed;
      }
      if(keyIsDown(65))
      {
          characterx-=characterMovementSpeed;
     }
     fill(192, 192, 192)
}
//function: Title oval (and sword (last 3 lines)). 
function createTitle()
{
      ellipse(400, 300, 300, 125)
      fill(80, 0, 0)
      textSize(40);
      text('Red Dungeon', 280, 310)
          circle(325, 335, 8)
          rect(325, 332, 150, 6)
          rect(350, 325, 5, 20)
}
function createWallObstacle1()
{
  fill (192, 192, 192)
     rect(Wall1x, Wall1y, 10, 50)
     Wall1y+=WallMove1;
     if(Wall1y >= 185 || Wall1y <= 10)
        { WallMove1 *= -1;};
}
function createWallObstacle2()
{
  rect(Wall1x, Wall2y, 10, 50)
     Wall2y+=WallMove2;
     if(Wall2y >= 540 || Wall2y <= 362)
        { WallMove2 *= -1;}
}
//RANDOM OBSTACLES 1 AND 2
function createObstacleRandom1(ObstacleRandom1Size)
{
  circle (sphere1X, sphere1Y, ObstacleRandom1Size);
        sphere1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() *5)) + 1);
        sphere1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() *5)) + 1);
        sphere1X += sphere1XSpeed;
        sphere1Y += sphere1YSpeed;
        //checking boundaries obstacle 1
        if(sphere1X > 800)
        {sphere1X=0;}
        if(sphere1X < 0)
        {sphere1X=800}

        if(sphere1Y > 600)
        {sphere1Y = 0;}
        if(sphere1Y < 0)
        {sphere1Y = 600;}
}
function createObstacleRandom2(ObstacleRandom2Size)
{fill(0)
  circle (sphere2X, sphere2Y, ObstacleRandom2Size);
  sphere2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() *3)) + 1);
  sphere2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() *3)) + 1);
  sphere2X += sphere2XSpeed;
  sphere2Y += sphere2YSpeed;
  //check boundaries: random obstacle 2 
  if(sphere2X > 800)
  {sphere2X=0;}
  if(sphere2X < 0)
  {sphere2X=800}
 
  if(sphere2Y > 600)
  {sphere2Y = 0;}
  if(sphere2Y < 0)
  {sphere2Y = 600;}
 }
function CharacterWin(TextWinSize)
{
  if (characterx > 730 && charactery > 575)
  {
     fill (0, 100, 0);
     stroke(5);
     textSize(TextWinSize);
     text("You Win!", 90, 520)
}}
function createMouseClickObstacle(mouseClickObstacleSize)
{fill (238, 75, 43)
circle(mouseShapeX, mouseShapeY, mouseClickObstacleSize)}

function getRandomNumber(number) {
  return Math.floor(Math.random() * number) + 10;
}

//Doing this for fun: Outer Wall Collisions
function WallCollisions()
{
  if(characterx >= 783)
  {characterx = 782}

  if (charactery >= 583 && characterx <= 735)
  {charactery = 582}

  if (characterx <=17)
  {characterx = 16}

  if (charactery <=18)
  {charactery = 17}
}