import Platform from "./Platform";
import Player from "./Player";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let nbrUp = 0;
const platform = new Platform(ctx, 500, canvas.height - 600, 1000, 50);

const player = new Player(ctx);
const keys = {
  up: {
    pressed: false
  },
  down: {
    pressed: false
  },
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}
const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  platform.draw();
  player.update();
  
  if (keys.right.pressed) {
    player.pos.x + player.size.w + player.vel.x <= (canvas.width * 0.95) ? player.vel.x = 20 : player.vel.x = 0;
  } else if (keys.left.pressed) {
    player.pos.x >= (canvas.width * 0.05) ? player.vel.x = -20 : player.vel.x = 0;
  } else {
    player.vel.x = 0;
  }

  if (keys.up.pressed) {
    player.vel.y = -20;
  }

  if (player.pos.y + player.size.h <= platform.pos.y && player.pos.y + player.size.h + player.vel.y >= platform.pos.y && player.pos.x <= platform.pos.x + platform.size.w && player.pos.x + player.size.w >= platform.pos.x) {
    player.vel.y = 0;
    nbrUp = 0;
  }
};
animate();

addEventListener('keydown', ({ key }) => {
  switch (key) {
    case 'ArrowUp':
      if (nbrUp < 2) {
        nbrUp++;
        keys.up.pressed = true;
      }
      break;
    case 'ArrowDown':
      keys.down.pressed = true;
      break;
    case 'ArrowLeft':
      if (!keys.right.pressed) keys.left.pressed = true;
      break;
    case 'ArrowRight':
      if (!keys.left.pressed) keys.right.pressed = true;
      break;
    default:
      break;
  }
})
addEventListener('keyup', ({ key }) => {
  switch (key) {
    case 'ArrowUp':
      keys.up.pressed = false;
      break;
    case 'ArrowDown':
      keys.down.pressed = false;
      break;
    case 'ArrowLeft':
      keys.left.pressed = false;
      break;
    case 'ArrowRight':
      keys.right.pressed = false;
      break;
    default:
      break;
  }
})