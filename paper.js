class paper{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
             
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        this.image= loadImage("paper.png");

        World.add(world, this.body);
    }
      display(){

      if(keyCode ===UP_ARROW){

      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145})

      }
                                                
        var pos =this.body.position;
       
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        //fill("red");
        rect(0, 0, this.width, this.height);
        pop();
      }

     



}