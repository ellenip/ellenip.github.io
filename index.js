var open1 = false;

function seeProjects(){
	if (open1 == false){
		document.getElementById("table").style.display = "table";
		document.getElementById("projectslist").style.height="180px";
		document.getElementById("projectslist").style.overflow="scroll";
		open1 = true;
		document.getElementsByClassName("button")[0].innerHTML = "Hide Projects (-)";
	}
	else {
		document.getElementById("table").style.display= "none";
		open1 = false;
		document.getElementsByClassName("button")[0].innerHTML = "Show Projects (+)";
		document.getElementById("projectslist").style.height="auto";
		document.getElementById("projectslist").style.overflow="auto";
	}
}

var open2 = false;

function seeContacts(){
	if (open2 == false){
		document.getElementsByClassName("contacts")[0].style.display="block";
		open2 = true;
		document.getElementsByClassName("button")[1].innerHTML = "Hide Contact Info (-)";
	}
	else {
		document.getElementsByClassName("contacts")[0].style.display="none";
		open2 = false;
		document.getElementsByClassName("button")[1].innerHTML = "Show Contact Info (+)";
	}
}
