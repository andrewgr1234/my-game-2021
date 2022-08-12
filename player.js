class Player {
  constructor() {
    this.size = 200;
    this.x = 50;
    this.y = height - 50;
    this.velocityY = 0;
    this.gravaty = 1.1;
  }
  show() {
    image(pimg, this.x, this.y, this.size, this.size);
    textSize(32);
    text("A game.\n" + "y: " + this.y, 900, 100);
  }
  jump() {
    if (this.y == height - this.size) {
      this.velocityY = -35;
    }
  }
  move() {
    this.velocityY = this.velocityY + this.gravaty;
    this.y = this.y + this.velocityY;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 90,
      this.size - 90,

      currentObs.x,
      currentObs.y,
      currentObs.size - 90,
      currentObs.size - 90
    );
    return isColliding;
  }
}
