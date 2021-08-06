class Food{
    constructor(){
     this.foodStock=0;
     this.lastFed;
     this.image = loadImage("Milk.png");

    }

  updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }

  getFedTime(lastFed){
      this.lastFed = lastFed;
  }

    deductFood(){
        if(this.foodStock > 0){
            this.foodStock = this.foodStock-1;
        }
    }

   getFoodStock(){
       return this.foodStock;
   }
   
   updateFedTime(){
    fedTime = database.ref('FeedTime');
    fedTime.on("value",function(data){
        lastFed = data.val();
    });
   }

  
display(){
    var x = 80, y = 100;
    
    this.imageMode(CENTER);
    image(this.image,700,200,80,80);

    if(this.foodStock!=0){
        for(var i = 0;i<this.foodStock;i++){
            if(i%10==0){
                x= 80;
                y = y+50;
            }
        image  (this.image,x,y,50,50);
        x = x+30
        }
    }
  }

  draw(){
      fill(255,255,254);
      textSize(20);
      if(lastFed>=12){
         text("Last Feed :"+ this.lastFed % 12 + "PM",350,30);
      }else if(this.lastFed == 0){
        text("Last Feed : 12AM",350,30); 
      }else{
        text("Last Feed :"+ this.lastFed + "AM",350,30);
      }
  }

}