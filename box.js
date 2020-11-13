class Box{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.visibility = 255, 255, 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }
   
    display(){
      console.log(this.body.speed);
      if(this.body.speed <10){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
     
       
      rect(0,0,this.width, this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      tint(253,this.visiblity);
   
      this.visibility = this.visibility -2;
      pop();
      
    }
  }
  if(keyCode=32){
 
  }
}