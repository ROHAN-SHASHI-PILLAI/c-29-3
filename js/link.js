class Link{
    constructor(bodyA,bodyB){
    var lastlink=bodyA.body.bodies.length-2;
    this.link=Constraint.create({
    bodyA:bodyA.body.bodies[lastlink],
    bodyB:bodyB.body,
    
    stiffness:0.02 
    });
    World.add(engine.world,this.link)
    }
    }
    