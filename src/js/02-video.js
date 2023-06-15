import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// śledzenie aktualizacji odtwarzania video
player.on('timeupdate', function (data) {
  console.log(data);
});
