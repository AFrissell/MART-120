  var x = 50;
    var y = 50;
    var diameter = 15;
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
    

    function setup()
    {
        createCanvas(800,600);
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
        fill(0, 100, 0);
        circle(x,y,diameter);

      if (keyIsDown(83)) 
      {
        y += 5;
      } 
      else if (keyIsDown(87)) 
      {
        y -= 5;
      }
      if(keyIsDown(68))
      {
          x+=5;
      }
      if(keyIsDown(65))
      {
          x-=5;
     }
     fill(192, 192, 192)
     //Outer Barriers 
     rect(0, 0, 10, 600)
     rect(0, 0, 800, 10)
     rect(0, 590, 730, 10)
     rect(790, 0, 10, 600)
     //decorative coreners
     triangle(0, 0, 0, 75, 75, 0)
     triangle(0, 600, 0, 525, 75, 600)
     triangle(800, 0, 725, 0, 800, 75)
     
     //Title (for decoration and an obstacle itself)
     ellipse(400, 300, 300, 125)
     fill(80, 0, 0)
     textSize(40);
     text('Red Dungeon', 280, 310)
     //Sword decoration
     circle(325, 335, 8)
     rect(325, 332, 150, 6)
     rect(350, 325, 5, 20)
     //interior obstacles: Wall 1: Top middle
    fill (192, 192, 192)
     rect(Wall1x, Wall1y, 10, 50)
     Wall1y+=WallMove1;
     if(Wall1y >= 185 || Wall1y <= 10)
        { WallMove1 *= -1;};
         //interior obstacles: Wall 2: Bottom Middle 
         rect(Wall1x, Wall2y, 10, 50)
     Wall2y+=WallMove2;
     if(Wall2y >= 540 || Wall2y <= 362)
        { WallMove2 *= -1;}
        //random movement obstacle 1
        circle (sphere1X, sphere1Y, 20);
        sphere1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() *5)) + 1);
        sphere1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() *5)) + 1);
        sphere1X += sphere1XSpeed;
        sphere1Y += sphere1YSpeed;
        //check boundaries: random obstacle 1 
        if(sphere1X > 800)
        {sphere1X=0;}
        if(sphere1X < 0)
        {sphere1X=800}

        if(sphere1Y > 600)
        {sphere1Y = 0;}
        if(sphere1Y < 0)
        {sphere1Y = 600;}
 //random movement obstacle 2
 fill(0)
 circle (sphere2X, sphere2Y, 30);
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

 // Character WIN!!!!!
 if (x > 730 && y > 575)
 {
    fill (0, 100, 0);
    stroke(5);
    textSize(150);
    text("You Win!", 90, 520)
 }


        //mouseclick Obstacle
        fill (238, 75, 43)
        circle(mouseShapeX, mouseShapeY, 10)
    }
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}