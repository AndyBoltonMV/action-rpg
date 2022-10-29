class Player {
  constructor(ctx, dimensions) {
    this.ctx = ctx;
    this.dimensions = dimensions;
    this.width = dimensions.width / 2 - 36;
    this.height = dimensions.height / 2 - 36;
    this.playerImage = new Image();
    this.playerImage.src = "./assets/player.png";
    this.direction = "down";
    this.directionsKey = {
      w: 0,
      d: 1,
      a: 2,
      s: 3,
    };
    this.frameSize = 72;
    this.currentFrame = this.directionsKey.s;
    this.currentAnim = 0;
  }
  draw() {
    /*
    params (
        image, 
        sx - start of frame width, 
        sy - start of frame height, 
        sW - end of frame width, 
        sH - end of frame height, 
        dx - draw start, 
        dy - draw start, 
        dW - draw end, 
        dH - draw end
    )
    */

    this.ctx.drawImage(
      this.playerImage,
      this.frameSize * this.currentFrame,
      this.frameSize * this.currentAnim,
      this.frameSize,
      this.frameSize,
      this.width,
      this.height,
      this.frameSize,
      this.frameSize
    );
  }
  animate(direction) {
    this.currentFrame = this.directionsKey[direction];
    if (this.currentAnim < 4) {
      this.currentAnim++;
    } else {
      this.currentAnim = 1;
    }
  }
}
