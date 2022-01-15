const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', onPlay);

player.on('timeupdete', onTimeUpdate);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

function onPlay(data) {
  console.log('onPlay - data', data);
}

function onTimeUpdate(data) {
  localStorage.setItem('videoplayer-current-time', data);
}
