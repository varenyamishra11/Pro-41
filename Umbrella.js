/*class Umbrella{
    constructor(x,y){

        var options = {
            isStatic:true,
            friction : 0.1
        }

        this.x=x
        this.y=y
        this.image=loadImage("walking_1.png"); 
        this.body=Bodies.circle(this.x,this.y,20,options);
        World.add(world, this.body);
        }

        display(){
        var pos=this.body.position;         
        push() 
        translate(pos.x, pos.y); 
       // fill("blue") 
        imageMode(CENTER); 
        image(this.image,pos.x,pos.y+70,20,20);
        pop();  
        }
     }*/

     class Umbrella {
        constructor(x,y){
            var options = {
                isStatic: true,
                friction: true
            }
            this.image = loadImage('walking_1.png');
            this.body = Bodies.circle(x,y,50,options);
            this.radius = 50;
            World.add(world, this.body)
        }
    
        display(){
            var pos = this.body.position;
            imageMode(CENTER);
            image(this.image,pos.x,pos.y+70,300,300);
        }
    }