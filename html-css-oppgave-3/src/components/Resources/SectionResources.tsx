import "./SectionResources.css"

function SectionResources() {
  return (
    <section className="resources" id="5">
      <article className="resources_box">
        <h2>Resources</h2>
        <ul>
          <li>
            The European Space Agency, ESA |{" "}
            <a
              href="https://www.esa.int/Enabling_Support/Operations/Solar_system_exploration"
              target="_blank"
            >
              Solar system exploration
            </a>
          </li>
          <li>
            NASA |{" "}
            <a
              href="https://science.nasa.gov/solar-system/planets/"
              target="_blank"
            >
              About the planets
            </a>
          </li>
          <li>
            The Planetary Society |{" "}
            <a href="https://www.planetary.org/worlds/mars" target="_blank">
              Mars, the red planet
            </a>
          </li>
          <li>
            National Geographic |{" "}
            <a
              href="https://www.nationalgeographic.com/science/article/mars-1"
              target="_blank"
            >
              Planet Mars, explained
            </a>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default SectionResources
