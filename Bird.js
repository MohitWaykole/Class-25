class Bird extends Parent{
    constructor(x, y){
        super(x,y,50,50);
        this.image = loadImage("sprites/bird.png");
    }

    display(){
        super.display();
        this.b.position.x = mouseX;
        this.b.position.y = mouseY;
    }
}