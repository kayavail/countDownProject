// var myBirthday = new Date(2019, 2, 1, 0, 0, 0,);
// var today = new Date().getTime();
// var milliSecLeft = Math.floor((myBirthday - today))
// var secLeft = Math.floor((milliSecLeft)/1000)
// var minLeft = Math.floor((secLeft)/60)
// var hrLeft = Math.floor((minLeft)/60)
// var daysLeft = Math.floor((hrLeft)/24)
// var weeksLeft = Math.floor((daysLeft)/7)


// document.write(milliSecLeft/60/60/24/7);

// document.write("Seconds to my birthday: "+secLeft+"<br>")
// document.write("Minutes to my birthday: "+minLeft+"<br>")
// document.write("Hours to my birthday: "+hrLeft+"<br>")
// document.write("Days to my birthday: "+daysLeft+"<br>")
// document.write("Weeks to my birthday: "+weeksLeft+"<br>")

function countdown(){
	var myBirthday = new Date(2019, 2, 1, 0, 0, 0,);
var today = new Date().getTime()
var milliSecLeft = Math.floor((myBirthday - today))
var secLeft = Math.floor((milliSecLeft)/1000)
var minLeft = Math.floor((secLeft)/60)
var hrLeft = Math.floor((minLeft)/60)
var daysLeft = Math.floor((hrLeft)/24)
var weeksLeft = Math.floor((daysLeft)/7)
	// var secLeft = Math.floor((myBirthday-today)/1000)
	if(secLeft>0){
		document.getElementById("event").innerHTML= weeksLeft+"Weeks || "+daysLeft+" Days || "+hrLeft+" Hrs || "+minLeft+" Mins || "+secLeft+" Secs";
		secLeft--
	}
	else{
// 		clearInterval(timer)
		document.getElementById("event").innerHTML= "Happy Birthday to you! Momoh, Rahmat Blessing"
	}
	
}
var timer = setInterval(countdown)


function doubleClick(){
	var square = document.getElementById("event").style.backgroundColor = "blue";
}

function reverseColor(){
	var square = document.getElementById("event").style.backgroundColor = "green";
}

function mouseOver(){
	var square = document.getElementById("event").style.backgroundColor = "grey";
}

 "<br>"

// getElementById('event').innerHTML

function redirect(){
	window.location.href="welcome.html"
}

function back(){
	window.location.href="index.html"
}

var hrefs = window.location.href;
var ports = window.location.port;

//document.write(hrefs);
//document.write(ports);
