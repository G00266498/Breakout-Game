//Set up canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Set the starting point
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;



function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD"
	ctx.fill();
	ctx.closePath();
}


//Draw the ball
function draw() {
	ctx.clearRect(0,0,canvas.Width,canvas.height);
	drawBall();
	x += dx;
    y += dy;
}

setInterval(draw, 10);

