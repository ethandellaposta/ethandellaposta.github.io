function Kyle(x,y){
  this.x = x;
  this.y = y;
  this.w = 20;
  this.h = 20;
  this.health = 100;

  this.show = function(){
    this.score = frameCount;
    fill(0,0,255);
    ellipseMode(RADIUS);
    ellipse(this.x,this.y,this.w,this.h);
  }
}
