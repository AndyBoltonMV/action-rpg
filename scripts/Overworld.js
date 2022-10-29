class Overworld {
  constructor(dimensions, ctx, save) {
    this.dimensions = dimensions;
    this.ctx = ctx;
    this.save = save;
    this.map = save.map || new Map(ctx, dimensions);
    this.player = save.player || new Player(ctx, dimensions);
    this.walking = false;
    this.direction = "s";
    this.frameRate = 1000;
    this.start = undefined;
    this.curr = undefined;
    window.addEventListener("keydown", (e) => {
      const directions = ["w", "a", "s", "d"];
      if (directions.includes(e.key)) {
        this.direction = e.key;
        this.walking = true;
      }
    });
    window.addEventListener("keyup", () => {
      this.walking = false;
      this.player.currentAnim = 0;
    });
  }
  init = (timestamp) => {
    if (this.start === undefined) this.start = timestamp;
    if (timestamp - this.start >= 150 && this.walking) {
      this.start = timestamp;
      this.player.animate(this.direction);
    }
    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
    this.map.draw();
    this.player.draw();
    requestAnimationFrame(this.init);
  };
  addEventListeners() {}
}
