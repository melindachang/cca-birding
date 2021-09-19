import './style.sass';
import gsap from 'gsap';

const t1 = new gsap.timeline({ paused: true });

t1.to('.nav-container', 1, {
  left: 0,
  ease: 'Expo.easeInOut',
});
t1.staggerFrom('.menu > div', 0.8, { y: 100, opacity: 0, ease: 'Expo.easeOut' }, '0.1', '-=0.4');

t1.staggerFrom('.socials', 0.8, { y: 100, opacity: 0, ease: 'Expo.easeOut' }, '0.4', '-=0.6');

t1.reverse();
document.querySelector('.menu-open').addEventListener('click', () => {
  t1.reversed(!t1.reversed());
});
document.querySelector('.menu-close').addEventListener('click', () => {
  t1.reversed(!t1.reversed());
});
