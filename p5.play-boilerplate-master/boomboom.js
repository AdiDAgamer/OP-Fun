class boomboom
{
    constructor(x, y)
    {
        /*var options =
        {
            restitution: 1.0
        }*/
        this.body1 = loadImage("animations/bird.png");
        this.body = Bodies.circle(x, y, 25/*, options*/);
        this.radius = 25;
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        rotate(angle);
        fill(100, 150, 200);
        strokeWeight(4);
        ellipse(0, 0, this.radius, this.radius);
        image(this.body1, 0, 0);
        pop();
        
    }
}