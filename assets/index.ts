import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/Ads";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const buttonPlay: HTMLElement = document.querySelector(
  ".btn-play"
) as HTMLElement;
buttonPlay.onclick = () => player.togglePlay();

const buttonMute: HTMLElement = document.querySelector(
  ".btn-mute"
) as HTMLElement;
buttonMute.onclick = () => player.toggleAudio();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .catch((error) => console.error(error));
}
