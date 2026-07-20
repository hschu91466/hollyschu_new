import VideoBackground from "./components/layout/VideoBackground";
import Navigation from "./components/layout/Navigation";
import Home from "./components/sections/Home";
import Experience from "./components/sections/Experience";
import Portfolio from "./components/sections/Portfolio";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <VideoBackground />
      <Navigation />
      <main id="main-content">
        <Home />
        <Experience />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
