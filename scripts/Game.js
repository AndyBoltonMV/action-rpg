class Game {
  constructor(element) {
    this.element = element;
    this.dimensions = {
      height: this.element.height,
      width: this.element.width,
    };
    this.ctx = element.getContext("2d");
    this.save = {};
    this.overworld = null;
  }
  startGame() {
    this.overworld = new Overworld(this.dimensions, this.ctx, this.save);
    this.overworld.init();
  }
  loadGame() {
    if (localStorage.key("saveGame")) {
      this.save = JSON.parse(localStorage.getItem("saveGame"));
    } else {
      alert("No save game found");
    }
  }
}
