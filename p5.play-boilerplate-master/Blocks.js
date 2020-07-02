class Block
{
    constructor(x, y)
    {
        /*var options =
        {
            restitution: 1.0
        }*/
        this.image = blockimg;
        this.body = Bodies.rectangle(x, y, 25, 25/*, options*/);
        this.width = 25;
        this.height = 30;
        World.add(world, this.body);
    }

    display()
    {
        if(this.body.speed < 2.5)
        {
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            fill(0, 255, 0);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        }

        else
        {
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            image(this.image, 0, 0, 25, 30);
            pop();
        }
    }
}
