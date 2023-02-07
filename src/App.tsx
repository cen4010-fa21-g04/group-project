import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./components";
import About from "./components/about";
import AboutId from "./components/about/[id]";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:id" element={<AboutId />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

const posts = [
  { id: 1, title: "First", content: "Hello world!" },
  { id: 2, title: "Second", content: "Hello again!" },
];
