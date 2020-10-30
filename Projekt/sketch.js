
//Input Element
let key='06e280b15621fb57f14de8e91c05e79e';
let input, button;

// var gui;

var punktexpander = 20;
var punktexpanderMin = 1;
var punktexpanderMax = 200;
var punktexpanderStep = 0.01;
var angle = 0;

var circules = 4;
var circulesMin = 4;
var circulesMax = 32;
var circulesStep = 1;

var drehung = 0.01;
var drehungMin = 0.01;
var drehungMax = 0.1;
var drehungStep = 0.01;

const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2;

var temperature;




function setup() {
	createCanvas(windowWidth, windowHeight);
	let url = 'https://api.weatherstack.com/current?access_key='+key+'&query=Zürich'; //Achtung gratis key unterstützt SSL nicht
  loadJSON(url, gotWeather);


	rectMode(CENTER);
	//input
	//input ende
  noStroke();

  //  sliderRange(0, 50, 1)
  //  gui = createGui('GUI');
  //  gui.addGlobals ('punktexpander','circules');
    b1 = color(255,235,0);
    b2 = color(255,120,0);

    noStroke();



		//Eingabe Button
		input = createInput();
    input.position(width/2-150, 50);
		input.style('color:#fff; background-color:rgb(255,255,255,0.3); padding: 16px; border:none; border-radius: 12px; font-size:20px; width: 300px; font-weight:bold;');

    button=createButton('Update');
    button.position(width/2+95, 50);
    button.mousePressed(reloadJson);
		button.style('color:#FFC700; background-color:#fff; padding: 18px; border:none; border-radius: 12px; font-size:16px;');


}





function gotWeather(weather) {
    // Get the wind speed in km
    var windspeed = weather.current.wind_speed; // Angaben in km!
		temperature = weather.current.temperature;
		var wettertext = weather.current.weather_descriptions;
		var city = weather.location.name;
		var country = weather.location.country;
		circules = map(windspeed, 0, 50, 4, 32);
		circules = (Math.round(circules));
		punktexpander = map(windspeed, 0, 50, 50, 10);
		drehung = map(windspeed, 0, 100, 0.05, 2);

		console.log(windspeed);
		console.log(punktexpander);
		console.log(circules);
		console.log(drehung);
		console.log(temperature);
		console.log(wettertext);
		console.log(city);
		console.log(country);

		document.getElementById("temperature").innerHTML = temperature;
		document.getElementById("wettertext").innerHTML = wettertext;
		document.getElementById("windspeed").innerHTML = windspeed;
		document.getElementById("city").innerHTML = city;
		document.getElementById("country").innerHTML = country;

		if (temperature <= 0) {
			document.getElementById("container").style.background = "linear-gradient(#0199FF, #023EFE)";
		}

		else if (temperature >= 30) {
			document.getElementById("container").style.background = "linear-gradient(#FF7401, #FE4D02)";
		}

		else {
			document.getElementById("container").style.background = "linear-gradient(#FFCA00, #FF9002)";
		}


}









function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }

}


function draw(){
		if (temperature <= 0) {
			b1 = color(0,200,255);
	    b2 = color(3,24,254);
		}
		else if (temperature >= 30){
			b1 = color(255,143,0);
	    b2 = color(254,51,3);
		}
		else {
		b1 = color(255,235,0);
    b2 = color(255,120,0);
	}

  setGradient(0, 0, width, height, b1, b2, Y_AXIS);

  var punktgroesse = 1;

  angle = angle - drehung;

	translate(width/2, height/2);

  rotate(radians(angle))

for (var j = 1; j <= 60; j += 1) {
  let x = (10 + punktexpander) * Math.pow(1.1, j)

	for (var i = 0; i < circules; i++) {
		push();
		rotate(TWO_PI * i / circules);
    fill(255);
    noStroke();
		ellipse(x, 0,punktgroesse ,punktgroesse );
		pop();
	}

  rotate(360 / (circules/2));
  punktgroesse = punktgroesse * 1.1;
  }

}




function reloadJson(){
    // reload JSon kreiert eine neue url für die API mit dem Ort, den die User eingegeben haben

    let ort = input.value();
    let url = 'http://api.weatherstack.com/current?access_key='+key+'&query='+ort;

    // dann lädt die Funktion gotWeather diese neuen Daten
    loadJSON(url, gotWeather);
}
