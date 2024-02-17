import { Appbar } from "../components/Appbar";
import { PorjectCard } from "../components/ProjectCard";

export const Projects = () => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center my-12 p-2">
        <PorjectCard
          name={"Project1"}
          gUrl={"github url"}
          dUrl={"https://www.google.com"}
          desc={"description"}
        />
        <PorjectCard
          name={"project1"}
          gUrl={"github url"}
          dUrl={"deploy url"}
          desc={"description"}
        />
        <PorjectCard
          name={"project1"}
          gUrl={"github url"}
          dUrl={"deploy url"}
          desc={"description"}
        />
      </div>
    </div>
  );
};
