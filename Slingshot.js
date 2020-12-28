class Slingshot{
    constructor(BodyA,PointB){
        var options = {
            bodyA:BodyA,
            pointB:PointB,
            stiffness:0.1,
            length:0.50
        }
        this.pointB = this.pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);

    }

    attach(body){
        this.sling.bodyA = body;
    }

    
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            stroke("Black");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
            
           
        }
    }
