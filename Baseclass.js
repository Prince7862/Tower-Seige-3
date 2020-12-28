class Baseclass{
    constructor(x, y, w, h, angle) {
        var options = {
            'restitution':0.4,
            'friction':1.0,
            'density':1.5
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("Blue")
        rect(this.body, 0, 0, this.width, this.height);
        pop();
      }
}