const soundContainerBase = document.querySelector("#sound-container-base")
const soundMapBase = {
  z: "drums-1",
  m: "bassline-1",
}

for (let keyBase in soundMapBase) {
  const soundElementBase = document.createElement("div")
  soundElementBase.classList.add("sound-button-base")
  soundContainerBase.append(soundElementBase)

  const textElementBase = document.createElement("p")
  textElementBase.textContent = `${keyBase} ${soundMapBase[keyBase]}`
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
