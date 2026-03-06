import "./SectionIntro.css"

function SectionIntro() {
  return (
    <section className="intro" id="1">
      <h1>Heading</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
        sapiente nulla hic nobis amet nihil ducimus a assumenda, quia, adipisci
        voluptate consequatur at minima sed odio delectus blanditiis eligendi
        numquam?
      </p>
      <iframe
        className="video"
        width="649"
        height="360"
        src="https://www.youtube.com/embed/6E6Cn5RSe_I?rel=0&modestbranding=1&controls=1&autoplay=1&mute=1"
        frameborder="0"
        allow="encrypted-media"
        allowfullscreen
      ></iframe>
    </section>
  )
}

export default SectionIntro
