import "./SectionResources.css"

function SectionResources() {
  return (
    <section className="resources" id="5">
      <article className="resources_box">
        <h2>Resources</h2>
        <ul>
          <li>
            <a
              href="https://www.esa.int/Enabling_Support/Operations/Solar_system_exploration"
              target="_blank"
            >
              The European Space Agency :: Solar system exploration
            </a>
          </li>
          <li>
            <a
              href="https://science.nasa.gov/solar-system/planets/"
              target="_blank"
            >
              NASA :: About the planets
            </a>
          </li>
          <li>
            <a href="https://www.planetary.org/worlds/mars" target="_blank">
              The Planetary Society :: Mars, the red planet
            </a>
          </li>
          <li>
            <a
              href="https://www.nationalgeographic.com/science/article/mars-1"
              target="_blank"
            >
              National Geographic :: Planet Mars, explained
            </a>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default SectionResources
