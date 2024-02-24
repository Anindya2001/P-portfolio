import { ButtonNav } from "./ButtonNav";

export const Appbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-1 space-x-2 bg-black pr-20">
        <div>
          <ButtonNav label={"Home"} to={'/'} />
        </div>
        <div className="flex">
          <ButtonNav label={"About"} to={"/aboutme"} />
          <ButtonNav label={"Projects"} to={"/projects"} />
          <ButtonNav label={"Resume"} to={"/resume"} />
        </div>
      </div>
    </div>
  );
};
