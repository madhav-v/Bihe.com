import React from "react";

function NewProgressBar({ currentFormCount, setCurrentFormCount }) {
  const stepPercentages = [15, 30, 45, 60, 75];

  return (
    <div className="relative w-[80%] h-[7px] mx-auto rounded-2xl mt-16 bg-black">
      <div className={`h-full flex justify-evenly items-center bg-[#e48e94]`}>
        {stepPercentages.map((percentage, index) => (
          <div
            key={index}
            className={`p-2 rounded-[50%] border-4 absolute top-[-100%] left-[${percentage}%] ${
              currentFormCount >= index
                ? "border-[#ff141b] bg-white"
                : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default NewProgressBar;
