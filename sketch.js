var car,wall,speed,weight,deformation

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColor="blue";

  wall=createSprite(1500,200,60,200);
  wall.shapeColor=(80,80,80);

  
}

function draw() {
  background(255,255,255);
  
  //car.collide(wall);

  if(wall.x-car.x<wall.width/2+car.width/2&&
     car.x-wall.x<wall.width/2+car.width/2&&
     wall.y-car.y<wall.width/2+car.width/2&&
     car.y-wall.y<wall.width/2+car.width/2){

      car.velocityX=0;

      deformation=0.5*weight*speed*speed/22500;

      if(deformation>180) {
        car.shapeColor="green";
      }

      if(deformation>100&&deformation<180) {
        car.shapeColor="yellow";
      }

      if(deformation<100) {
        car.shapeColor="red";
      }
     }

  drawSprites();
    }