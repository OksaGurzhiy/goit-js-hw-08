import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const key = 'videoplayer-current-time';

const vimeoCurrentTime = localStorage.getItem(key);
console.log(vimeoCurrentTime);
if (!vimeoCurrentTime) {
  localStorage.setItem(key, 0);
} else {
  player.setCurrentTime(Number(vimeoCurrentTime));
}

player.on(
  'timeupdate',
  throttle(evt => {
    localStorage.setItem(key, evt.seconds);
  }, 1000)
);
console.log(123);
