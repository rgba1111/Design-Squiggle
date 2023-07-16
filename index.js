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
  elem.innerHTML = "E-Mail";
  elem.classList.remove("btn-active");
  wait = false;
}
