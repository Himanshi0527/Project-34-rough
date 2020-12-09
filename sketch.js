var dog, happyDog, database, foodS, foodStock;

function preload()
{
  dogimg=loadImage("images/dogImg.png")
  hdog=loadImage("images/dogImg1.png")
  
}

function setup() {
  database = firebase.database();
  console.log(database);
	createCanvas(500, 500);
  dog= createSprite(250,250,20,20);
  dog.addImage("img",dogimg);

  foodStock=database.ref('food');
  foodStock.on("value", readStock)

}


function draw() {  
background (46, 139, 87);

if(keyDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(hdog);

}

  drawSprites();
 text("Note:Press UP_Arrow key to feed Drago milk!")
 fill("pink");


}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
    } else{
      x=x-1
    }
  database.ref('/').update({
    food:x
  })
}

