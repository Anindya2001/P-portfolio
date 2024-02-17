import { Appbar } from "../components/Appbar";

export const AboutMe = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <Appbar />
      <div className="text-4xl flex justify-center content-center p-10 font-semibold">
        About me
      </div>
      <div className="text-lg">
        <div className="flex justify-center content-center m-2 font-medium">
          Hii, I am Pranav Kumar. I am currently pursuing B.tech from IIIT
          Guwahati.
        </div>
        <div className="flex justify-center content-center m-2 font-medium">
          I likes to makes websites, mostly i like to to do backend tasks more.
          I have have many projects to gain experience.
        </div>
      </div>
    </div>
  );
};
