import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";
import { Resume } from "./pages/Resume";
import { DetailedView } from "./pages/DetailedView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/detailed-view/:pid" element={<DetailedView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//remaining
//1>> navigation in appbar.jsx  ==>> done
//2>> resume viewing in resume.jsx ==>> done
//3>> Real project props
//4>> responsiveness==>> done
//5>> vite+react logo and title  ==>> done
//6>> correct resume download
