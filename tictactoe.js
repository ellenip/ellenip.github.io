var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");

var score1 = parseInt(document.getElementById("score1").innerHTML);
var score2 = parseInt(document.getElementById("score2").innerHTML);

var won = false;
var lost = false;

function addX(num){
	switch (num){
		case 1:
			if (one.innerHTML != "O"){
				one.innerHTML = "X";
				if (two.innerHTML == "X" && three.innerHTML == "X"){
					winpath("1", "2", "3");
					win();
				}
				else if (four.innerHTML == "X" && seven.innerHTML == "X"){
					winpath("1", "4", "7");
					win();
				}
				else if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && four.innerHTML != "" && five.innerHTML != "" && six.innerHTML != "" && seven.innerHTML != "" && eight.innerHTML != "" && nine.innerHTML != ""){
					tie();
				}
				else {
					remove(choices, "1");
					setTimeout(addO, 500);
				}
			}
			break;
		case 2:
			if (two.innerHTML != "O"){
				two.innerHTML = "X";
				if (one.innerHTML == "X" && three.innerHTML == "X"){
					winpath("2", "1", "3");
					win();
				}
				else if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && four.innerHTML != "" && five.innerHTML != "" && six.innerHTML != "" && seven.innerHTML != "" && eight.innerHTML != "" && nine.innerHTML != ""){
					tie();
				}
				else {
					remove(choices, "2");
					setTimeout(addO, 500);
				}
			}
			break;
		case 3:
			if (three.innerHTML != "O"){
				three.innerHTML = "X";
				if (one.innerHTML == "X" && two.innerHTML == "X"){
					winpath("3", "1", "2");
					win();
				}
				else if (six.innerHTML == "X" && nine.innerHTML == "X"){
					winpath("3", "6", "9");
					win();
				}
				else if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && four.innerHTML != "" && five.innerHTML != "" && six.innerHTML != "" && seven.innerHTML != "" && eight.innerHTML != "" && nine.innerHTML != ""){
					tie();
				}
				else {
					remove(choices, "3");
					setTimeout(addO, 500);
				}
			}
			break;
		case 4:
			if (four.innerHTML != "O"){
				four.innerHTML = "X";
				if (one.innerHTML == "X" && seven.innerHTML == "X"){
					winpath("4", "1", "7");
					win();
				}
				else if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && four.innerHTML != "" && five.innerHTML != "" && six.innerHTML != "" && seven.innerHTML != "" && eight.innerHTML != "" && nine.innerHTML != ""){
					tie();
				}
				else {
					remove(choices, "4");
					setTimeout(addO, 500);
				}
			}
			break;
		case 5:
			if (five.innerHTML != "O"){
				five.innerHTML = "X";
				remove(choices, "5");
				setTimeout(addO, 500);
			}
			break;
		case 6:
			if (six.innerHTML != "O"){
				six.innerHTML = "X";
				if (three.innerHTML == "X" && nine.innerHTML == "X"){
					winpath("6", "3", "9");
					win();
				}
				else if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && four.innerHTML != "" && five.innerHTML != "" && six.innerHTML != "" && seven.innerHTML != "" && eight.innerHTML != "" && nine.innerHTML != ""){
					tie();
				}
				else {
					remove(choices, "6");
					setTimeout(addO, 500);
				}
			}
			break;
		case 7:
			if (seven.innerHTML != "O"){
				seven.innerHTML = "X";
				if (one.innerHTML == "X" && four.innerHTML == "X"){
					winpath("7", "1", "4");
					win();
				}
				else if (eight.innerHTML == "X" && nine.innerHTML == "X"){
					winpath("7", "8", "9");
					win();
				}
				else if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && four.innerHTML != "" && five.innerHTML != "" && six.innerHTML != "" && seven.innerHTML != "" && eight.innerHTML != "" && nine.innerHTML != ""){
					tie();
				}
				else {
					remove(choices, "7");
					setTimeout(addO, 500);
				}
			}
			break;
		case 8:
			if (eight.innerHTML != "O"){
				eight.innerHTML = "X";
				if (seven.innerHTML == "X" && nine.innerHTML == "X"){
					winpath("8", "7", "9");
					win();
				}
				else if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && four.innerHTML != "" && five.innerHTML != "" && six.innerHTML != "" && seven.innerHTML != "" && eight.innerHTML != "" && nine.innerHTML != ""){
					tie();
				}
				else {
					remove(choices, "8");
					setTimeout(addO, 500);
				}
			}
			break;
		case 9:
			if (nine.innerHTML != "O"){
				nine.innerHTML = "X";
				if (seven.innerHTML == "X" && eight.innerHTML == "X"){
					winpath("9", "7", "8");
					win();
				}
				else if (three.innerHTML == "X" && six.innerHTML == "X"){
					winpath("9", "3", "6");
					win();
				}
				else if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && four.innerHTML != "" && five.innerHTML != "" && six.innerHTML != "" && seven.innerHTML != "" && eight.innerHTML != "" && nine.innerHTML != ""){
					tie();
				}
				else {
					remove(choices, "9");
					setTimeout(addO, 500);
				}
			}
			break;
	}
}

