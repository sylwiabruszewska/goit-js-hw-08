import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// śledzenie aktualizacji odtwarzania video i zapisanie czasu w localStorage
player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(data.seconds)
    );
  }, 1000)
);

const savedTime = localStorage.getItem('videoplayer-current-time');
console.log(savedTime);

if (savedTime) {
  try {
    const parsedTime = JSON.parse(savedTime);
    player.setCurrentTime(parsedTime).catch(function (error) {
      console.log(error.name);
      console.log(error.message);
    });
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
