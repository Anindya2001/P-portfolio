import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";

export const DetailedView = () => {
  const { pid } = useParams();

  const projects = {
    1: {
      name: "Pay Money App",
      desc: "This is a Payment app which let users to do transaction with dummy currency",
      imageUrl:
        "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1708926469/extras/fdkwnnqecw60kszadajf.png",
      gUrl: "https://github.com/Anindya2001/P-portfolio",
      dUrl: "https://payapp-pranav.netlify.app/",
    },
    2: {
      name: "Weather checker",
      desc: "This is a simple web application to check weather condition of any city",
      imageUrl:
        "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1708927096/extras/klfsbrbouxo9lzcvf64x.png",
      gUrl: "https://github.com/Anindya2001/P-portfolio",
      dUrl: "https://weather-checker-9vo0.onrender.com/",
    },
  };

  const project = projects[pid];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-gray-200 h-full">
      <Appbar />
      <div className="container mx-auto mt-10 pb-10">
        <div className="max-w-6xl mx-auto bg-white rounded-md shadow-md overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-76 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold my-2">{project.name}</h2>
            <a
              href={project.gUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black px-2 rounded-lg bg-black text-white py-1 mr-2"
            >
              Github Link
            </a>
            <a
              href={project.dUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black px-2 rounded-lg bg-black text-white py-1 ml-2"
            >
              Deploy Link
            </a>
            <p className="text-gray-800 mt-4">{project.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
