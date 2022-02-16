import './style.sass';
import gsap from 'gsap';

fetch('https://some-random-api.ml/animal/birb')
  .then((res) => res.json())
  .then((data) => (document.querySelector('.fact').textContent = data.fact));

let t0 = new gsap.timeline();
t0.fromTo('.hero-wrapper h1', 1, { y: 60, opacity: 0 }, { y: 0, opacity: 1, ease: 'Expo.easeOut' });

const t1 = new gsap.timeline({ paused: true });

t1.to('.nav-container', 1, {
  left: 0,
  ease: 'Expo.easeInOut',
});
t1.staggerFrom('.menu > div', 0.8, { y: 100, opacity: 0, ease: 'Expo.easeOut' }, '0.1', '-=0.4');

t1.staggerFrom('.socials', 0.8, { y: 100, opacity: 0, ease: 'Expo.easeOut' }, '0.4', '-=0.6');

t1.reverse();
document.querySelector('.menu-open').addEventListener('click', (e) => {
  t1.reversed(!t1.reversed());
});
document.querySelector('.menu-close').addEventListener('click', (e) => {
  t1.reversed(!t1.reversed());
});
document.querySelector('.menu__item-active').addEventListener('click', (e) => {
  t1.reversed(!t1.reversed());
});

document.addEventListener('mousemove', (e) => {
  gsap.to('.imgBx', {
    x: e.clientX,
    y: e.clientY,
    stagger: -0.1,
  });
});

const noise = () => {
  let canvas, ctx;

  let wWidth, wHeight;

  let noiseData = [];
  let frame = 0;
  let frameTimer = 1;
  // Create Noise
  const createNoise = () => {
    const idata = ctx.createImageData(wWidth, wHeight);
    const buffer32 = new Uint32Array(idata.data.buffer);
    const len = buffer32.length;

    for (let i = 0; i < len; i++) {
      if (Math.random() < 0.5) {
        buffer32[i] = 0xffffffff;
      }
    }

    noiseData.push(idata);
  };

  // Play Noise
  const paintNoise = () => {
    if (frame === 9) {
      frame = 0;
    } else if (frameTimer % 2 === 0) {
      frame++;
      frameTimer = 1;
    } else {
      frameTimer++;
    }

    ctx.putImageData(noiseData[frame], 0, 0);
  };

  // Loop
  const loop = () => {
    paintNoise(frame);

    loopTimeout = window.setTimeout(() => {
      window.requestAnimationFrame(loop);
    }, 1000 / 25);
  };

  // Setup
  const setup = () => {
    wWidth = window.innerWidth;
    wHeight = window.innerHeight;

    canvas.width = wWidth;
    canvas.height = wHeight;

    for (let i = 0; i < 10; i++) {
      createNoise();
    }

    loop();
  };

  // Init
  const init = (() => {
    canvas = document.getElementById('noise');
    ctx = canvas.getContext('2d');

    setup();
  })();
};

noise();
