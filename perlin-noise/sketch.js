// let xoff1 = 0
// let xoff2 = 0
let inc = 0.01;
let w = 1


function setup() {
  // put setup code here
  createCanvas(200, 200);
  pixelDensity(1);

  // frameRate(2)
}

function draw() {
  // background(51)

  let yoff = 0
  for (let y = 0; y < width; y++) {
    let xoff = 0;
    for (let x = 0; x < height; x++) {
      // let index = (x + y * width) * 4;
      noStroke()
      let r = noise(xoff, yoff) * 255
      fill(r, r, r, r)
      rect(x * w, y * w, w, w);
      xoff += inc;
    }
    yoff += inc;
  }


}