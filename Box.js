class Box{
constructor(x,y,w,h){
    var options = {
        restitution: 0.4,
        density:1,
        friction:1.5
    }
    this.image = loadImage("Sprites/rectangle.png")
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.width = w
    this.height = h
    World.add(world,this.body);
    this.visibility = 255;
}
display(){
    
    if(this.body.speed < 5){
        
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("Blue")
        imageMode(CENTER);
        image(this.image,0,0,this.width+30,this.height+10);
        pop();
    }
    else{
       World.remove(world,this.body);
       push();
       this.visibility = this.visibility - 5;
       tint(255,this.visibility);
       image(this.image,this.body.position.x,this.body.position.y,this.width + 20, this.height + 10);
       pop();

    }
    
}
score(){
    if(this.visibility < 0 && this.visibility >= -150){
        score++
    }
}
}