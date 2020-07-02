class Platform
{
    constructor(x, y)
    {
        var options =
        {
            'isStatic': true
        }
        this.body1 = loadImage("animations/wood2.png")
        this.body = Bodies.rectangle(x, y, 250, 20, options);
        this.width = 250;
        this.height = 20
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        //rectMode(CENTER);
        //fill(0);
        //rect(0, 0, this.width, this.height);
        imageMode(CENTER);
        image(this.body1, 0, 0, this.width, this.height);
        pop();
    }
}