window.onresize = function() {
    setup();
  }
  
  function setup() {
    createCanvas(windowWidth / 2 + 200, 500);
    background(128, 0, 128); // Purple background color (R: 128, G: 0, B: 128)
    cursor('crosshair');
    frameRate(60);
  }
  
  function draw() {
    if (mouseIsPressed && (mouseX > 50 && mouseX < width - 50 && mouseY > 50 && mouseY < height - 50)) {
      fill(173, 216, 230); // Light blue pen color (R: 173, G: 216, B: 230)
    } else {
      noFill();
      noStroke();
    }
    circle(mouseX, mouseY, 30);
  }
  