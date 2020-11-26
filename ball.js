class Ball{
    constructor(x,y,radius){
        var options={
            restitution:0.5,
            friction:0.8,
            density:5
        }
        this.body=Matter.Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;        
        push()
        fill("pink");
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

}