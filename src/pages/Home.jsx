import { Appbar } from "../components/Appbar";
import { HomeBody } from "../components/HomeBody";
import { ContactMe } from "./Contact";

export const Home = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <Appbar />
      <HomeBody />
      <ContactMe />
    </div>
  );
};
