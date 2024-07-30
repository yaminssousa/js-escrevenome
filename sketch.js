function setup() {
    createCanvas(600, 600);
    background("rgb(244,195,244)")
  }
  
  function draw() {
    stroke("rgb(170,133,170)");
    fill("rgb(188,188,244)");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  