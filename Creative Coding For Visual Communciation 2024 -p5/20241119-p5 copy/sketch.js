//Basic Template for p5 projects
//Antti Hietaniemi 19.11.2024
//For the Aalto ARTS course Creative Coding for Visual Communication

//===============================================
//GLOBAL VARIABLES

let sketchName = "More slider fun";
// let centerH,centerV;
// let arrayColumns,arrayRows,cellWidth;
let elementWidth;

let slider,label;


//===============================================
//SETUP
function setup() {
  //Set the aspect ratio of canvas to 16:9
  createCanvas(windowWidth,windowWidth*0.563);
  
  //Initialize variables
  centerH=width/2;
  centerV=height/2;
  
  elementWidth = 100;
  slider = createSlider(0,255);
  slider.position(10,10);
  label = createP("Hello");
  label.position(20,30);
}

//===============================================
//DRAW 
function draw() {
  let val = slider.value();
  background(255,0,0);
  fill(200,0,0);
  circle(centerH,centerV,elementWidth);
  label.html("Value is:" +val);

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
  if (mouseX > centerH-elementWidth/2 && mouseX < centerH+elementWidth/2 && mouseY > centerV-elementWidth/2 && mouseY < centerV+elementWidth/2)
    saveCanvas(sketchName,'png');
}