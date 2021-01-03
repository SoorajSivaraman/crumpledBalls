var boxleftSprite, boxBase, boxRightSprite;
class Dustbin
{
    constructor(x, y, w, h) 
    {  
    boxleftSprite=createSprite(x - w/2, y + h/2, 20,125);
    boxleftSprite.shapeColor=color(255,0,0);
   this.boxLeftBody = Bodies.rectangle(x - w/2+20, y + h/2, 20,h , {isStatic:true} );
    World.add(world, this.boxLeftBody);
    
    boxBase=createSprite(x, y+77.5, w,20);
    boxBase.shapeColor=color(255,0,0);
    this.boxBottomBody = Bodies.rectangle(x, y+77.5, w,20 , {isStatic:true} );

 	World.add(world, this.boxBottomBody);
     
 	boxRightSprite=createSprite(x + w/2, y + h/2, 20,125);
 	boxRightSprite.shapeColor=color(255,0,0);
   this.boxRightBody = Bodies.rectangle(x + w/2+20, y + h/2, 20,h , {isStatic:true} );
 	World.add(world, this.boxRightBody);

    
    }
  };