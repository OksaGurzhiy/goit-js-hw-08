import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const key = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(evt => {
    localStorage.setItem(key, evt.seconds);
  }, 1000)
);

const vimeoCurrentTime = localStorage.getItem(key);
console.log(vimeoCurrentTime);
if (vimeoCurrentTime) {
  player.setCurrentTime(vimeoCurrentTime);
}
