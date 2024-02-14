import { Skill } from "./Skill";

export const HomeBody = () => {
  return (
    <div className="bg-gray-200">
      <div className="p-8 justify-center text-center">
        <p className="text-8xl">Hii. I am</p>
        <p className="text-8xl">Pranav Kumar</p>
      </div>
      <hr className="w-48 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-3 dark:bg-gray-700"/>
      <div className="p-8">
        <p className="text-center text-4xl underline mb-5">Skills </p>
        <div className="flex justify-center">
            <Skill label={"skill1"} />
            <Skill label={"skill1"} />
            <Skill label={"skill1"} />
            <Skill label={"skill1"} />
            <Skill label={"skill1"} />
            <Skill label={"skill1"} />
            <Skill label={"skill1"} />
            <Skill label={"skill1"} />
        </div>
      </div>
      <div>
        hire me
      </div>
    </div>
  );
};
