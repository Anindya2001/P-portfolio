export const PorjectCard = ({ iUrl, name, desc, pid, ShowMore }) => {
  return (
    <div className="flex border-1  m-10 rounded-md h shadow-xl border-black w-80 bg-white">
      <div>
        <img
          src={iUrl}
          alt="project image"
          className="h-56 w-full object-cover"
        />
        <div className="text-2xl m-2 font-bold">{name}</div>
        <div className="text-lg m-2 flex-wrap">
          <p>{desc}</p>
        </div>
        <button
          className="border bg-black text-white rounded-lg py-1 px-5 m-2 shadow-inner shadow-xl"
          onClick={() => ShowMore(pid)}
        >
          show more
        </button>
      </div>
    </div>
  );
};
