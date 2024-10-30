let xBolinha=300;
let yBolinha=200;
let diametroBolinha=20;
let raio=diametroBolinha/2;
let velocidadexBolinha=2;
let velocidadeyBolinha=2;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBolinha, yBolinha, diametroBolinha);
  xBolinha+=velocidadexBolinha;
  yBolinha+=velocidadeyBolinha;
if (xBolinha>width||xBolinha<0){
    velocidadexBolinha*=-1;}
if (yBolinha>height||yBolinha<0){
    velocidadeyBolinha*=-1;} 
