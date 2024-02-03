const gravity = 0.5;
let nbrUp = 0;
class Player {
  constructor(ctx) {
    this.size = { w: 100, h: 100 };
    this.pos = { x: 500, y: (canvas.height - 500) };
    this.vel = { x: 10, y: 20 };
    this.ctx = ctx;
  }
  draw() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
  }

  update() {
    this.draw();
    this.pos.x += this.vel.x;
    // this.pos.y += this.vel.y;
    if (this.pos.y + this.size.h + this.vel.y <= canvas.height) {
      this.pos.y += this.vel.y;
      this.vel.y += gravity;
    } else {
      this.vel.y = 0;
      nbrUp = 0;
    }
  }
}
export default Player;