var choices = ["1", "2", "3", "4", "6", "7", "8", "9"];

function addO(start){
	if (start == "yes"){
		five.innerHTML = "O";
	}
	else {
		var n = choices[Math.floor(Math.random() * choices.length)];
		document.getElementById(n).innerHTML = "O";
		if (n == "1"){
			if (two.innerHTML == "O" && three.innerHTML == "O"){
				losepath("1", "2", "3");
				lose();
			}
			else if (five.innerHTML == "O" && nine.innerHTML == "O"){
				losepath("1", "5", "9");
				lose();
			}
			else if (four.innerHTML == "O" && seven.innerHTML == "O"){
				losepath("1", "4", "7");
				lose();
			}
			else if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && four.innerHTML != "" && five.innerHTML != "" && six.innerHTML != "" && seven.innerHTML != "" && eight.innerHTML != "" && nine.innerHTML != ""){
				tie();
			}
		}
		if (n == "2"){
			if (one.innerHTML == "O" && three.innerHTML == "O"){
				losepath("2", "1", "3");
				lose();
			}
			else if (five.innerHTML == "O" && eight.innerHTML == "O"){
				losepath("2", "5", "8");
				lose();
			}
			else if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && four.innerHTML != "" && five.innerHTML != "" && six.innerHTML != "" && seven.innerHTML != "" && eight.innerHTML != "" && nine.innerHTML != ""){
				tie();
			}
		}
		if (n == "3"){
			if (one.innerHTML == "O" && two.innerHTML == "O"){
				losepath("3", "1", "2");
				lose();
			}
			else if (six.innerHTML == "O" && nine.innerHTML == "O"){
				losepath("3", "6", "9");
				lose();
			}
			else if (five.innerHTML == "O" && seven.innerHTML == "O"){
				losepath("3", "5", "7");
				lose();
			}
			else if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && four.innerHTML != "" && five.innerHTML != "" && six.innerHTML != "" && seven.innerHTML != "" && eight.innerHTML != "" && nine.innerHTML != ""){
				tie();
			}
		}
		if (n == "4"){
			if (one.innerHTML == "O" && seven.innerHTML == "O"){
				losepath("4", "1", "7");
				lose();
			}
			else if (five.innerHTML == "O" && six.innerHTML == "O"){
				losepath("4", "5", "6");
				lose();
			}
			else if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && four.innerHTML != "" && five.innerHTML != "" && six.innerHTML != "" && seven.innerHTML != "" && eight.innerHTML != "" && nine.innerHTML != ""){
				tie();
			}
		}
		if (n == "6"){
			if (four.innerHTML == "O" && five.innerHTML == "O"){
				losepath("6", "4", "5");
				lose();
			}
			else if (three.innerHTML == "O" && nine.innerHTML == "O"){
				losepath("6", "3", "9");
				lose();
			}
			else if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && four.innerHTML != "" && five.innerHTML != "" && six.innerHTML != "" && seven.innerHTML != "" && eight.innerHTML != "" && nine.innerHTML != ""){
				tie();
			}
		}
		if (n == "7"){
			if (one.innerHTML == "O" && four.innerHTML == "O"){
				losepath("7", "1", "4");
				lose();
			}
			else if (eight.innerHTML == "O" && nine.innerHTML == "O"){
				losepath("7", "8", "9");
				lose();
			}
			else if (five.innerHTML == "O" && three.innerHTML == "O"){
				losepath("7", "5", "3");
				lose();
			}
			else if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && four.innerHTML != "" && five.innerHTML != "" && six.innerHTML != "" && seven.innerHTML != "" && eight.innerHTML != "" && nine.innerHTML != ""){
				tie();
			}
		}
		if (n == "8"){
			if (seven.innerHTML == "O" && nine.innerHTML == "O"){
				losepath("8", "7", "9");
				lose();
			}
			else if (five.innerHTML == "O" && two.innerHTML == "O"){
				losepath("8", "5", "2");
				lose();
			}
			else if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && four.innerHTML != "" && five.innerHTML != "" && six.innerHTML != "" && seven.innerHTML != "" && eight.innerHTML != "" && nine.innerHTML != ""){
				tie();
			}
		}
		if (n == "9"){
			if (seven.innerHTML == "O" && eight.innerHTML == "O"){
				losepath("9", "7", "8");
				lose();
			}
			else if (three.innerHTML == "O" && six.innerHTML == "O"){
				losepath("9", "3", "6");
				lose();
			}
			else if (one.innerHTML == "O" && five.innerHTML == "O"){
				losepath("9", "1", "5");
				lose();
			}
			else if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && four.innerHTML != "" && five.innerHTML != "" && six.innerHTML != "" && seven.innerHTML != "" && eight.innerHTML != "" && nine.innerHTML != ""){
				tie();
			}
		}
		remove(choices, n);
	}
}

