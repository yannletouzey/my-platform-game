class Controler {
  constructor() {
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
  }
  keydown() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        this.up = true;
      }
      if (e.key === 'ArrowDown') {
        this.down = true;
      }
      if (e.key === 'ArrowLeft') {
        this.left = true;
      }
      if (e.key === 'ArrowRight') {
        this.right = true;
      }
    })
  }
}
export default Controler;