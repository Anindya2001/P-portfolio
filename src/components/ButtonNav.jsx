export const ButtonNav = ({ label }) => {
  return (
    <div>
      <button className="text-white font-nutino-sans font-mono py-2 text-2xl px-5 rounded hover:underline">
        {label}
      </button>
    </div>
  );
};
