import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Home } from "./Portfolio/Home/Home";
import { Skill } from "./Portfolio/Skills/Skill";
import { Experience } from "./Portfolio/Experience/Experience";
import { Navbar, Scroll } from "./Portfolio/Navbar/Navbar";
import { Projects } from "./Portfolio/Projects/Projects";
import { Contact } from "./Portfolio/ContactMe/Contact";
function App() {
  return (
    <div className="App">
        <Home />
        <Skill />
        <Experience />
      <Projects />
      <Contact/>
      
    </div>
  );
}

export default App;
