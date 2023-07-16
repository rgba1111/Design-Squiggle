// sound set-up
const pause_sound = new Audio("assets/lottie/audio/pause.wav");
pause_sound.volume = 0.75;
const play_sound = new Audio("assets/lottie/audio/play.wav");
play_sound.volume = 0.75;

// lottie set-up

var params = {
  container: document.getElementById("lottie-container"),
  renderer: "svg",
  loop: true,
  autoplay: true,
};

var anim;
anim = lottie.loadAnimation(params);

const player = document.querySelector("#lottie-container");

const body = document.querySelector("body");
const message_content = document.querySelector("#message-content");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

// toggle state

let sound_toggle = false;

function toggle(checkbox) {
  if (checkbox.checked) {
    sound_toggle = true;
  } else {
    sound_toggle = false;
  }
}

// lottie interactivity

LottieInteractivity.create({
  player: "#lottie-container",
  mode: "chain",
  autoplay: true,
  actions: [
    {
      state: "loop",
      transition: "hover",
      frames: [0, 238],
      reset: true,
    },
    {
      state: "none",
      position: {
        x: [0, 1],
        y: [-1, 2],
      },
      transition: "seek",
      frames: [0, 238],
      reset: true,
    },
  ],
});

// theme switch and play sounds

player.addEventListener("mouseenter", function () {
  body.style.backgroundColor = "var(--black)";
  message_content.style.color = "var(--offwhite)";
  document.documentElement.style.setProperty("--toggle-bg-color", "red");
  footer.style.opacity = "0";
  header.style.opacity = "0";
  if (sound_toggle === true) {
    pause_sound.play();
    pause_sound.currentTime = 0;
  }
});

// theme switch reverse, play sounds and play lottie again

player.addEventListener("mouseleave", function () {
  body.style.backgroundColor = "var(--white)";
  message_content.style.color = "var(--black)";
  footer.style.opacity = "1";
  header.style.opacity = "1";
  if (sound_toggle === true) {
    play_sound.play();
    play_sound.currentTime = 0;
  }
  player.setDirection(1);
  player.play();
});