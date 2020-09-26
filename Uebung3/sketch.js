function setup() {
  createCanvas(600, 600);

  noStroke();
}

function draw() {
  background(0);
    for (let a = 0; a < width; a = a + 20){

     for (let b = 20; b < width; b = b + 20){
         fill(120, 255, 200, 5);
        rect(a, a, b, 20);

       }

    }
}
