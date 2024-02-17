export const PorjectCard = ({ name, gUrl, dUrl, desc }) => {
  return (
    <div className="flex border-1 bg-black text-white m-2 p-2 rounded-md h-full w-1/4 shadow-2xl border-black">
      <div>
        <div className="text-2xl">{name}</div>
        <div className="text-lg">{desc}</div>
        <div className="flex">
          <p>Deploy Link: </p>
          <a href={dUrl} target="_blank" rel="noopener noreferrer">
            {dUrl}
          </a>
        </div>
        <div>
          <p>Github Link: </p>
          <a href={gUrl} target="_blank" rel="noopener noreferrer">
            {gUrl}
          </a>
        </div>
      </div>
    </div>
  );
};
