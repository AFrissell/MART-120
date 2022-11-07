var Ear1X= 43;
var Ear2X= 255;
var EarY= 250;
var EarDirection= 1;
var Eye1IrisX= 100;
var Eye1IrisY= 235;
var Eye2IrisX= 200;
var Eye2IrisY= 235;
var EyeDirection=.5
var HairX= 150;
var HairY= 180;
var HairDirection=1.25;
var TextSize=22;
var TextSizeDirection= 1;
var count = 0;
function setup()
    {
        createCanvas(300,500);
    }
    function draw()
    {
        background(210, 100, 110);
        textSize(10)
        text('By Aubrey Frissell', 210, 492);
        //Shirt
        fill(250, 100, 100)
        rect(80, 320, 140, 150)
        triangle(80, 385, 80, 340, 40, 385)
        triangle(220, 385, 220, 340, 255, 385)
        line (80, 385, 150, 450);
        line (220, 385, 150, 450)
        //button
        fill(250, 229, 0)
        circle(150, 460, 10)
        point(150, 460)
        //neck
        fill(250, 200, 200)
        triangle(43, 250, 150, 450, 255, 250);
        //ears!!!!!!!!!!!!!!!!!!
        fill(260, 203, 202)
        //ear 1
        ellipse(Ear1X, EarY, 25, 75);
        //ear 2
        ellipse(Ear2X, EarY, 25, 75);
        EarY+=EarDirection;
        if(EarY >= 270 || EarY <= 230)
        { EarDirection *= -1;}

        //head
        fill(230, 203, 202);
        ellipse(150,250,200,250);
        //nose
        fill(260, 203, 202)
        triangle(130, 280, 150, 220, 170, 280);
        triangle(130, 280, 150, 300, 170, 280);
        fill(400, 220, 220)
        triangle (125, 200, 150, 230, 175, 200);
        //details: EyePinks and lids
        fill(210, 100, 110)
        circle(125, 237, 5);
        circle(175, 237, 5);
        fill(260, 220, 220)
        ellipse(102, 230, 50, 25);
        ellipse(198, 230, 50, 25);
        //eyebrows
        fill(50, 29, 0)
        rect(80, 200, 50, 15);
        rect(170, 200, 50, 15);
        triangle(70,215, 80, 200, 80, 210)
        triangle(230, 215, 220, 200, 220, 210)
         //eyes
         fill(300)
         ellipse(100, 235, 50, 25);
         ellipse(200, 235, 50, 25);
        //iris and pupil!!!!!
        fill(5, 140, 250)
        circle(Eye1IrisX, Eye1IrisY, 20)
        circle(Eye2IrisX, Eye2IrisY, 20)
        Eye1IrisX+=EyeDirection;
        if (Eye1IrisX >= 120 || Eye1IrisX <= 90)
        {EyeDirection *= -1;}

        Eye2IrisX+=EyeDirection;
        if (Eye2IrisX >=180 || Eye2IrisX <= 210)

        fill(0)
        circle(Eye1IrisX, Eye1IrisY, 10)
        circle(Eye2IrisX, Eye2IrisY, 10)
        //highlight shine on eyes
        fill(255, 255, 255)
        circle(105, 230, 6)
        circle(205,230, 6)
        //mouth
        fill(210, 100, 110)
        line(115, 320, 180, 320);
        triangle(135, 320, 150, 325, 165, 320);
        line(135, 330, 165, 330);
        //details: eye crease
        line(175, 250, 200, 270)
        line(120, 250, 100, 270)
        //details: eyebrow crease and cheekbone lines
        line(130, 200, 110, 175)
        line(170, 200, 190, 175)
        line(52, 270, 80, 320)
        line(249, 270, 220, 320)
        //Hair!!!!!!!!!!!!!!!!!!!!!!!!!! THIS IS THE DIAGNOL MOVEMENT (THE ELLIPSE)
        fill(50, 29, 0)
        triangle (50, 250, 50, 180, 75, 180);
        triangle (250, 250, 250, 180, 220, 180);
        ellipse (HairX, HairY, 50, 10)
        HairX+=HairDirection;
        if (HairX >= 180 || HairX <= 120 || HairY >= 185 || HairY <= 15)
        {HairDirection *= -1;}
        HairY+=HairDirection;
        
        //Hat
        fill(255, 255, 0)
        triangle (45, 110, 65, 80, 85, 120);
        triangle (255, 110, 235, 80, 215, 120);
        triangle (125, 110, 150, 60, 180, 110)
        rect (45, 110, 210, 70);
        fill (0, 255, 0)
        ellipse (150, 145, 20, 35)
        ellipse (150, 145, 10, 25)
        fill (255, 0, 0)
        ellipse (110, 145, 10, 25)
        ellipse (190, 145, 10, 25)
        ellipse (70, 145, 10, 25)
        ellipse (230, 145, 10, 25)
        //Title 
        fill (100,0,0)
        textSize(TextSize);
        TextSize += TextSizeDirection;
        count++;
        if (count > 5)
        { TextSizeDirection *=-1;
        count=0;}
        text('-Self Portrait-', 90, 40);

    

    }