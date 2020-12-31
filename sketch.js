const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var drop,man
var drops=[];
var maxDrops=100;
var thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame=0;
var rand,thunder;

function preload(){
  thunder1=loadImage('1.png');
  thunder2=loadImage('2.png');
  thunder3=loadImage('3.png');
  thunder4=loadImage('4.png');
}

function setup(){
    createCanvas(400,700)
    engine = Engine.create();
    world = engine.world;
    drop=new Drop(250,30);
    man = new Umbrella(250,400,50,50);

    if(frameCount % 150 === 0){
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400),random(0,400)))
    }

    thunder = createSprite(random(10,370), random(10,30), 10, 10);
}  
}

function draw(){
    Engine.update(engine);
    background("black")
    //drop.display();
    //man.display();

    rand=Math.round(random(1,4))
    thunderCreatedFrame=frameCount;
    thunder = createSprite(random(10,370), random(10,30), 10, 10);
    if(frameCount%80===0){
    switch (rand) {
        case 1:thunder.addImage(thunder1);           
            break;
        case 2:thunder.addImage(thunder2);           
            break;
        case 3:thunder.addImage(thunder3);           
            break;
        case 4:thunder.addImage(thunder4);           
            break;        
    
        default:
            break;
    }
    thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }
    man.display();
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY();
    }

    drawSprites();
}   