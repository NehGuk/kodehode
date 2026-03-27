const soundContainerBase = document.querySelector("#sound-container-base")
const soundMapBase = {
  z: "drums",
  m: "bass",
  x: "drums-psycho",
  n: "bass-industrial",
}

for (let keyBase in soundMapBase) {
  const soundElementBase = document.createElement("div")
  soundElementBase.classList.add("sound-button-base")
  soundContainerBase.append(soundElementBase)

  const textElementBase = document.createElement("p")
  const spanElementBase = document.createElement("span")

  spanElementBase.textContent = keyBase
  textElementBase.textContent = ` ${soundMapBase[keyBase]}`
  textElementBase.prepend(spanElementBase)
  soundElementBase.append(textElementBase)

  soundElementBase.addEventListener("click", () =>
    playSoundBase(soundMapBase[keyBase])
  )
}

const playSoundBase = (soundBase) => {
  const audioBase = new Audio(`./sounds/base/${soundBase}.wav`)
  audioBase.volume = 0.7
  audioBase.play()
}

document.addEventListener("keydown", (eb) => {
  const keyBase = eb.key
  const soundBase = soundMapBase[keyBase]
  if (soundBase) {
    playSoundBase(soundBase)
  }
})
