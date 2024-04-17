export const Skill = ({ label }) => {
  return (
    <div className="w-1/8 justify-center text-center text-lg text-white hover:underline  bg-black mx-5 my-3 px-5 py-3 border-2 border-black rounded-lg hover:cursor-pointer font-mono">
      <p>{label}</p>
    </div>
  );
};
