var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,bottom,boxLeft,boxRight
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-50, width,5);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 5 , {isStatic:true} );
	 World.add(world, ground);
	
	 console.log(ground)
	//bottom=new sides(width/2,640,200,20, {isStatic:true} );
	//boxLeft=new sides(300,600,20,100, {isStatic:true} )
	//boxRight=new sides(500,600,20,100, {isStatic:true} )

	//console.log(bottom)
	box=new sides();
	//bottom.color="red";
	//boxLeft.color="red";
	//boxRight.color="red";
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //bottom.display();
  //boxLeft.display();
  //boxRight.display();
  box.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



