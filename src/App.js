import "./App.css";
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Awards from "./Components/Awards";
export default function App() {
  return (
    <div id="page-top">
      <Navigation />
      <div className="container-fluid p-0">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Awards />
      </div>
    </div>
  );
}
