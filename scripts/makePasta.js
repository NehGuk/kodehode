const makePastaButton = document.querySelector("#make-pasta")
const body2 = document.querySelector("body")

function makePasta() {
  body2.style.fontFamily = "var(--pasta-font)"
  body2.style.fontSize = "4rem"
}

makePastaButton.addEventListener("click", makePasta)
