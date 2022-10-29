class Map {
  constructor(ctx, dimensions) {
    this.ctx = ctx;
    this.dimensions = dimensions;
    this.currentMap = maps.start;
    this.mapWidth = this.currentMap.layout[0].length * 16;
    this.mapHeight = this.currentMap.layout.length * 16;
    this.width = dimensions.width / 2 - this.mapWidth;
    this.height = dimensions.height / 2 - this.mapHeight;
    this.mapImage = new Image();
    this.mapImage.src = this.currentMap.src;
    this.collision = this.currentMap.collision;
    this.layout = this.currentMap.layout;
    this.frameSize = 16;
  }
  draw() {
    this.layout.forEach((row, rowNum) => {
      row.forEach((col, colNum) => {
        let imageRow = 0;
        if (col > 6 && col < 13) imageRow = 1;
        if (col > 12 && col < 19) imageRow = 2;
        if (col > 18 && col < 25) imageRow = 3;
        console.log(this.mapWidth);
        this.ctx.drawImage(
          this.mapImage,
          this.frameSize * col,
          this.frameSize * imageRow,
          this.frameSize,
          this.frameSize,
          this.width * col,
          this.height * imageRow,
          this.frameSize,
          this.frameSize
        );
      });
    });
    // this.ctx.drawImage(this.mapImage, 0, 0);
  }
  changeMap(location) {
    this.currentMap = maps[location];
  }
}
