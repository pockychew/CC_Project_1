// Adjective Chosen: Bouncy //

// Colors to be used later; called from a list //
var redd, greenn, bluee;

/* Increments: default/lowest ball speed (x-coordinate control) & default/lowest 
ball speed (y-coordinate control) */
var xspeed1 = 2; // for red ball //
var yspeed1 = 2; // also for red ball //

var xspeed2 = 2; // for green ball //
var yspeed2 = 2; // also for green ball //

var xspeed3 = 2; // for blue ball //
var yspeed3 = 2; // also for blue ball //

// counter variable used to count mouse clicks later on //
var counter = 0; 

// framerate //
var fr = 60;


// OBJECT: BALL // 
var balls;

function setup() {
  createCanvas(600,450);
  background(255);
  
  redd = color(255,0,0);
  greenn = color(0,255,0);
  bluee = color(0,0,255);
  
/* A ball that appears from a random x,y coordinate and has a width&height 
of 30 */
  balls = new Bounce(random(width),random(height),30,30);
}

function draw() {
  background(255); /* background is set to white because it hides the previous
instances of the drawn ball to make the illusion of only one moving ball;
when in reality there are multiple, but the background resets */
  frameRate(fr); // provides smooth motion of "bouncing" ball // 
  balls.move();
  balls.display();
}

// CLASS: BOUNCE //
function Bounce(x_,y_,w_, h_) {
/* Balls will have a input x-coordinate, y-coordinate, width "w" and 
a height "h" */
  this.xpos = x_; // x-coordinate //
  this.ypos = y_; // y-coordinate //
  this.w = w_; // width
  this.h = h_; // height

// keep the ball within the size of the given canvas //
  this.xpos = constrain(this.xpos, 0, width); 
  this.ypos = constrain(this.ypos, 0, height);
  
  this.a = constrain(this.xpos, 0, random(width));
  this.b = constrain(this.ypos, 0, random(height));
  
  this.c = constrain(this.xpos, 0, random(width));
  this.d = constrain(this.ypos, 0, random(height));
  
/* What the ball will look like */
	this.display = function() {
    stroke(0); // black outline of ball //
    strokeWeight(3); // weight (thickness of outlining) //
    
    // Drawing of the red ball //
    fill(redd); 
    ellipse(this.xpos, this.ypos, this.w, this.h);
    
    // Drawing of the green ball //
    fill(greenn)
    ellipse(this.a, this.b, this.w, this.h);
    
    // Drawing of the blue ball //
    fill(bluee)
    ellipse(this.c, this.d, this.w, this.h);
    
  } // end of .display() function //
  
/* How the ball moves/bounces diagonally */
  this.move = function () {

// increasing the x and y coordinates of the ellipse by a given increment // 
  	this.xpos += xspeed1;
    this.ypos += yspeed1;
    this.a += xspeed2;
    this.b += yspeed2;
    this.c += xspeed3;
    this.d += yspeed3;
    
/* The "if" statements in the codes below can be see in Daniel Shiffman's book,
"Learning Processing" in Section 10-5 on page.196. I used Shiffman's method of 
reversing the direction by setting the increments to its respective negative
upon hitting the edges of the canvas */
    
/* whenever the ellipse goes over the width of the screen, 
reverse x direction and change background color to a random color */  
    if (this.xpos >= width) {
      xspeed1 = -xspeed1;
      fr = 30;
      background(random(255),random(255), random(255));
    }
    
    if (this.a >= width) {
      xspeed2 = -xspeed2;
      fr = 30;
      background(random(255),random(255), random(255));
    }
    
    if (this.c >= width) {
      xspeed3 = -xspeed3;
      fr = 30;
      background(random(255),random(255), random(255));
    }
    
/* whenever the ellipse goes below or equal to 0 of the width, also 
reverse x direction and change background color to a random color */
    if (this.xpos <= 0) {
      xspeed1 = -xspeed1;
      fr = 30;
      background(random(255),random(255), random(255));
    }
    
    if (this.a <= 0) {
      xspeed2 = -xspeed2;
      fr = 30;
      background(random(255),random(255), random(255));
    }
    
    if (this.c <= 0) {
      xspeed3 = -xspeed3;
      fr = 30;
      background(random(255),random(255), random(255));
    }
    
/* whenever the ellipse goes over the height of the screen, 
reverse y direction and change background color to a random color */
    if (this.ypos >= height) {
      yspeed1 = -yspeed1;
      fr = 30;
      background(random(255),random(255), random(255));
    }
    
    if (this.b >= height) {
      yspeed2 = -yspeed2;
      fr = 30;
      background(random(255),random(255), random(255));
    }
    
    if (this.d >= height) {
      yspeed3 = -yspeed3;
      fr = 30;
      background(random(255),random(255), random(255));
    }
    
/* whenever the ellipse goes below or equal to 0 of the height,
also reverse y direction and change background color to a random color */
    if (this.ypos <= 0) {
      yspeed1 = -yspeed1;
      fr = 30;
      background(random(255),random(255), random(255));
    }
    
    if (this.b <=0 ) {
      yspeed2 = -yspeed2;
      fr = 30;
      background(random(255),random(255), random(255));
    }
    
    if (this.d <= 0) {
      yspeed3 = -yspeed3;
      fr = 30;
      background(random(255),random(255), random(255));
    }
    
  } // end of .move() function //
  
} // end of class Ball

/* increase the speed of the ball for every mouse press*/
function mousePressed() {
	xspeed1*=1.5;
  yspeed1*=1.5;
  xspeed2*=1.8;
  yspeed2*=1.8;
  xspeed3*=2;
  yspeed3*=2;
  fr = 60; 
  counter++; // counter increases by 1 after every mouse click //
  if (counter == 5) {		// once the counter reaches 5 mouseclicks ..... //
// set the xspeed, yspeed back to the default/ lowest values // 
    xspeed1 = 2; 
    yspeed1 = 2;
    xspeed2 = 2; 
    yspeed2 = 2;
    xspeed3 = 2; 
    yspeed3 = 2;
    fr = 60; // set framerate back to 60 //
/* need to reset counter back to 0 or else it will evetually be greater than
5 and the "if" statement wouldn't work */
    counter = 0; 
  } // end of "if" statement //
} // end of mousePressed() function //

