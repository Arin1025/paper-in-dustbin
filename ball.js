class Ball{
    constructor(x, y){
    var option={
         restituion:0.3,
         isStatic:false,
         friction:0.5,
         density:1.2
    }
    this.body=Bodies.rectangle(x, y, 50, 50);
    this.width=width;
    World.add(world, this.body);
    }
    display(){
    Push();
    translate(this.body.position.x, this.body.position.y)
    fill("purple");
    pop();
    }    
}