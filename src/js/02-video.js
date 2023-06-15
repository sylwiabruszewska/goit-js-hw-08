import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// śledzenie aktualizacji odtwarzania video i zapisanie czasu w localStorage
player.on('timeupdate', function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
});
