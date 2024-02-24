import { Appbar } from "../components/Appbar";
export const Resume = () => {
  const handleClick = async () => {
    try {
      const driveLink =
        "https://drive.google.com/file/d/19E-fCt9CTKibh6s7KJ3A0VxI1EIXHYCj/view?usp=drivesdk";
      const response = await fetch(driveLink, {
        headers: {
          "Content-Type": "application/pdf",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch PDF");
      }
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = "Pranav_Kumar_Resume.pdf";
      anchor.click();
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div className="bg-gray-200">
      <Appbar />
      <div className="flex justify-center item-center m-2 p-2">
        <img
          src="https://res.cloudinary.com/dcjpwnsx2/image/upload/c_scale,w_780/extras/Resume.jpg"
          alt="resume"
          className="shadow-lg"
        />
      </div>
      <div className="flex justify-center item-center">
        <button
          onClick={handleClick}
          className="border border-black text-white bg-black rounded-lg text-lg p-2 m-1"
        >
          Download Resumes
        </button>
      </div>
    </div>
  );
};
