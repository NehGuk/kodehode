import "./SectionGallery.css"
import mars1 from "../../assets/mars-gallery-1-Fly_over_Xanthe_Terra_with_Mars_Express_pillars.png"
import mars2 from "../../assets/mars-gallery-2-11012_1280.jpg"
import mars3 from "../../assets/mars-gallery-3-Mars_atmosphere.jpg"
import mars4 from "../../assets/mars-gallery-4-pd36-1-pia00182.jpg"
import mars5 from "../../assets/mars-gallery-5-79d6887d02344993470b990b583dff2879c477ce-2271x1138.jpg"
import mars6 from "../../assets/mars-gallery-6-1013.jpeg"
import mars7 from "../../assets/mars-gallery-7-br4FkqpBujNhxsTfxgtXdE.jpg"
import mars8 from "../../assets/mars-gallery-8-Global_Mars_in_colour_pillars.jpg"
import mars9 from "../../assets/mars-gallery-9-nasa-image-of-mars.jpg"
import mars10 from "../../assets/mars-gallery-10-NASA-Perseverance-Rover-Explores-Ancient-River.jpg"
import mars11 from "../../assets/mars-gallery-11-Photo-de-la-Vallee-Marker-Band-sur-la-planete-Mars-le-8-avril-2023-1656932.jpg"
import mars12 from "../../assets/mars-gallery-12-jpegPIA24728.width-1024.jpg"
import mars13 from "../../assets/mars-gallery-13-mars-surface-mountains-on-mars-background-red-planet-free-photo.jpg"
import mars14 from "../../assets/mars-gallery-14-XAaP45HLEukvAntpDbDXL4.jpg"

function SectionGallery() {
  const images = [
    mars1,
    mars2,
    mars3,
    mars4,
    mars5,
    mars6,
    mars7,
    mars8,
    mars9,
    mars10,
    mars11,
    mars12,
    mars13,
    mars14,
  ]
  return (
    <section className="gallery" id="3">
      <h2>Gallery</h2>
      <div className="gallery_container">
        <div className="gallery__grid">
          {images.map((img, index) => (
            <div className="gallery__item" key={index}>
              <img src={img} alt={`Mars ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionGallery
