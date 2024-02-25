import { Appbar } from "../components/Appbar";
import { PorjectCard } from "../components/ProjectCard";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const navigate = useNavigate();
  const HandleShowMore = (pid) => {
    navigate(`/detailed-view/${pid}`);
  };
  return (
    <div className="bg-gray-200 h-screen">
      <Appbar />
      <div className="flex justify-center item-center">
        <div>
          <div className="flex">
            <PorjectCard
              pid={1}
              iUrl={
                "https://images.pexels.com/photos/7657593/pexels-photo-7657593.jpeg"
              }
              name={"Project1"}
              desc={
                "this is a long description to check the styling of the pro"
              }
              ShowMore={HandleShowMore}
              className="mr-28"
            />
            <PorjectCard
              pid={1}
              iUrl={
                "https://images.pexels.com/photos/7657593/pexels-photo-7657593.jpeg"
              }
              name={"Project1"}
              desc={
                "this is a long description to check the styling of the pro"
              }
              ShowMore={HandleShowMore}
              className="mr-28"
            />
            <PorjectCard
              pid={1}
              iUrl={
                "https://images.pexels.com/photos/7657593/pexels-photo-7657593.jpeg"
              }
              name={"Project1"}
              desc={
                "this is a long description to check the styling of the pro"
              }
              ShowMore={HandleShowMore}
              className="mr-28"
            />
          </div>
          {/* <div className="flex">
            <PorjectCard
              iUrl={
                "https://images.pexels.com/photos/7657593/pexels-photo-7657593.jpeg"
              }
              name={"Project2"}
              pid={2}
              desc={
                "this is a long description to check the styling of the pro"
              }
              ShowMore={HandleShowMore}
              className="mr-28"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};
