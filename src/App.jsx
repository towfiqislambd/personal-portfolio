import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <Services></Services>
      <Contact></Contact>
      <ScrollToTop
        id="scroll"
        viewBox="0 0 215 512"
        svgPath="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z"
        smooth={true}
        color="#fff" />
      <Footer></Footer>
    </main>
  )
}

export default App;