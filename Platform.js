class Platform {
  constructor(ctx, x, y, w, h) {
    this.pos = { x, y };
    this.size = { w, h };
    this.ctx = ctx;
  }
  draw() {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
  }
}
export default Platform;