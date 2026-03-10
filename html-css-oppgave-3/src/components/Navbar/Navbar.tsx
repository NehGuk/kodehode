import "./Navbar.css"
import homeIcon from "../../assets/earth-grid.png"

function Navbar() {
  return (
    <nav>
      <ol>
        <li id="planet-name">
          <a href="#1">
            <img src={homeIcon} className="nav_logo" />
          </a>
        </li>

        <li>
          <a href="#2">Facts</a>
        </li>
        <li>
          <a href="#3">Gallery</a>
        </li>
        <li>
          <a href="#5">Resources</a>
        </li>
      </ol>
    </nav>
  )
}

export default Navbar
