import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";

export const DetailedView = () => {
  const { pid } = useParams();

  const projects = {
    1: {
      name: "Project 1",
      desc: "Description of Project 1",
      imageUrl:
        "https://images.pexels.com/photos/7657593/pexels-photo-7657593.jpeg",
      gUrl: "https://github.com/Anindya2001/P-portfolio",
      dUrl: "https://portfolio-pranav-0155.netlify.app/",
    },
    2: {
      name: "Project 2",
      desc: "Description of Project 2",
      imageUrl: "https://example.com/project2.jpg",
      gUrl: "https://github.com/Anindya2001/P-portfolio",
      dUrl: "https://portfolio-pranav-0155.netlify.app/",
    },
  };

  const project = projects[pid];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-gray-200 h-screen">
      <Appbar />
      <div className="container mx-auto mt-10">
        <div className="max-w-xl mx-auto bg-white rounded-md shadow-md overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-64 object-cover"
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
