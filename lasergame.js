var myGamePiece;
var myEnemy;
var myEnemy2;

var bomb;
var bomb2;
var bomb3;

var shooting = false;

var playerhealth = 56;
var enemyhealth = 56;
var enemyhealth2 = 56;

var facingright = true;

var pause = true;

var score = 0;

var bombpos = Math.floor(Math.random() * (400 - 200)) + 200;
var bombpos2 = -25;
var bomb2pos = Math.floor(Math.random() * (400 - 200)) + 200;
var bomb2pos2 = -75;
var bomb3pos = Math.floor(Math.random() * (400 - 200)) + 200;
var bomb3pos2 = -125;

function startGame() {
	myGameArea.start();
	myGamePiece = new player(30, 30, "pink", 270, 270);
	myEnemy = new enemy(30, 30, "lightblue", 515, 270);
	myEnemy2 = new enemy2(30, 30, "lightblue", 55, 270);
	bomb = new bomb();
	bomb2 = new bomb2();
	bomb3 = new bomb3();
}

function bomb(x, y) {
	this.width = 50
	this.height = 50;
	this.x = x;
	this.y = y;
	ctx = myGameArea.context;
	ctx.fillStyle = "black";
	ctx.strokeStyle = "black";
	ctx.lineWidth = "3";
	
	//Object
	ctx.beginPath();
	ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	this.update = function() {
		ctx = myGameArea.context;
		ctx.fillStyle = "gray"
		ctx.strokeStyle = "black";
		
		//Object
		ctx.beginPath();
		ctx.arc(bombpos, bombpos2, 20, 0, 2 * Math.PI);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

function bomb2(x, y) {
	this.width = 50
	this.height = 50;
	this.x = x;
	this.y = y;
	ctx = myGameArea.context;
	ctx.fillStyle = "black";
	ctx.strokeStyle = "black";
	ctx.lineWidth = "3";
	
	//Object
	ctx.beginPath();
	ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	this.update = function() {
		ctx = myGameArea.context;
		ctx.fillStyle = "gray";
		ctx.strokeStyle = "black";
		
		//Object
		ctx.beginPath();
		ctx.arc(bomb2pos, bomb2pos2, 20, 0, 2 * Math.PI);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

function bomb3(x, y) {
	this.width = 50
	this.height = 50;
	this.x = x;
	this.y = y;
	ctx = myGameArea.context;
	ctx.fillStyle = "black";
	ctx.strokeStyle = "black";
	ctx.lineWidth = "3";
	
	//Object
	ctx.beginPath();
	ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	this.update = function() {
		ctx = myGameArea.context;
		ctx.fillStyle = "gray";
		ctx.strokeStyle = "black";
		
		//Object
		ctx.beginPath();
		ctx.arc(bomb3pos, bomb3pos2, 20, 0, 2 * Math.PI);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

function player(width, height, color, x, y) {
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	ctx = myGameArea.context;
	ctx.fillStyle = color;
	ctx.strokeStyle = "black";
	ctx.lineWidth = "3";
	
	//Object
	ctx.fillRect(this.x, this.y, this.width, this.height);
	ctx.strokeRect(this.x, this.y, this.width, this.height);
	
	//Healthbar
	ctx.strokeRect(this.x - 15, this.y - 65, this.width * 2, this.height / 2);
	ctx.fillStyle = "lightgreen";
	ctx.fillRect(this.x - 13, this.y - 63, playerhealth, 11);
	
	//Weapon
	if (facingright == true) {
		ctx.beginPath();
		ctx.moveTo(this.x + 30, this.y + 5);
		ctx.lineTo(this.x + 50, this.y + 5);
		ctx.lineTo(this.x + 50, this.y + 13);
		ctx.lineTo(this.x + 37, this.y + 13);
		ctx.lineTo(this.x + 37, this.y + 21);
		ctx.lineTo(this.x + 30, this.y + 21);
		ctx.closePath();
		ctx.fillStyle = "black";
		ctx.fill();
		}
	else {
		ctx.beginPath();
		ctx.moveTo(this.x, this.y + 5);
		ctx.lineTo(this.x - 20, this.y + 5);
		ctx.lineTo(this.x - 20, this.y + 13);
		ctx.lineTo(this.x - 7, this.y + 13);
		ctx.lineTo(this.x - 7, this.y + 21);
		ctx.lineTo(this.x, this.y + 21);
		ctx.closePath();
		ctx.fillStyle = "black";
		ctx.fill();
		}
		
	//Head
	ctx.beginPath();
	ctx.arc(this.x + 15, this.y - 15, 20, 0, Math.PI * 2);
	ctx.lineWidth = "7";
	ctx.closePath();
	ctx.strokeStyle = "black";
	ctx.fillStyle = "white";
	ctx.stroke();
	ctx.fill();
	ctx.lineWidth = "3";
	
	this.update = function() {
		ctx = myGameArea.context;
		ctx.fillStyle = color;
		
		//Object
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.strokeRect(this.x, this.y, this.width, this.height);
		
		//Healthbar
		ctx.strokeRect(this.x - 15, this.y - 65, this.width * 2, this.height / 2);
		ctx.fillStyle = "white";
		ctx.fillRect(this.x - 13, this.y - 63, 56, 11);
		if (playerhealth > 28) {
			ctx.fillStyle = "lightgreen";
		}
		else if (playerhealth < 28 && playerhealth > 14) {
			ctx.fillStyle = "orange";
		}
		else {
			ctx.fillStyle = "tomato";
		}
		ctx.fillRect(this.x - 13, this.y - 63, playerhealth, 11);
		
		//Weapon
		if (facingright == true) {
			ctx.beginPath();
			ctx.moveTo(this.x + 30, this.y + 5);
			ctx.lineTo(this.x + 50, this.y + 5);
			ctx.lineTo(this.x + 50, this.y + 13);
			ctx.lineTo(this.x + 37, this.y + 13);
			ctx.lineTo(this.x + 37, this.y + 21);
			ctx.lineTo(this.x + 30, this.y + 21);
			ctx.closePath();
			ctx.fillStyle = "black";
			ctx.fill();
		}
		else {
			ctx.beginPath();
			ctx.moveTo(this.x, this.y + 5);
			ctx.lineTo(this.x - 20, this.y + 5);
			ctx.lineTo(this.x - 20, this.y + 13);
			ctx.lineTo(this.x - 7, this.y + 13);
			ctx.lineTo(this.x - 7, this.y + 21);
			ctx.lineTo(this.x, this.y + 21);
			ctx.closePath();
			ctx.fillStyle = "black";
			ctx.fill();
		}
		
		//Head
		ctx.beginPath();
		ctx.arc(this.x + 15, this.y - 15, 20, 0, Math.PI * 2);
		ctx.lineWidth = "7";
		ctx.closePath();
		ctx.strokeStyle = "black";
		ctx.fillStyle = "white";
		ctx.stroke();
		ctx.fill();
		ctx.lineWidth = "3";
		
		//Laser
		if (myGameArea.keys && myGameArea.keys[90] && facingright == true && pause == false) {
			ctx.fillStyle = "red";
			ctx.fillRect(this.x + 50, this.y + 8, 600, 3);
			if (enemyhealth > 0 && myEnemy.x < 570) {
				enemyhealth--;
			}
		}
		else if (myGameArea.keys && myGameArea.keys[90] && facingright == false && pause == false) {
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - 20, this.y + 8, -600, 3);
			if (enemyhealth2 > 0 && myEnemy2.x > 0) {
				enemyhealth2--;
			}
		}
	}
	this.newPos = function() {
		this.x += this.speedX;
	}
}

function enemy(width, height, color, x, y) {
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	ctx = myGameArea.context;
	ctx.fillStyle = color;
	ctx.strokeStyle = "black";
	ctx.lineWidth = "3";
	
	//Object
	ctx.fillRect(this.x, this.y, this.width, this.height);
	ctx.strokeRect(this.x, this.y, this.width, this.height);
	
	//Healthbar
	ctx.strokeRect(this.x - 15, this.y - 65, this.width * 2, this.height / 2);
	ctx.fillStyle = "lightgreen";
	ctx.fillRect(this.x - 13, this.y - 63, enemyhealth, 11);
	
	//Head
	ctx.beginPath();
	ctx.arc(this.x + 15, this.y - 15, 20, 0, Math.PI * 2);
	ctx.lineWidth = "7";
	ctx.closePath();
	ctx.strokeStyle = "black";
	ctx.fillStyle = "white";
	ctx.stroke();
	ctx.fill();
	ctx.lineWidth = "3";
	
	//Knife
	ctx.beginPath();
	ctx.moveTo(this.x - 2, this.y + 5);
	ctx.lineTo(this.x - 10, this.y + 5);
	ctx.lineTo(this.x - 2, this.y + 10);
	ctx.closePath();
	ctx.lineWidth = "7";
	ctx.stroke();
	ctx.fillStyle = "gray";
	ctx.fill();
	ctx.lineWidth = "3";
	
	this.update = function() {
		ctx = myGameArea.context;
		ctx.fillStyle = color;
		
		//Object
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.strokeRect(this.x, this.y, this.width, this.height);
		
		//Healthbar
		ctx.strokeRect(this.x - 15, this.y - 65, this.width * 2, this.height / 2);
		ctx.fillStyle = "white";
		ctx.fillRect(this.x - 13, this.y - 63, 56, 11);
		if (enemyhealth > 28) {
			ctx.fillStyle = "lightgreen";
		}
		else if (enemyhealth < 28 && enemyhealth > 14) {
			ctx.fillStyle = "orange";
		}
		else {
			ctx.fillStyle = "tomato";
		}
		ctx.fillRect(this.x - 13, this.y - 63, enemyhealth, 11);
		
		//Head
		ctx.beginPath();
		ctx.arc(this.x + 15, this.y - 15, 20, 0, Math.PI * 2);
		ctx.lineWidth = "7";
		ctx.closePath();
		ctx.strokeStyle = "black";
		ctx.fillStyle = "white";
		ctx.stroke();
		ctx.fill();
		ctx.lineWidth = "3";
		
		//Knife
		ctx.beginPath();
		ctx.moveTo(this.x - 2, this.y + 5);
		ctx.lineTo(this.x - 10, this.y + 5);
		ctx.lineTo(this.x - 2, this.y + 10);
		ctx.closePath();
		ctx.lineWidth = "7";
		ctx.stroke();
		ctx.fillStyle = "gray";
		ctx.fill();
		ctx.lineWidth = "3";
	}
}

function enemy2(width, height, color, x, y) {
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	ctx = myGameArea.context;
	ctx.fillStyle = color;
	ctx.strokeStyle = "black";
	ctx.lineWidth = "3";
	
	//Object
	ctx.fillRect(this.x, this.y, this.width, this.height);
	ctx.strokeRect(this.x, this.y, this.width, this.height);
	
	//Healthbar
	ctx.strokeRect(this.x - 15, this.y - 65, this.width * 2, this.height / 2);
	ctx.fillStyle = "lightgreen";
	ctx.fillRect(this.x - 13, this.y - 63, enemyhealth2, 11);
	
	//Knife
	ctx.beginPath();
	ctx.moveTo(this.x + 32, this.y + 5);
	ctx.lineTo(this.x + 40, this.y + 5);
	ctx.lineTo(this.x + 32, this.y + 10);
	ctx.closePath();
	ctx.lineWidth = "7";
	ctx.stroke();
	ctx.fillStyle = "gray";
	ctx.fill();
	ctx.lineWidth = "3";
	
	this.update = function() {
		ctx = myGameArea.context;
		ctx.fillStyle = color;
		
		//Object
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.strokeRect(this.x, this.y, this.width, this.height);
		
		//Healthbar
		ctx.strokeRect(this.x - 15, this.y - 65, this.width * 2, this.height / 2);
		ctx.fillStyle = "white";
		ctx.fillRect(this.x - 13, this.y - 63, 56, 11);
		if (enemyhealth2 > 28) {
			ctx.fillStyle = "lightgreen";
		}
		else if (enemyhealth2 < 28 && enemyhealth2 > 14) {
			ctx.fillStyle = "orange";
		}
		else {
			ctx.fillStyle = "tomato";
		}
		ctx.fillRect(this.x - 13, this.y - 63, enemyhealth2, 11);
		
		//Head
		ctx.beginPath();
		ctx.arc(this.x + 15, this.y - 15, 20, 0, Math.PI * 2);
		ctx.lineWidth = "7";
		ctx.closePath();
		ctx.strokeStyle = "black";
		ctx.fillStyle = "white";
		ctx.stroke();
		ctx.fill();
		ctx.lineWidth = "3";
		
		//Knife
		ctx.beginPath();
		ctx.moveTo(this.x + 32, this.y + 5);
		ctx.lineTo(this.x + 40, this.y + 5);
		ctx.lineTo(this.x + 32, this.y + 10);
		ctx.closePath();
		ctx.lineWidth = "7";
		ctx.stroke();
		ctx.fillStyle = "gray";
		ctx.fill();
		ctx.lineWidth = "3";
	}
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 600;
        this.canvas.height = 300;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(updateGameArea, 20);
		window.addEventListener("keydown", function(e) {
			myGameArea.keys = (myGameArea.keys || []);
			myGameArea.keys[e.keyCode] = true;
		})
		window.addEventListener("keyup", function(e) {
			myGameArea.keys[e.keyCode] = false;
		})
    },
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}

function updateGameArea() {
	myGameArea.clear();
	myGamePiece.speedX = 0;
	myGamePiece.speedY = 0;
	if (myGameArea.keys && myGameArea.keys[37] && pause == false) {
		if (myGamePiece.x > 0 && myGamePiece.x > myEnemy2.x + 30) {
			myGamePiece.speedX = -3;
			facingright = false;
		}
	}
	if (myGameArea.keys && myGameArea.keys[39] && pause == false) {
		if (myGamePiece.x < 570 && myGamePiece.x+ 30 < myEnemy.x) {
			myGamePiece.speedX = 3;
			facingright = true;
		}
	}
	if (myGameArea.keys && myGameArea.keys[88]) {
		pause = true;
	}
	if (myGameArea.keys && myGameArea.keys[67]) {
		pause = false;
	}
	if (myGameArea.keys && myGameArea.keys[13]) {
		pause = false;
		document.getElementById("scoreboard").style.opacity = "1";
		document.getElementById("screen").style.display = "none";
	}
	if (enemyhealth <= 0) {
		myEnemy.x = 650;
		score += 10;
		enemyhealth = 56;
	}
	if (enemyhealth2 <= 0) {
		myEnemy2.x = -50;
		score += 10;
		enemyhealth2 = 56;
	}
	if (myEnemy.x> myGamePiece.x + 30 && pause == false) {
		myEnemy.x--;
	}
	if (myEnemy2.x + 30< myGamePiece.x && pause == false) {
		myEnemy2.x++;
	}
	if (bombpos2 < 322 && pause == false) {
		bombpos2 += 2;
	}
	if (bomb2pos2 < 322 && pause == false) {
		bomb2pos2 += 2;
	}
	if (bomb3pos2 < 322 && pause == false) {
		bomb3pos2 += 2;
	}
	if (bombpos2 >= 322) {
		bombpos2 = -72;
		bombpos = Math.floor(Math.random() * (400 - 200)) + 200;
	}
	if (bomb2pos2 >= 322) {
		setTimeout(function(){bomb2pos2 = -25;}, 300);
		bomb2pos = Math.floor(Math.random() * (400 - 200)) + 200;
	}
	if (bomb3pos2 >= 322) {
		setTimeout(function(){bomb3pos2 = -75;}, 300);
		bomb3pos = Math.floor(Math.random() * (400 - 200)) + 200;
	}
	if (bombpos2 >= myGamePiece.y - 50 && bombpos + 20 >= myGamePiece.x && bombpos - 15 < myGamePiece.x + 35 && bombpos2 < 322) {
		if (playerhealth > 0 && pause == false) {
			playerhealth -= 0.5;
		}
	}
	if (bomb2pos2 >= myGamePiece.y - 50 && bomb2pos + 20 >= myGamePiece.x && bomb2pos - 15 < myGamePiece.x + 35 && bomb2pos2 < 322) {
		if (playerhealth > 0 && pause == false) {
			playerhealth -= 0.5;
		}
	}
	if (bomb3pos2 >= myGamePiece.y - 50 && bomb3pos + 20 >= myGamePiece.x && bomb3pos - 15 < myGamePiece.x + 35 && bomb3pos2 < 322) {
		if (playerhealth > 0 && pause == false) {
			playerhealth -= 0.5;
		}
	}
	if (myEnemy.x - 20 <= myGamePiece.x + 30 && pause == false) {
		if (playerhealth > 0) {
			playerhealth -= 0.5;
		}
	}
	if (myEnemy2.x + 50 >= myGamePiece.x) {
		if (playerhealth > 0 && pause == false) {
			playerhealth -= 0.5;
		}
	}
	if (playerhealth <= 1) {
		document.getElementById("scoreboard").style.opacity = "0";
		document.getElementById("screen").innerHTML = "<h1><center>You died<br>Total score: " + score + "<br><br>Press <div class='enterkey'>Enter</div> to reload</center></h1>";
		document.getElementById("screen").style.display = "block";
		pause = true;
		if (myGameArea.keys && myGameArea.keys[13]) {
			score = 0;
			playerhealth = 56;
			document.getElementById("screen").style.display = "none";
			myEnemy.x = 515;
			myEnemy2.x = 55;
			myGamePiece.x = 270;
			playerhealth = 56;
			enemyhealth = 56;
			enemyhealth2 = 56;
			bombpos2 = -25;
			bomb2pos2 = -75;
			bomb3pos2 = -125;
		}
	}
	myGamePiece.newPos();
	myGamePiece.update();
	myEnemy.update();
	myEnemy2.update();
	bomb.update();
	bomb2.update();
	bomb3.update();
	document.getElementById("scoreboard").innerHTML = "Score: " + score;
}