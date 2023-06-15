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

const savedTime = localStorage.getItem('videoplayer-current-time');

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

player
  .setCurrentTime(savedTime)
  .then(function (seconds) {
    try {
      const parsedTime = JSON.parse(savedTime);
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  })
  .catch(function (error) {
    console.log(error.name);
    console.log(error.message);
  });
