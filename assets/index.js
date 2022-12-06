import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video });

const buttonPlay = document.querySelector(".btn-play");
const buttonMute = document.querySelector(".btn-mute");

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleAudio();
