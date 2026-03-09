import "./SectionFacts.css"
import marsImage from "../../assets/mars.png"

function SectionFacts() {
  return (
    <section className="facts" id="2">
      {/* <article className="facts_box">
        <div className="facts_box_text">
          <h2>Facts</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            sapiente nulla hic nobis amet nihil ducimus a assumenda, quia.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            sapiente nulla hic nobis amet nihil ducimus, adipisci voluptate
            consequatur at minima sed odio delectus blanditiis eligendi numquam?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            sapiente nulla hic nobis amet nihil ducimus a assumenda, quia,
            adipisci voluptate consequatur at minima sed odio delectus
            blanditiis eligendi numquam?
          </p>
        </div>
        <div className="facts_box_image">
          <img src={marsImage} />
        </div>
      </article> */}

      <article className="facts_box">
        <div className="facts_box_info">
          <h2>Fun facts about Mars</h2>
          <ol>
            <li>
              <strong>A day on Mars</strong> is almost the same as Earth — a
              Martian day (called a "sol") is 24 hours and 37 minutes, so if you
              lived there your daily routine wouldn't change much!
            </li>
            <li>
              <strong>Mars has the tallest volcano</strong> in the solar system
              — Olympus Mons is about 3x the height of Mount Everest, and so
              wide it would cover the entire state of France.
            </li>
            <li>
              <strong>Mars has two tiny moons</strong> — Phobos and Deimos are
              so small they look like potatoes rather than spheres. Phobos is
              also slowly spiraling inward and will eventually crash into Mars
              or break apart in about 50 million years.
            </li>
            <li>
              <strong>Mars had liquid water</strong> — there is strong evidence
              that rivers, lakes and even oceans once covered the surface
              billions of years ago. Today it's frozen at the poles and possibly
              underground!
            </li>
          </ol>
        </div>
        <div className="facts_box_image">
          <img src={marsImage} className="facts_box_image" />
        </div>
      </article>
    </section>
  )
}

export default SectionFacts
