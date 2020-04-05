var count = 0;
var q = 0;
var wordColor = "";
var num = 0;
var word = document.getElementsByClassName("word");
var option = document.getElementsByClassName("options");
var startButton = document.getElementsByClassName("start");
var results = document.getElementById("results");
var title = document.getElementById("title");
var desc = document.getElementById("desc");
var scores = []; 

function resetOptions(){
	var i = 0;
	while (i < 6){
		option[i].style.backgroundColor = "black";
		i++;
	}
}

function endGame(){
	scores.push(count);
	var j = 0;
	var best = scores[j];
	while (j < scores.length){
		if (scores[j] < best){
			best = scores[j];
		}
		j++;
	}
	var i = 0;
	while (i < 6){
		option[i].style.display = "none";
		i++
	}
	results.innerHTML = "Finished!<br>Your time was " + count + " seconds!<br>Best time: <div class='best'>" + best + " seconds</div>";
	startButton[0].style.display = "block";
	startButton[0].innerHTML = "Try Again";
	results.style.display = "block";
	document.getElementById("blocker").style.display = "block";
}

function randomize(min, max){
	num = Math.floor(Math.random() * (max - min)) + min;
	var num2 = Math.floor(Math.random() * (max - min)) + min;
	if (num2 == 0){
		word[num].style.color = "yellow";
		wordColor = "yellow";
	} 
	if (num2 == 1){
		word[num].style.color = "red";
		wordColor = "red";
	}
	if (num2 == 2){
		word[num].style.color = "blue";
		wordColor = "blue";
	}
	if (num2 == 3){
		word[num].style.color = "lightgreen";
		wordColor = "green";
	}
	if (num2 == 4){
		word[num].style.color = "magenta";
		wordColor = "purple";
	}
	if (num2 == 5){
		word[num].style.color = "orange";
		wordColor = "orange";
	}
	word[num].style.display = "block";
}

function myTimer(){
	q = 0;
	count = 0;
	startButton[0].style.display = "none";
	results.style.display = "none";
	title.style.display = "none";
	desc.style.display = "none";
	document.getElementById("blocker").style.display = "none";
	var i = 0;
	while (i < 6){
		option[i].style.display = "inline-block";
		i++;
	}
	randomize(0,6);
	var interv = setInterval(function(){
		if (q < 20){
		count += 1;
		}
		else{
			clearInterval(interv);
			count = 0;
		}
		document.getElementById("count").innerHTML = count;
	}, 1000);
}

function select(color){
	if (color == "yellow"){
		if (wordColor == "yellow"){
			resetOptions();
			word[num].style.display = "none";
			q++;
			if (q < 20){
				randomize(0,6);
			}
			else {
				endGame();
			}
		}
		else {
			option[0].style.backgroundColor = "red";
		}
	}
	if (color == "blue"){
		if (wordColor == "blue"){
			resetOptions();
			word[num].style.display = "none";
			q++;
			if (q < 20){
				randomize(0,6);
			}
			else {
				endGame();
			}
		}
		else {
			option[1].style.backgroundColor = "red";
		}
	}
	if (color == "red"){
		if (wordColor == "red"){
			resetOptions();
			word[num].style.display = "none";
			q++;
			if (q < 20){
				randomize(0,6);
			}
			else {
				endGame();
			}
		}
		else {
			option[2].style.backgroundColor = "red";
		}
	}
	if (color == "green"){
		if (wordColor == "green"){
			resetOptions();
			word[num].style.display = "none";
			q++;
			if (q < 20){
				randomize(0,6);
			}
			else {
				endGame();
			}
		}
		else {
			option[3].style.backgroundColor = "red";
		}
	}
	if (color == "purple"){
		if (wordColor == "purple"){
			resetOptions();
			word[num].style.display = "none";
			q++;
			if (q < 20){
				randomize(0,6);
			}
			else {
				endGame();
			}
		}
		else {
			option[4].style.backgroundColor = "red";
		}
	}
	if (color == "orange"){
		if (wordColor == "orange"){
			resetOptions();
			word[num].style.display = "none";
			q++;
			if (q < 20){
				randomize(0,6);
			}
			else {
				endGame();
			}
		}
		else {
			option[5].style.backgroundColor = "red";
		}
	}
}

	