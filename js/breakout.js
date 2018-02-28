//Set up canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Set the starting point
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var ballColour = "#FF00FF";

//Draw the ball
function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = ballColour;
	ctx.fill();
	ctx.closePath();
	
}


//Bounce off the walls
function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	
//Bounce in the y axis (up and down)
if(y + dy <0) {
	dy = -dy; 
}
if(y + dy>canvas.height || y+dy<0) {
	dy= -dy; ballColour = "yellow"; ballRadius = 9;
}

//Bounce in the x axis (left and right)
if(x + dx>canvas.width || x+dx<0) {
	dx=-dx; ballColour = "red"; ballRadius = 5;
}

//Ball keep inside the wall
if(x+dx>canvas.width-ballRadius || x + dx<ballRadius){
	dx =-dx; ballColour = "red"; ballRadius = 5;
}

if(y + dy>canvas.height-ballRadius || y + dy<ballRadius) {
	dy =-dy; ballColour = "yellow"; ballRadius = 9;
	
}

x +=dx;
y +=dy;	

}


setInterval(draw, 10);

