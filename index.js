const elem = document.getElementById("copy");
let wait = false;

function copy() {
  const copyText = "hello@moritzkuhn.com";
  navigator.clipboard.writeText(copyText);

  if (!wait) {
    elem.innerHTML = "Copied!";
    elem.classList.add("btn-active");
    wait = true;

    setTimeout(() => {
      resetButton();
    }, 3000);
  }
}

function resetButton() {
  elem.innerHTML = "Email";
  elem.classList.remove("btn-active");
  wait = false;
}

// sound set-up
  const pause_sound = new Audio("../../content/3_about/audio/pause.wav");
  const play_sound = new Audio("../../content/3_about/audio/play.wav");


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

// lottie interactivity 

LottieInteractivity.create({
  player: "#lottie-container",
  mode: "chain",
  autoplay: true,
  actions: [
    {
      state: "loop",
      transition: "hover",
      frames: [0, 243],
      reset: true,
    },
    {
      state: "none",
      position: {
        x: [0, 1],
        y: [-1, 2],
      },
      transition: "seek",
      frames: [0, 243],
      reset: true,
    },
  ],
});


// theme switch

player.addEventListener("mouseenter", function () {
  body.style.backgroundColor = "var(--black)";
  message_content.style.color = "var(--offwhite)";
  footer.style.opacity = "0";
  header.style.opacity = "0";
});

player.addEventListener("mouseleave", function () {
  body.style.backgroundColor = "var(--white)";
  message_content.style.color = "var(--black)";
  footer.style.opacity = "1";
  header.style.opacity = "1";
  player.setDirection(1);
  player.play();
});