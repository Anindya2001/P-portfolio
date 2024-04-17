import { Appbar } from "../components/Appbar";
import { PorjectCard } from "../components/ProjectCard";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const navigate = useNavigate();
  const HandleShowMore = (pid) => {
    navigate(`/detailed-view/${pid}`);
  };
  return (
    <div className="bg-gray-200 lg:h-screen h-full">
      <Appbar />
      <div className="flex justify-center item-center">
        <div>
          <div className="md:flex">
            <PorjectCard
              pid={1}
              iUrl={
                "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1708926469/extras/fdkwnnqecw60kszadajf.png"
              }
              name={"Pay money App"}
              desc={
                "This is a Payment app which let users to do transaction with dummy currency"
              }
              ShowMore={HandleShowMore}
              className="mr-28"
            />
            <PorjectCard
              pid={2}
              iUrl={
                "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1708927096/extras/klfsbrbouxo9lzcvf64x.png"
              }
              name={"Weather Checker"}
              desc={
                "This is a simple web application to check weather condition of any city"
              }
              ShowMore={HandleShowMore}
              className="mr-28"
            />
            {/* <PorjectCard
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
            /> */}
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
