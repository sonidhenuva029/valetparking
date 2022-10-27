canvas = document.getElementsById('myCanvas');
ctx = cnvas.getContext("2d");

var greenCar_width = 75;
var greenCar_hieght = 100;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

var greenCar_X = 5;
var greenCar_y = 225;

function add() {
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;
	background_imageTag.src = background_image;

	greencar_imgtag = new Image();
	greencar_imgtag.onload = uploadgreencar;
	greencar_imgtag.src = greencar_image;

}

function uploadBackground() {
	ctx.drawImg(background_imageTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImg(greencar_imgtag, greenCar_X, greenCar_y, greenCar_width, greenCar_hieght)


}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if (greenCar_y>=0){
		greenCar_y = greenCar_y - 10
		console.log("When arrowkey is pressed, x = " + greenCar_X + "| y" + greenCar_y);
		uploadBackground();
		uploadgreencar();
		
	}
}

function down() {
	//Define function to move the car downward
}

function left() {
	//Define function to move the car left side
}

function right() {
	//Define function to move the car right side
}
