var dog ,dogimg;
var happydog;
var database;
var foodS = 20;
var foodStock;




function preload()
{

dogimg = loadImage("images/dogImg.png")
happydog = loadImage("images/dogImg1.png")

}

function setup() {
	createCanvas(500,500);
  
  database = firebase.database();

dog = createSprite(250,250,20,20);
dog.addImage(dogimg);
dog.scale = 0.2;

  foodStock = database.ref('Food');
   foodStock.on('value',readStock)

}


function draw() {  
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW) ){
  writeStock(foodS);
  dog.addImage(happydog);
  
  
  }
 
  drawSprites();

  textSize(15);
  fill("orange")
  text("Food Remaining :"+foodS,180,150)


  textSize(15);
  fill("red");
  text("NOTE:Press up arrow key to feed the dargo milk!",60,50);

}
 
 


function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x 
  })

}


function readStock(data){
foodS = data.val();
}


function update(food){
  var foodIndex = "foodS" - Food; 
  database.ref(playerIndex).set({ Food:food }); 
} 



