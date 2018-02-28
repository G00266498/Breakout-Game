//Set up canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Set the starting point
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;

//Draw the ball
function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "red";
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
	dy= -dy;
}

//Bounce in the x axis (left and right)
if(x + dx>canvas.width || x+dx<0) {
	dx=-dx;
}

//Ball keep inside the wall
if(x+dx>canvas.width-ballRadius || x + dx<ballRadius){
	dx =-dx;
}

if(y + dy>canvas.height-ballRadius || y + dy<ballRadius) {
	dy =-dy;
}

x +=dx;
y +=dy;	

}


setInterval(draw, 10);

