function copy() {
  var copyText = "hello@moritzkuhn.com";
  navigator.clipboard.writeText(copyText);

  var elem = document.getElementById("copy");
  elem.innerHTML = "Copied!";
  elem.classList.toggle("invert");

  setTimeout(() => {
    elem.innerHTML = "E-Mail";
    elem.classList.toggle("invert");
  }, "3000");
}
