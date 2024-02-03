
class Player {
  constructor(ctx) {
    this.pos = { x: 500, y: 100 };
    this.size = { w: 100, h: 100 };
    this.vel = { x: 0, y: 10 };
    this.ctx = ctx;
  }
  draw() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
  }
  update() {
    this.draw();
    this.pos.y += this.vel.y;
  }
}
export default Player;