import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { FileUpload } from "../components/ui/file-upload";

export const InputBox = ({ placeholder }) => {
  return (
    <input
      type="text"
      className="w-full px-2 py-1 border-2 rounded-md"
      placeholder={placeholder}
    />
  );
};

export const Checkbox = ({ label }) => {
  return (
    <div className="flex items-center">
      <input type="checkbox" className="mr-2" />
      <label>{label}</label>
    </div>
  );
};

const Form = () => {
  const inputPlaceholders = [
    "Your Team Name",
    "Your College Name",
    "Team Leader / Member One",
    "Member Two (Optional)",
    "Member Three (Optional)",
    "Email",
    "Mobile Number",
  ];

  const checkboxLabels = [
    "Knowledge Bowl (2 M/E)",
    "Quizardry (2 M/E)",
    "Tech Vein (3 M/E)",
    "Design (1 M/E)",
    "CodeLog (1 M/E)",
  ];

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-800">
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="relative z-10 w-[90%] lg:w-[50%] border-2 flex flex-col gap-4 px-5 py-5 bg-white bg-opacity-60 rounded-lg">
        {inputPlaceholders.map((placeholder, index) => (
          <InputBox key={index} placeholder={placeholder} />
        ))}
        {checkboxLabels.map((label, index) => (
          <Checkbox key={index} label={label} />
        ))}
        <div>
          {/* <FileUpload /> */}
        </div>
      </div>
    </div>
  );
};

export default Form;
