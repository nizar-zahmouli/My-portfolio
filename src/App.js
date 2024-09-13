import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Home } from "./Portfolio/Home/Home";
import { Skill } from "./Portfolio/Skills/Skill";
import { Experience } from "./Portfolio/Experience/Experience";
import { Projects } from "./Portfolio/Projects/Projects";
function App() {
  return (
    <div className="App">
      <Home />
      <Skill />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
