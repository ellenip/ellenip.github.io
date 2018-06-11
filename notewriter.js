var canvas = document.getElementById("thecanvas");
var ctx = canvas.getContext("2d");

var notecolor = "pink";

var written = false;

function draw(){
	if (notecolor == "pink"){
		ctx.fillStyle = "mistyrose";
	}
	else if (notecolor == "blue"){
		ctx.fillStyle = "lavender";
	}
	else if (notecolor == "orange"){
		ctx.fillStyle = "#fff1d8";
	}
	else if (notecolor == "purple"){
		ctx.fillStyle = "#f3e5f5";
	}
	else if (notecolor == "green"){
		ctx.fillStyle = "#e5f8d2";
	}
	ctx.fillRect(0,0,320,300);
	ctx.fillStyle = "black";
	ctx.font = "700 15px Arial";
	ctx.fillStyle = "black";
}

function addText(){
	draw();
	var text = document.getElementById("textinput").value.split('\n');
	for (var i=0;i<text.length;i++) {
		ctx.fillText(text[i],20,35 + i * 20);
	}
	written = true;
}

function clearText(){
	draw();
	written = false;
}

function showNote(){
	document.getElementById("note").style.opacity = "1";
	document.getElementById("note").style.marginTop = "320px";
}

function hideNote(){
	document.getElementById("note").style.opacity = "0";
	document.getElementById("note").style.marginTop = "310px";
}

function orange(){
	notecolor = "orange";
	draw();
	if (written == true){
		addText();
	}
}

function blue(){
	notecolor = "blue";
	draw();
	if (written == true){
		addText();
	}
}

function purple(){
	notecolor = "purple";
	draw();
	if (written == true){
		addText();
	}
}

function green(){
	notecolor = "green";
	draw();
	if (written == true){
		addText();
	}
}

function pink(){
	notecolor = "pink";
	draw();
	if (written == true){
		addText();
	}
}