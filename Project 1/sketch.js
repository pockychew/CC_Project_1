// Adjective Chosen: Bouncy //

// Colors to be used later; called from a list //
var redd, greenn, bluee, yelloww;

var xspeed = 2; // default/lowest ball speed (x-coordinate control) //
var yspeed = 2; // default/lowest ball speed (y-coordinate control) //
var counter = 0; // counter variable used to count mouse clicks later on

// Object: Ball // 
var ball;

function setup() {
	createCanvas(600,450);
  background(255);
  
  redd = color(255,0,0);
  greenn = color(0,255,0);
  bluee = color(0,0,255);
  yellow = color(0,255,255);
  

  ball = new Ball(random(width),random(height),30,30);
}

function draw() {
  background(255); /* background is set to white because it hides the previous
instances of the drawn ball to make the illusion of only one moving ball;
when in reality there are multiple, but the background resets */
  frameRate(120); // provides smooth motion of "bouncing" ball // 
  ball.move();
  ball.display(redd);
}

function Ball(x_,y_,w_, h_) {
/* Each ball will have a input x-coordinate, y- coordinate, width "w" and 
a height "h" */
  this.xpos = x_; // x-coordinate //
  this.ypos = y_; // y-coordinate //
  this.w = w_; // width
  this.h = h_; // height
  
	
/* What the ball will look like */
	this.display = function(clr) {
    stroke(0); // black outline of ball //
 		strokeWeight(3); // weight (thickness of outlining) // 
    fill(clr); // color passed in //
    ellipse(this.xpos, this.ypos, this.w, this.h);
    
  } // end of .display() function //
  
/* How the ball moves/bounces diagonally */
  this.move = function() {
    
// increasing the x and y coordinates of the ellipse by a given increment // 
  	this.xpos += xspeed;
    this.ypos += yspeed;
    
// keep the ball within the size of the given canvas //
    this.xpos = constrain(this.xpos, 0, width); 
    this.ypos = constrain(this.ypos, 0, height);
    
// whenever the ellipse goes over the width of the screen //  
    if (this.xpos >= width) {
    	xspeed = -xspeed; // reverse the x direction of the ellipse //
    }
    
// whenever the ellipse goes below or equal to 0 of the width //
    if (this.xpos <= 0) {
    	xspeed = -xspeed; // reverse
    }
    
// whenever the ellipse goes over the height of the screen //
    if (this.ypos >= height) {
    	yspeed = -yspeed; // reverse the y direction of the ellpise //
    }
    
// whenever the ellipse goes below or equal to 0 of the height //
    if (this.ypos <= 0) {
    	yspeed = -yspeed; // reverse
    }
     
    
  } // end of .move() function //
	
	
} // end of class Ball


/* increase the speed of the ball by a multiple of 2 for 
every mouse press*/
function mousePressed() {
	xspeed*=2;
  yspeed*=2;
  counter++;
  if (counter == 5) {
  	xspeed = 5;
    yspeed = 5;
    counter = 0;
  }
}
