import Input from "../../components/ProfileForm/input";
import InputSelect from "../../components/ProfileForm/select";

const ThirdForm = (thirdFormValues, setThirdFormValues) => {
  const educationQualificationOptions = [
    { value: "undergraduate", label: "Undergraduate" },
    { value: "graduate", label: "Graduate" },
    { value: "doctarate", label: "P.h.d/Doctorate" },
    { value: "highSchool", label: "High School" },
    { value: "literate", label: "Literate" },
    { value: "illiterate", label: "Illiterate" },
  ];
  const sectorOptions = [
    { value: "private", label: "Private Company" },
    { value: "government", label: "Government" },
    { value: "ngo", label: "NGO's/INGO's" },
    { value: "selfEmployed", label: "Self Employed" },
    { value: "unEmployed", label: "Unemployed" },
  ];
  const annualIncomeOptions = [
    { value: "2L", label: "Upto 2L" },
    { value: "3L", label: "Upto 3L" },
    { value: "3L-4L", label: "3L-4L" },
    { value: "4L-5L", label: "4L-5L" },
    { value: "5L-6L", label: "5L-6L" },
    { value: "6L-7L", label: "6L-7L" },
    { value: "7L-8L", label: "7L-8L" },
    { value: "8L-9L", label: "8L-9L" },
    { value: "9L-10L", label: "9L-10L" },
    { value: "10L-15L", label: "10L-15L" },
    { value: "15L-20L", label: "15L-20L" },
    { value: "20L-30L", label: "20L-30L" },
    { value: "abover30L", label: "Above 30L" },
  ];
  const occupationOptions = [
    { value: "student", label: "Student" },
    { value: "employed", label: "Employed" },
    { value: "business", label: "Business Owner" },
    { value: "freelancer", label: "Freelancer" },
    { value: "homemaker", label: "Homemaker" },
    { value: "unemployed", label: "Unemployed" },
    { value: "retired", label: "Retired" },
    { value: "other", label: "Other" },
    // Add more occupation options as needed
  ];

  return (
    <>
      <div className="mt-8 min-h-full mb-8 px-2 py-4  w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-white  rounded-lg mx-auto">
        <form className="mx-auto">
          <h1 className="text-2xl w-[90%] font-bold mx-auto">
            Education Information
          </h1>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              value={thirdFormValues.education_degree}
              //   onChange={handleEducationalQualification}
              label="Education Qualification"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={educationQualificationOptions}
            />
            <Input
              value={thirdFormValues.college}
              //   onChange={(e) => handleInputChange(e)}
              name="college"
              label="College Name"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl my-2"
              type="text"
              placeholder="Enter College Name"
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              value={thirdFormValues.occupation}
              // onChange={handleSubjectChange}
              label="Occupation"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={occupationOptions}
            />
            <InputSelect
              value={thirdFormValues.sector}
              // onChange={handleSubjectChange}
              label="Field/Subject/Program"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={sectorOptions}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              //   onChange={handleAnnualIncomeChange}
              value={thirdFormValues.annualIncome}
              label="Annual Income"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={annualIncomeOptions}
            />
            <Input
              value={thirdFormValues.companyName}
              //   onChange={(e) => handleInputChange(e)}
              name="college"
              label="Company Name"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="text"
              placeholder="Enter Company Name"
            />
          </div>
          <label htmlFor="image" className="text-md lg:text-xl xl:text-2xl ">
            Profile Image
          </label>
          <label
            htmlFor="image"
            className="cursor-pointer block w-32 h-32 bg-red-500 text-white font-medium py-2 px-4 rounded-lg text-center"
          >
            Choose File
          </label>
          <input
            type="file"
            name="image"
            className="hidden"
            required
            accept="image/*"
          />
        </form>
      </div>
    </>
  );
};

export default ThirdForm;
