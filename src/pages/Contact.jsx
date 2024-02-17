export const ContactMe = () => {
  const mailtoHref =
    "mailto:?to=support@example.com&subject=SendMail&body=Description";
  return (
    <div className="h-screen bg-gray-200">
      <div className="flex">
        <div className="text-xl p-2 m-2">Email: pranavwrk0155@gmail.com</div>
        <a
          href={mailtoHref}
          className="bg-red-500 hover:bg-red-700 border-2 border-black m-2 p-2 my-1000 rounded-md"
        >
          Send email
        </a>
        
      </div>
    </div>
  );
};
