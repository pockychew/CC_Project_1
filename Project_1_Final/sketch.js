// Adjective Chosen: Bouncy //

// Colors to be used later //
var redd, greenn, bluee;

/* Increments: default/lowest ball speed (x-coordinate control) & default/lowest 
ball speed (y-coordinate control) */
var xspeed1 = 1.5; // for red ball //
var yspeed1 = 1.5; // also for red ball //

var xspeed2 = 2; // for green ball //
var yspeed2 = 2; // also for green ball //

var xspeed3 = 2.5; // for blue ball //
var yspeed3 = 2.5; // also for blue ball //

// counter variable used to count mouse clicks later on //
var counter = 0; 

/* more counter variables used to count # of times each ball hits
the edge of the canvas */
var rcount = 0;
var gcount = 0;
var bcount = 0;

// shapes to be passed into list later //
var shapes = [];

// framerate //
//var fr = 60;

// OBJECT: balls // 
var balls;
//////////////////

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  
  redd = color(255,0,0);
  greenn = color(0,255,0);
  bluee = color(0,0,255);
  
/* A ball that appears from a random x,y coordinate and has a width&height 
of 30 */
  balls = new Bounce(random(width),random(height),30,30);
  
} // end of setup() //

function draw() {
// set background to white if key 1 is pressed // 
  if ((keyIsPressed) && (key =='1')) {
  	background(255);
  }
  
  if ((keyIsPressed) && (key == '2')) {
  	background(0);
  }

// set to no background/ transparent background??? when key 1 is pressed //
  if ((keyIsPressed) && (key == '3')) {
  	clear();
  }
  
  frameRate(120); // provides smooth motion // 
  balls.move();
  balls.display();
  balls.counter();
  
} // end draw() function //

