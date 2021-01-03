class Paper {
    constructor(x, y) {
      var options = {
          'isStatic' : false,
          'restitution':0,
          'friction':0,
          'density':1.2
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(x, y, 18, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
     
      ellipseMode(RADIUS);
      fill("white");
      ellipse(this.body.position.x,this.body.position.y,18, 18);
     
    }
  };