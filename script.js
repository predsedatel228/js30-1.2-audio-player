const playButton = document.querySelector('.player__play-button');
const previousSongButton = document.querySelector('.player__previous-button')
const nextSongButton = document.querySelector('.player__next-button')
const songArtist = document.querySelector('.player__artist');
const songName = document.querySelector('.player__song-name');
const songFile = document.querySelector('.player__song');
const songImage = document.querySelector('.player__image')
const background = document.querySelector('.background')
let i = 0;
const musicBase = [{
    artist: "Beyonce",
    song: "Don't Hurt Yourself",
    songSrc: "./assets/audio/beyonce.mp3",
    image: "./assets/images/lemonade.png"
  },
  { 
    artist: "Dua Lipa",
    song: "Don't Stop Now",
    songSrc: "./assets/audio/dontstartnow.mp3",
    image: "./assets/images/dontstartnow.png"
  }
]

const togglePause = () => {
  playButton.classList.toggle('player__play-button_clicked');

  if (document.querySelector('.player__play-button_clicked')) {
    playButton.src = './assets/icons/play.png';
  }
  else if (!document.querySelector('.player__play-button_clicked')) {
    playButton.src = './assets/icons/pause.png';
  }
}

const buttonAnimation = (button) => {
  button.classList.toggle('invert');
}

const nextSong = () => {

}


playButton.addEventListener('click', togglePause);
playButton.addEventListener('mousedown', () => { buttonAnimation(playButton) });
playButton.addEventListener('mouseup', () => { buttonAnimation(playButton) });



previousSongButton.addEventListener('mousedown', () => { buttonAnimation(previousSongButton) });
previousSongButton.addEventListener('mouseup', () => { buttonAnimation(previousSongButton) });
previousSongButton.addEventListener('click', ()=> {
  if (i === 0) {
    i = musicBase.length-1;
  }
  else i-=1
  songSwitch ()
  console.log(i)
});

nextSongButton.addEventListener('mousedown', () => { buttonAnimation(nextSongButton) });
nextSongButton.addEventListener('mouseup', () => { buttonAnimation(nextSongButton) });
nextSongButton.addEventListener('click', ()=> {
  if (i === musicBase.length-1) {
    i=0;
  }
  else i+=1
  songSwitch ()
  console.log(i)
});


function songSwitch () {
  songArtist.textContent = musicBase[i].artist;
  songName.textContent = musicBase[i].song;
  songFile.src = musicBase[i].songSrc;
  songImage.src = musicBase[i].image;
  background.style.backgroundImage = `url(${musicBase[i].image})`;
}

songSwitch()