let a = 400;

let speed = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(254, 213, 49);
  fill(0, 0, 0);
  ellipse(100, a, 100, 100);
  ellipse(290, a, 100, 100);
  a = a - speed;
   if (a < 190 && speed == 2)
    {
      a = 400;
    }
  
    console.log(a);
    
    fill(228, 8, 10);
    rect(1, 1, 399, 120);
    rect(1, 250, 399, 150);
   
  
}