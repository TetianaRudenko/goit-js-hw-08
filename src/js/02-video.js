import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEOCURRENTTIME = 'videoplayer-current-time';

if (localStorage.getItem(VIDEOCURRENTTIME)) {
  const playedTime = Number(localStorage.getItem(VIDEOCURRENTTIME));
  player.setCurrentTime(playedTime);
}

player.on(
  'timeupdate',
  Throttle(data => localStorage.setItem(VIDEOCURRENTTIME, data.seconds), 1000)
);


