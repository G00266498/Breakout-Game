//Set up canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var ballColour = "#0095DD";

//variables for the size and position of the paddle.
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

//variables for storing information
var rightPressed = false;
var leftPressed = false;

//Draw the ball
function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = ballColour;
	ctx.fill();
	ctx.closePath();
}

//Add fuction drawPaddle
function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle ="#0095DD";
	ctx.fill();
	ctx.closePath();
}

//Bounce off the walls
function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
    drawPaddle();
	

if(y + dy < 0) {
	dy = -dy;
}
if(y + dy>canvas.height || y+dy<0) {
	dy= -dy; ballColour = "yellow";
}


if(x + dx>canvas.width || x+dx<0) {
	dx= -dx; ballColour = "green";
}


if(x+dx>canvas.width-ballRadius || x + dx<ballRadius){
	dx = -dx; ballColour = "green";
}

if(y + dy>canvas.height-ballRadius || y + dy<ballRadius) {
	dy = -dy; ballColour = "yellow";
}

//Move the paddle left and right
if(rightPressed && paddleX < canvas.width-paddleWidth) {
	paddleX += 7;
}
else if(leftPressed && paddleX > 0) {
	paddleX -= 7;
}

x +=dx;
y +=dy;	

}




//Two function to handle the keydown and keyup events.
function keyDownHandler(e) {
	if(e.keyCode == 39) {
		rightPressed = true;
	}
	else if(e.keyCode == 37) {
		leftPressed = true;
	}
}

function keyUpHandler(e) {
	if(e.keyCode == 39) {
		rightPressed = false;
	}
	else if(e.keyCode == 37) {
		leftPressed = false;
	}

}




//Paddle movement when the buttons are pressed
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

setInterval(draw, 10);

