import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import SectionIntro from "./components/SectionIntro/SectionIntro"
import SectionGallery from "./components/SectionGallery/SectionGallery"
import SectionFacts from "./components/SectionFacts/SectionFacts"
import Footer from "./components/Footer/Footer"
import SectionResources from "./components/Resources/SectionResources"

function App() {
  return (
    <>
      <Navbar />
      <SectionIntro />
      <SectionFacts />
      <SectionGallery />
      <SectionResources />
      <Footer />
    </>
  )
}

export default App
