import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import SectionIntro from "./components/SectionIntro/SectionIntro"
import SectionGallery from "./components/SectionGallery/SectionGallery"
import SectionFacts from "./components/SectionFacts/SectionFacts"
import Footer from "./components/Footer/Footer"
import SectionResources from "./components/Resources/SectionResources"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <SectionIntro />
      <SectionGallery />
      <SectionFacts />
      <SectionResources />
      <Footer />
    </>
  )
}

export default App
