import './style.sass';
import gsap from 'gsap';

const tl = new gsap.timeline({ paused: true });

tl.to(document.querySelector('.menu-left'), 1, {
  left: 0,
  ease: "Expo.easeInOut",
});

tl.to(
  document.querySelector('.menu-right'),
  1,
  {
    right: 0,
    ease: "Expo.easeInOut",
  },
  '-=1'
);

tl.staggerFrom(
  document.querySelectorAll('.menu-links > div'),
  0.8,
  {
    y: 100,
    opacity: 0,
    ease: 'Expo.easeOut',
  },
  '0.1',
  '-=0.4'
);

tl.staggerFrom(
  document.querySelectorAll('.mail > div, .socials > div'),
  0.8,
  {
    y: 100,
    opacity: 0,
    ease: 'Expo.easeOut',
  },
  '0.1',
  '-=1'
);

tl.from(
  document.querySelector('.menu-close'),
  1,
  {
    scale: 0,
    opacity: 1,
    ease: 'Expo.easeInOut',
  },
  '-=1'
);

tl.to(
  document.querySelector('.hr'),
  0.4,
  {
    scaleY: 1,
    transformOrigin: '0% 50%',
    ease: 'Power2.ease',
  },
  '-=2'
);

tl.reverse();
document.querySelector('.menu-open').addEventListener('click', function () {
  tl.reversed(!tl.reversed());
});
document.querySelector('.menu-close').addEventListener('click', function () {
  tl.reversed(!tl.reversed());
});
