import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Home } from "./Portfolio/Home/Home";
import { Card } from "./Portfolio/Resume/Card";
function App() {
  return (
    <div className="App">
      <Home />
      <Card/>
    </div>
  );
}

export default App;
