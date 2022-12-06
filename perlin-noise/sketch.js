let xoff1 = 0
let xoff2 = 0
let inc = 0.01
let start = 0;

function setup() {
  // put setup code here
  createCanvas(400, 400)
  // frameRate(2)
}

function draw() {
  background(51)
  // put drawing code here

  // var x = random(width)
  // var x = map(noise(xoff1), 0, 1, 0, width)
  // xoff1 += 0.01
  
  let xoff2 = start
  stroke(0,255,0)
  noFill()
  beginShape()
  for(let i = 0; i < width; i++){
    var y = map(noise(xoff2), 0, 1, 0, width)
    // stroke(255);
    vertex(i, y)
    xoff2 += inc
  }
  endShape()

  start += inc
  // noLoop()

  // ellipse(x, y, 24, 24)
}