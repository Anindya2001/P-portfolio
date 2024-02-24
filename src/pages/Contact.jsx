import React from "react";
import { FaXTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export const ContactMe = () => {
  const handleTwitterClick = () => {
    window.open("https://twitter.com/daark_cloud_1", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/pranav-kumar-54906b257", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:pranavwrk0155@gmail.com";
  };

  return (
    <div className="flex justify-center item-center">
      <div>
        <h1 className="text-4xl m-1">Contact Me: </h1>
      </div>
      <div className="flex text-3xl m-3">
        <FaEnvelope
          className="mx-2"
          onClick={handleEmailClick}
          style={{ cursor: "pointer", marginLeft: "10px" }}
        />
        <FaLinkedin
          className="mx-2"
          onClick={handleLinkedInClick}
          style={{ cursor: "pointer", marginLeft: "10px" }}
        />
        <FaXTwitter
          className="mx-2"
          onClick={handleTwitterClick}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};
