const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg;
var randx;

function preload(){
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    

    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    
    randx = Math.random() *1200;
    box1 = new Box(randx,0,5,20);
    //box1.velocityY = 10;
    //box1.lifetime = 100;
    box1.display();
    
    //box1.display();
}