import { Routes, useNavigate } from "react-router-dom";

export const ButtonNav = ({ label, to }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={()=> navigate(to)} className="text-white font-nutino-sans font-mono py-2 text-2xl px-5 rounded hover:underline">
        {label}
      </button>
    </div>
  );
};
