let bgColor;

function setup() {
  createCanvas(777, 777);

  bgColor = color(255);
  background(bgColor);
}

function draw() {
  if (mouseIsPressed) {
    stroke(0);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  if (keyIsPressed) {
    background(bgColor);
  }
}
