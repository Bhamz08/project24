class Paper{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, radius, options);
        this.x = x
        this.y = y
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("blue")
        ellipseMode(RADIUS);
        ellipse( this.x, this.y, this.radius, this.radius);
        pop();
      }
}