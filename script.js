
const btn = document.getElementById('reveal');
const note = document.getElementById('loveNote');

const ourSong = new Audio('our-song.mp3');
ourSong.loop = true;
ourSong.preload = 'auto';

btn.addEventListener('click', async () => {
  note.classList.toggle('show');

  btn.textContent = note.classList.contains('show')
    ? 'Sending you the biggest hug 🤗'
    : 'Tap for a little love note 💌';

  if (ourSong.paused) {
    try {
      await ourSong.play();
    } catch (error) {
      console.warn('Audio playback blocked:', error);
    }
  }
});
