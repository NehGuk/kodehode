const uglifyButton = document.querySelector("#uglify")
const body = document.querySelector("body")
const h1 = document.querySelector("h1")
const h2 = document.querySelectorAll("h2")
const h3 = document.querySelectorAll("h3")
const p = document.querySelectorAll("p")

function generateRandomColor() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  let randomColor = `rgb(${r}, ${g}, ${b})`
  return randomColor
}

uglifyButton.addEventListener("click", () => {
  console.log(generateRandomColor())
  body.style.backgroundColor = generateRandomColor()
  body.style.fontFamily = "var(--ugly-font)"
  h1.style.color = generateRandomColor()
  h2.forEach((el) => {
    el.style.color = generateRandomColor()
  })
  h3.forEach((el) => {
    el.style.color = generateRandomColor()
  })
  p.forEach((el) => {
    el.style.color = generateRandomColor()
  })
})
