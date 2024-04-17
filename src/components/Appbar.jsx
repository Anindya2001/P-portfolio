import { useState } from "react";
import { ButtonNav } from "./ButtonNav";

export const Appbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-1 space-x-2 bg-black md:pr-20">
        <div>
          <ButtonNav label={"Home"} to={"/"} />
        </div>
        <div className="hidden md:flex">
          <ButtonNav label={"About"} to={"/aboutme"} />
          <ButtonNav label={"Projects"} to={"/projects"} />
          <ButtonNav label={"Resume"} to={"/resume"} />
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full bg-black py-2 z-50">
          <ButtonNav label={"About"} to={"/aboutme"} />
          <ButtonNav label={"Projects"} to={"/projects"} />
          <ButtonNav label={"Resume"} to={"/resume"} />
          <button
            className="text-white focus:outline-none absolute top-1 right-1"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