// CLASS: BOUNCE //
function Bounce(x_,y_,w_, h_) {
/* Balls will have a input x-coordinate, y-coordinate, width "w" and 
a height "h" */
  this.xpos = x_; // x-coordinate //
  this.ypos = y_; // y-coordinate //
  this.w = w_; // width
  this.h = h_; // height

/* keep the ball within the size of the given canvas using constrain */
  
  // Red ball //
  this.xpos = constrain(this.xpos, 0, width); 
  this.ypos = constrain(this.ypos, 0, height);
  
  // Green ball //
  this.a = constrain(this.xpos, 0, random(width));
  this.b = constrain(this.ypos, 0, random(height));
  
  // Blue ball //
  this.c = constrain(this.xpos, 0, random(width));
  this.d = constrain(this.ypos, 0, random(height));
//////////////////////////////////////////////////////////////////////
  
/* What the ball(s) will look like */
	this.display = function() {
    stroke(0); // black outline of ball //
    strokeWeight(3); // weight (thickness of outlining) //
    
    // Drawing of the red ball //
    fill(redd);
    ellipse(this.xpos, this.ypos, this.w, this.h);
    
    
    // Drawing of the green ball //
    fill(greenn);
    ellipse(this.a, this.b, this.w, this.h);
    
    // Drawing of the blue ball //
    fill(bluee);
    ellipse(this.c, this.d, this.w, this.h);
    
  } // end of .display() function //
  
/* How the ball moves/bounces diagonally */
  this.move = function () {

// increasing the x and y coordinates of the ball by increments of 2 // 
  	this.xpos += xspeed1;
    this.ypos += yspeed1;
    this.a += xspeed2;
    this.b += yspeed2;
    this.c += xspeed3;
    this.d += yspeed3;
    
/* The "if" statements in the codes below can be see in Daniel Shiffman's book,
"Learning Processing" in Section 10-5 on page.196. I used Shiffman's method of 
making an object bounce by setting the increments to its respective negative
upon hitting the edges of the canvas. This means  */
    
/* whenever the ball goes over the width of the screen, 
reverse x direction and change background color to the color of the
ball that hit the edge */  
    if (this.xpos >= width) { // if x-position of red ball is equal to, or passes width of canvas //
    	xspeed1 = -xspeed1; 
	/* xspeed1 = -xspeed1 means this.xpos += xspeed1 will now become
  this.xpos -= xspeed1, or in english, INCREMENT BACKWARDS along the x-axis */
      //fr = 30;
      background(255,0,0);
    }
    
    if (this.a >= width) { // if x-position of green ball is equal to, or passes width of canvas //
  /* xspeed2 = -xspeed2 means this.a += xspeed 2  */
    	xspeed2 = -xspeed2;
  /* xspeed2 = -xspeed2 means this.a += xspeed2 will now become
  this.a -= xspeed2, or in english, INCREMENT BACKWARDS along the x-axis */
      //fr = 30;
      background(0,255,0);
    }
    
    if (this.c >= width) { // if x-position of blue ball is equal to, or passes width of canvas //
    	xspeed3 = -xspeed3;
  /* xspeed3 = -xspeed3 means this.c += xspeed3 will now become
  this.c -= xspeed3, or in english, INCREMENT BACKWARDS along the x-axis */
      //fr = 30;
      background(0,0,255);
    }
    
/* whenever the ball goes below or equal to 0 of the width 
(x-coordinate <= 0), also reverse x direction and change background 
color to the color of the ball that hit the edge */
    if (this.xpos <= 0) { // if x-position of red ball is equal to or below 0 of canvas //
    	xspeed1 = -xspeed1;
  /* xspeed1 = -xspeed1 under this "if" statement means this.xpos += xspeed1 will now 
  become this.xpos -= xspeed1. OR, if xspeed1 is already set to -xspeed1 because the ball
  hit the maximum width of canvas first, -xspeed1 will now become -*(-xspeed1), or just
  positive xspeed1. If the latter is true, then the ball will begin incrementing to the right
  along the positive x-axis. */
      //fr = 30;
      background(255,0,0);
    }
    
    if (this.a <= 0) { // if x-position of green ball is equal to or below 0 of canvas //
    	xspeed2 = -xspeed2;
  /* xspeed2 = -xspeed2 under this "if" statement means this.a += xspeed2 will now 
  become this.a -= xspeed2. OR, if xspeed2 is already set to -xspeed2 because the ball
  hit the maximum width of canvas first, -xspeed2 will now become -*(-xspeed2), or just
  positive xspeed2. If the latter is true, then the ball will begin incrementing to the right
  along the positive x-axis. */
      //fr = 30;
      background(0,255,0);
    }
    
    if (this.c <= 0) { // if x-position of blue ball is equal to or below 0 of canvas //
    	xspeed3 = -xspeed3;
  /* xspeed3 = -xspeed3 under this "if" statement means this.c += xspeed3 will now 
  become this.c -= xspeed3. OR, if xspeed3 is already set to -xspeed3 because the ball
  hit the maximum width of canvas first, -xspeed3 will now become -*(-xspeed3), or just
  positive xspeed3. If the latter is true, then the ball will begin incrementing to the right
  along the positive x-axis. */
      //fr = 30;
      background(0,0,255);
    }
    
/* whenever the ball goes over the height of the screen, 
reverse y direction and change background color to the color of the
ball that hit the edge */
    if (this.ypos >= height) { // if y-position of red ball is equal to or passes height of canvas // 
    	yspeed1 = -yspeed1;
  /* yspeed1 = -yspeed1 means this.ypos += yspeed1 will now become
  this.ypos -= yspeed1, or in english, INCREMENT UPWARDS along the y-axis */
      //fr = 30;
      background(255,0,0);
    }
    
    if (this.b >= height) { // if y-position of green ball is equal to or passes height of canvas //
    	yspeed2 = -yspeed2;
  /* yspeed2 = -yspeed2 means this.b += yspeed2 will now become
  this.b -= yspeed2, or in english, INCREMENT UPWARDS along the y-axis */
      //fr = 30;
      background(0,255,0);
    }
    
    if (this.d >= height) { // if y-position of blue ball is equal to or passes height of canvas //
    	yspeed3 = -yspeed3;
  /* yspeed3 = -yspeed3 means this.d += yspeed3 will now become
  this.d -= yspeed3, or in english, INCREMENT UPWARDS along the y-axis */
      //fr = 30;
      background(0,0,255);
    }
    
/* whenever the ball goes below or equal to 0 of the height 
(y-coordinate <= 0), also reverse y direction and change background 
color to the color of the ball that hit the edge */
    if (this.ypos <= 0) { // if y-position of red ball is equal to or below 0 of canvas //
    	yspeed1 = -yspeed1;
  /* yspeed1 = -yspeed1 under this "if" statement means this.ypos += yspeed1 will now 
  become this.ypos -= yspeed1. OR, if yspeed1 is already set to -yspeed1 because the ball
  hit the maximum height of canvas first, -yspeed1 will now become -*(-yspeed1), or just
  positive yspeed1. If the latter is true, then the ball will begin incrementing down
  along the positive y-axis. */
      //fr = 30;
      background(255,0,0);
    }
    
    if (this.b <=0 ) { // if y-position of green ball is equal to or below 0 of canvas //
    	yspeed2 = -yspeed2;
  /* yspeed2 = -yspeed2 under this "if" statement means this.b += yspeed2 will now 
  become this.b -= yspeed2. OR, if yspeed2 is already set to -yspeed2 because the ball
  hit the maximum height of canvas first, -yspeed2 will now become -*(-yspeed2), or just
  positive yspeed2. If the latter is true, then the ball will begin incrementing down
  along the positive y-axis. */
      //fr = 30;
      background(0,255,0);
    }
    
    if (this.d <= 0) { // if y-position of blue ball is equal to or below 0 of canvas //
    	yspeed3 = -yspeed3;
  /* yspeed3 = -yspeed3 under this "if" statement means this.d += yspeed3 will now 
  become this.d -= yspeed3. OR, if yspeed3 is already set to -yspeed3 because the ball
  hit the maximum height of canvas first, -yspeed3 will now become -*(-yspeed3), or just
  positive yspeed3. If the latter is true, then the ball will begin incrementing down
  along the positive y-axis. */
      //fr = 30;
      background(0,0,255);
    }

  } // end of .move() function //
  
// function used to count the # of times each ball hits the edge of canvas //
  this.counter = function() {
  	
  /* if the red ball hits the edge of the canvas, add one to the # of times
  the red ball hit the canvas */
    if ((this.xpos >= width) || (this.xpos <= 0) || (this.ypos >= height) || (this.ypos <= 0)) {
    	rcount += 1;
      for (x = 0; x <= width; x+=10) { // make small yellow ellipitic "stars" //
        fill(255,255,0);
        stroke(255,255,0);
      	shapes[0] = ellipse(random(width), random(height), 3, 3);
      }
    }

  /* if the green ball hits the edge of the canvas, add one to the # of times
  the green ball hit the canvas */
    if ((this.a >= width) || (this.a <= 0) || (this.b >= height) || (this.b <= 0)) {
    	gcount += 1;
      for (x = 0; x <= width; x+=10) { // make small white rectangular "stars" //
        fill(255);
        stroke(255);
      	shapes[1] = rect(random(width), random(height), 3, 3);
      }
    }
  
  /* if the blue ball hits the edge of the canvas, add one to the # of times
  the blue ball hit the canvas */
    if ((this.c >= width) || (this.c <= 0) || (this.d >= height) || (this.d <= 0)) {
    	bcount += 1;
      for (x = 0; x <= width; x+=10) {  // make yellow yellow discs // 
        fill(255,255,0);
        stroke(255,255,0);
      	shapes[2] = ellipse(random(width), random(height), 100, 10);
      }
    }
  
  /////////////// TEXT DISPLAY ADJUSTMENT /////////////////////////////////
    fill(0);
    textSize(20);
    stroke(0);
    strokeWeight(1); // strokeWeight of 1 allows the text to be readable //
  //////////////////////////////////////////////////////////////////////// 
    
    text("Red:", 10, 20);
    text(rcount, 60, 20); // pass the red ball counter + update //
    
    text("Green:", 10, 40);
    text(gcount, 80, 40); // pass the green ball counter + update //
    
    text("Blue:", 10, 60);
    text(bcount, 60, 60); // pass the blue ball counter + update //
    
  } // end of .counter() fuction //
  
} // end of class Ball

// increase the speed of the ball for every mouse click //
/* NOTE: this will update the global variables: xspeed1, yspeed1, 
xspeed2, yspeed2, xspeed3, yspeed3 from their respective values to 
their respective value*multiplier and then will get passed into the this.move() 
function as new values of xspeed1, yspeed1, xspeed2, etc etc */
function mousePressed() {
  xspeed1*=1.5;
  yspeed1*=1.5;
  xspeed2*=1.8;
  yspeed2*=1.8;
  xspeed3*=2;
  yspeed3*=2;
  //fr = 60; 
  counter++; // counter increases by 1 after every mouse click //
//////////////////////////////////////////////////////////
  
  if (counter == 5) {		// once the counter reaches 5 mouseclicks ..... //
    
// set the xspeed, yspeed back to the default/ lowest values // 
    xspeed1 = 2; 
    yspeed1 = 2;
    xspeed2 = 2; 
    yspeed2 = 2;
    xspeed3 = 2; 
    yspeed3 = 2;
///////////////////////////////////////////////////////////////
    
/* need to reset counter back to 0 or else it will evetually be greater than
5 and the "if" statement wouldn't work */
    counter = 0; 
  }
  
} // end of mousePressed() function //



