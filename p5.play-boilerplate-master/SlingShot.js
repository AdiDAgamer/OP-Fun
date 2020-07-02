class SlingShot
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 2
        }
        this.sling1 = loadImage("animations/sling1.png");
        this.sling2 = loadImage("animations/sling2.png");
        this.sling3 = loadImage("animations/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly()
    {
        this.sling.bodyA = null;
    }

    attach(body)
    {
        this.sling.bodyA = body;
    }

    display()
    {
        push();
        if(this.sling.bodyA)
        {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x < 140)
            {
                strokeWeight(6);
                line(pointA.x, pointA.y, pointB.x + 25, pointB.y);
                line(pointA.x, pointA.y, pointB.x - 25, pointB.y);
                image(this.sling3, pointA.x - 25, pointA.y, 25,30);
            }

            else
            {
                strokeWeight(6);
                line(pointA.x, pointA.y, pointB.x + 25, pointB.y);
                line(pointA.x, pointA.y, pointB.x - 25, pointB.y);
                image(this.sling3, pointA.x + 25, pointA.y, 25, 30);
            }
        }
        pop();
        imageMode(CENTER);
        image(this.sling1, 150, 455);
        image(this.sling2, 125, 415);
        
    }
    
}