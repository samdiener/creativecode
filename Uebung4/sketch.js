var gui;

var anz = 600;
var distanz = 300;
var negativ = -300;


function setup() {
  createCanvas(windowWidth, windowHeight);
  var gui = createGui('My awesome GUI');
  gui.addGlobals ('distanz');



  // only call draw when then gui is changed
  noLoop();
  noStroke();
}

function draw() {
  strokeWeight(2);
  background(255);


  fill(200,200,200);
  ellipse(width/2+distanz, height/2+distanz, 95, 95);
  ellipse(width/2+distanz+47, height/2+distanz+21, 95, 95);
  ellipse(width/2+distanz+59, height/2+distanz-28, 95, 95);
  ellipse(width/2+distanz+106, height/2+distanz-28, 66, 66);
  ellipse(width/2+distanz+107, height/2+distanz+19, 95, 95);

  fill(200,200,200);
  ellipse(width/2+distanz, height/2, 95, 95);
  ellipse(width/2+distanz+47, height/2+21, 95, 95);
  ellipse(width/2+distanz+59, height/2-28, 95, 95);
  ellipse(width/2+distanz+106, height/2-28, 66, 66);
  ellipse(width/2+distanz+107, height/2+19, 95, 95);

    fill(200,200,200);
    ellipse(width/2-distanz, height/2-distanz, 95, 95);
    ellipse(width/2-distanz+47, height/2-distanz+21, 95, 95);
    ellipse(width/2-distanz+59, height/2-distanz-28, 95, 95);
    ellipse(width/2-distanz+106, height/2-distanz-28, 66, 66);
    ellipse(width/2-distanz+107, height/2-distanz+19, 95, 95);


    fill(255,255,0)
    ellipse(width/2, height/2, 200, 200);
  // for (let i = 1; i <= anz; i= i + 40) {
  //  fill(200,200,200);
  //  ellipse(width/2+distanz, height/2+distanz, 100, 100);
  //}
}
