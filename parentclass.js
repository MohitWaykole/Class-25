class Parent{
    constructor(x,y,width,height,angle){
        this.width = width;
        this.height = height;
        var option = {
            restituion : 0.7,
            friction : 1.0,
            density : 1.0
        }
        this.b = Bodies.rectangle(x,y,width,height,option);
        this.image = loadImage("sprites/base.png");
        World.add(world, this.b);
    }

    display(){
        var p = this.b.position;
        push();
        translate(p.x, p.y);
        rotate(this.b.angle);
        imageMode(CENTER);
        fill("red");
        image(this.image,0, 0, this.width, this.height);
        pop();
    }
}