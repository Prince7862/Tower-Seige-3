class Polygon{
    constructor(x, y,radius) {
        var options = {
            isStatic:false,
            restitution:1.0,
            friction:1,
            density:0.5
        }
        this.polygon = Bodies.circle(x,y,radius,options);
        this.radius = 40
        //this.angle = 40
        this.image = loadImage("Sprites/polygon.png");
        World.add(world,this.polygon);
      }
      display(){
        var angle = this.polygon.angle;
        push();
        translate(this.polygon.position.x, this.polygon.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
      }
}