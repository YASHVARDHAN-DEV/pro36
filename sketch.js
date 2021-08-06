var dog,sadDog,happyDog;
var database;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock
function feedDog(){
   dog.addImage(happyDog);

   if(foodObj.getFoodStock()<=0){
     foodObj.updateFoodStock(foodObj.getFoodStock()*0);
     
   }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
     
   }

}

//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

//function to add food in stock
function addFoods(){
   food++;
   database.ref('/').update({
     Food:foodS
   }) 
}