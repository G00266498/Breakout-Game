//Set up canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Variables
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var ballColour = "#0095DD"
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

//Setup somebricks
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

//Hold the bricks in two-dimensional array 
var bricks = [];
for (c=0; c<brickColumnCount; c++) {
	bricks[c] = [];
	for(r=0; r<brickRowCount; r++) {
		bricks[c][r] = { x: 0, y:0, status: 1 };
	}
}

//This function draws the bricks and a new line was added with the status 1.
function drawBricks() {
	for(c=0; c<brickColumnCount; c++) {
		for (r=0; r<brickRowCount; r++) {
			if(bricks[c][r].status == 1) {
			var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
			var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
			bricks[c][r].x = brickX;
			bricks[c][r].y = brickY;
			ctx.beginPath();
			ctx.rect(brickX, brickY, brickWidth, brickHeight);
			ctx.fillStyle = "#0000FF";
			ctx.fill();
			ctx.closePath();
		}
	}
}
}



//Draw the ball
function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = ballColour;
	ctx.fill();
	ctx.closePath();
}

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle ="#0095DD"
	ctx.fill();
	ctx.closePath();
}

//Bounce off the walls
function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
    drawPaddle();
	drawBricks();
	collisionDetection();
	

if(y + dy < 0) {
	dy = -dy;
}
if(y + dy>canvas.height || y+dy<0) {
	dy= -dy; ballColour = "yellow";
}


if(x + dx>canvas.width || x+dx<0) {
	dx= -dx; ballColour = "green";
}

//Bounce the ball off three walls - if drops off the botton - Game over!
if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
	dx = -dx; ballColour = "green";
}

if(y + dy < ballRadius) {
	dy = -dy; ballColour = "yellow";
	
}else if(y + dy > canvas.height-ballRadius) {
	//Check if the ball is hitting the Paddle
	if(x > paddleX && x < paddleX + paddleWidth) {
		dy = -dy;
		
		
	}
	else {
	alert("GAME OVER!");
	document.location.reload();
}
}


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

//Code for collision Detection
function collisionDetection() {
	for(c=0; c<brickColumnCount; c++) {
		for(r=0; r<brickRowCount; r++) {
			var b = bricks[c][r];
			if(b.status == 1) {
			if(x > b.x && x < b.x+brickWidth && y > b.y &&  y < b.y+brickHeight) {
				dy = -dy;
				b.status = 0;
			
			}
		}
	}
}
}



setInterval(draw, 10);

