class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(x, y, r/2, options);
		World.add(world, this.body);
		//this.image = loadImage("paper.png");

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			ellipseMode(RADIUS)
			//strokeWeight(3);
			//fill("red")
			ellipse(0,0,this.r, this.r);
			pop()
			
			
			
	}

}
  