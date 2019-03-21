// var myBirthday = new Date(2019, 7, 22, 0, 0, 0,);
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
// var occassion = document.getElementById("occassion").textContent = "Independence Day";
// document.write(occassion);


var dayOption = "";
for (var i = 1; i < 32; i++) {
	dayOption += "<option>"+i+"</option>";
}

document.getElementById("day").innerHTML = dayOption;

var monthOption = "";
for (var j = 1; j < 13; j++) {
	monthOption += "<option>"+j+"</option>";
}

document.getElementById("month").innerHTML = monthOption;

var yearOption = "";
for (var k = 2019; k < 2099; k++) {
	yearOption += "<option>"+k+"</option>";
}

document.getElementById("year").innerHTML = yearOption;









function countdown(){

	var year = document.getElementById("year").value;
	var month = document.getElementById("month").value;
	var day = document.getElementById("day").value;
	var myBirthday = new Date(year, (month-1), day, 0, 0, 0,);
	var today = new Date().getTime()
	var milliSecLeft = Math.floor((myBirthday - today))
	var secLeft = Math.floor((milliSecLeft)/1000)
	var minLeft = Math.floor((secLeft)/60)
	var hrLeft = Math.floor((minLeft)/60)
	var daysLeft = Math.floor((hrLeft)/24)
	var weeksLeft = Math.floor((daysLeft)/7)
	// var secLeft = Math.floor((myBirthday-today)/1000)
	if(secLeft>0){
		document.getElementById("event").innerHTML= weeksLeft+"weeks || "+daysLeft+" days || "+hrLeft+" hrs || "+minLeft+" mins || "+secLeft+" secs left";
		secLeft--
	}
	else{
		// clearInterval(timer) 
		document.getElementById("event").innerHTML= "Input your next celebration"
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
function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
  } else {
    image.src = "pic_bulbon.gif";
  }
}

// "<br>"

// getElementById('event').innerHTML

function redirect(){
	window.location.href="welcome.html"
}

function back(){
	window.location.href="index.html"
}

// var hrefs = window.location.href;
// var ports = window.location.port;

// document.write(hrefs);
// document.write(ports);