function win(){
	won = true;
	document.getElementById("text").innerHTML = "You win!";
	score2++;
	score2 = score2.toString();
	document.getElementById("score2").innerHTML = score2;
	setTimeout(clear, 3000);
}

function winpath(x1, x2, x3){
	document.getElementById(x1).style.background= "lightgreen";
	document.getElementById(x2).style.background = "lightgreen";
	document.getElementById(x3).style.background = "lightgreen";
}

function lose(){
	lost = true;
	document.getElementById("text").innerHTML = "You lose!";
	score1++;
	score1 = score1.toString();
	document.getElementById("score1").innerHTML = score1;
	setTimeout(clear, 3000);
}

function losepath(x1, x2, x3){
	document.getElementById(x1).style.background= "#ff9999";
	document.getElementById(x2).style.background = "#ff9999";
	document.getElementById(x3).style.background = "#ff9999";
}

function tie(){
	document.getElementById("text").innerHTML = "It's a tie!";
	setTimeout(clear, 3000);
}

function remove(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

function clear(){
	one.innerHTML = "";
	two.innerHTML = "";
	three.innerHTML = "";
	four.innerHTML = "";
	five.innerHTML = "";
	six.innerHTML = "";
	seven.innerHTML = "";
	eight.innerHTML = "";
	nine.innerHTML = "";
	one.style.background = "transparent";
	two.style.background = "transparent";
	three.style.background = "transparent";
	four.style.background = "transparent";
	five.style.background = "transparent";
	six.style.background = "transparent";
	seven.style.background = "transparent";
	eight.style.background = "transparent";
	nine.style.background = "transparent";
	choices = ["1", "2", "3", "4", "6", "7", "8", "9"];
	won = false;
	lost = false;
	document.getElementById("text").innerHTML = "Start!";
	setTimeout(function(){five.innerHTML = "O";}, 500);
}

function reset(){
	one.innerHTML = "";
	two.innerHTML = "";
	three.innerHTML = "";
	four.innerHTML = "";
	five.innerHTML = "";
	six.innerHTML = "";
	seven.innerHTML = "";
	eight.innerHTML = "";
	nine.innerHTML = "";
	one.style.background = "transparent";
	two.style.background = "transparent";
	three.style.background = "transparent";
	four.style.background = "transparent";
	five.style.background = "transparent";
	six.style.background = "transparent";
	seven.style.background = "transparent";
	eight.style.background = "transparent";
	nine.style.background = "transparent";
	choices = ["1", "2", "3", "4", "6", "7", "8", "9"];
	document.getElementById("score1").innerHTML = "0";
	document.getElementById("score2").innerHTML = "0";
	score1 = 0;
	score2 = 0;
	won = false;
	lost = false;
	document.getElementById("text").innerHTML = "Start!";
	setTimeout(addO, 500, 'yes');
}