import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";
import { Resume } from "./pages/Resume";
import { ContactMe } from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
