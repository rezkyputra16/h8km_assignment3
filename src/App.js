import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Content from "./Components/Content";
import "./style.css"

export default function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="interest" element={<Content />} />
          <Route path="/skills" element={<Content />} />
          <Route path="/experience" element={<Content />} />
          <Route path="/awards" element={<Content />} />
          <Route path="/education" element={<Content />} />
        </Routes>
      </Router>
    </>
  );
}