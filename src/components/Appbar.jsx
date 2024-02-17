import { ButtonNav } from "./ButtonNav";

export const Appbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-1 space-x-2 bg-black pr-20">
        <div>
          <ButtonNav label={"Home"} />
        </div>
        <div className="flex">
          <ButtonNav label={"About"} />
          <ButtonNav label={"Projects"} />
          <ButtonNav label={"Resume"} />
          <ButtonNav label={"Contact"} />
        </div>
      </div>
    </div>
  );
};
