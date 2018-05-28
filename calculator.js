function num(number){
	var display = document.getElementById("display").innerHTML;
	document.getElementById("display").innerHTML = display + number;
}
function clearScreen(){
	document.getElementById("display").innerHTML = "";
}
function Add(){
	var display = document.getElementById("display").innerHTML;
	document.getElementById("display").innerHTML = display + "+";
}
function Subtract(){
	var display = document.getElementById("display").innerHTML;
	document.getElementById("display").innerHTML = display + "-";
}
function Multiply(){
	var display = document.getElementById("display").innerHTML;
	document.getElementById("display").innerHTML = display + "x";
}
function Divide(){
	var display = document.getElementById("display").innerHTML;
	document.getElementById("display").innerHTML = display + "÷";
}
function Evaluate(){
	var equation = document.getElementById("display").innerHTML;
	equation = equation.replace(/x/gi, "*");
	equation = equation.replace(/÷/gi, "/");
	var result = eval(equation);
	document.getElementById("display").innerHTML = result;
}