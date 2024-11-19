//Basic Template for p5 projects
//Antti Hietaniemi 19.11.2024
//For the Aalto ARTS course Creative Coding for Visual Communication

//===============================================
//GLOBAL VARIABLES

let sketchName = "Basic P5 Template";
let centerH,centerV;
let arrayColumns,arrayRows,cellWidth;



//===============================================
//SETUP
function setup() {
  createCanvas(windowWidth,windowWidth*0.563);
  
  //Initialize variables
  centerH=width/2;
  centerV=height/2;
  
}

//===============================================
//DRAW
function draw() {
  background(0,0,0,10);
  fill(200,0,0);
  circle(centerH,centerV,100);
}

//===============================================
//RESIZE

function windowResized(){

  resizeCanvas(windowWidth,windowWidth*0.563);
  centerH = width/2;
  centerV = height/2;

}

//===============================================
//SCREENSHOT
//Click on the canvas to save an image to the desktop
function mouseClicked(){

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height)
    saveCanvas(sketchName,'png');

}