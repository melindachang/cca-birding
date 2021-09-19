import './style.sass';
import gsap from 'gsap';

fetch('https://some-random-api.ml/animal/birb')
  .then((res) => res.json())
  .then((data) => (document.querySelector('.fact').textContent = data.fact));
// let t0 = new gsap.timeline();
// t0.fromTo('.fact', 2, { y: 100, opacity: 0 }, { y: 0, opacity: 1, ease: 'Expo.easeOut' });

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

// SOMETHING ELSE

document.addEventListener('mousemove', (e) => {
  gsap.to('.imgBx', {
    x: e.clientX,
    y: e.clientY,
    stagger: -0.1,
  });
});

//noise
