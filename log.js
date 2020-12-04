class Log extends Parent{
    constructor(x, y, height, angle){
        super(x,y,20,height,angle);
    Matter.Body.setAngle(this.b, angle);
    this.image = loadImage("sprites/wood2.png");
}
}