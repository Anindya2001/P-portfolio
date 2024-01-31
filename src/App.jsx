import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hii, my name is Pranav Kumar</h1>
      <p>I am currently pursuing B.Tech from IIIT Guwahati</p>
      <div>
        <h1>Skills: </h1>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>C/C++</li>
        <li>MongoDB</li>
        <li>MySql</li>
        <li>NodeJS</li>
        <li>ReactJS</li>
        <li>ReactNative</li>
      </div>
      <div>
        <h2>Contact Me: </h2>
        <li>Email: pranavwrk0155@gmail.com</li>
        <li>Phone no.: 7367014543</li>
        <li>
          Github:{" "}
          <a href="https://github.com/PranavKumar20" target="_blank">
            PranavKumar20
          </a>
        </li>
      </div>
    </>
  );
}

export default App;
