import Input from "../../components/ProfileForm/input";
import InputSelect from "../../components/ProfileForm/select";

const FourthForm = (fourthFormValues, setFourthFormValues) => {
  const heightOptions = [
    { value: "4ft 5in - 134cm", label: "4ft 5in - 134cm" },
    { value: "4ft 6in - 137cm", label: "4ft 6in - 137cm" },
    { value: "4ft 7in - 139cm", label: "4ft 7in - 139cm" },
    { value: "4ft 8in - 142cm", label: "4ft 8in - 142cm" },
    { value: "4ft 9in - 144cm", label: "4ft 9in - 144cm" },
    { value: "4ft 10in - 147cm", label: "4ft 10in - 147cm" },
    { value: "4ft 11in - 149cm", label: "4ft 11in - 149cm" },
    { value: "5ft 0in - 152cm", label: "5ft 0in - 152cm" },
    { value: "5ft 1in - 154cm", label: "5ft 1in - 154cm" },
    { value: "5ft 2in - 157cm", label: "5ft 2in - 157cm" },
    { value: "5ft 3in - 159cm", label: "5ft 3in - 159cm" },
    { value: "5ft 4in - 162cm", label: "5ft 4in - 162cm" },
    { value: "5ft 5in - 164cm", label: "5ft 5in - 164cm" },
    { value: "5ft 6in - 167cm", label: "5ft 6in - 167cm" },
    { value: "5ft 7in - 169cm", label: "5ft 7in - 169cm" },
    { value: "5ft 8in - 172cm", label: "5ft 8in - 172cm" },
    { value: "5ft 9in - 174cm", label: "5ft 9in - 174cm" },
    { value: "5ft 10in - 177cm", label: "5ft 10in - 177cm" },
    { value: "5ft 11in - 179cm", label: "5ft 11in - 179cm" },
    { value: "6ft 0in - 182cm", label: "6ft 0in - 182cm" },
    { value: "6ft 1in - 184cm", label: "6ft 1in - 184cm" },
    { value: "6ft 2in - 187cm", label: "6ft 2in - 187cm" },
    { value: "6ft 3in - 189cm", label: "6ft 3in - 189cm" },
    { value: "6ft 4in - 192cm", label: "6ft 4in - 192cm" },
  ];
  const religionOptions = [
    { value: "hindu", label: "Hinduism" },
    { value: "buddhist", label: "Buddhism" },
    { value: "islam", label: "Islam" },
    { value: "christianity", label: "Christianity" },
    { value: "sikh", label: "Sikhism" },
    { value: "Jain", label: "Jainism" },
    { value: "kirat", label: "Kirat" },
    { value: "no", label: "Non-Religious" },
    { value: "other", label: "Other" },
  ];
  const casteOptions = [
    { value: "brahmin", label: "Brahmin" },
    { value: "chhetri", label: "chhetri" },
    { value: "thakuri", label: "Thakuri" },
    { value: "magar", label: "Magar" },
    { value: "tamang", label: "Tamang" },
    { value: "sherpa", label: "Sherpa" },
    { value: "newar", label: "Newar" },
  ];
  const educationQualificationOptions = [
    { value: "undergraduate", label: "Undergraduate" },
    { value: "graduate", label: "Graduate" },
    { value: "doctarate", label: "P.h.d/Doctorate" },
    { value: "highSchool", label: "High School" },
    { value: "literate", label: "Literate" },
    { value: "illiterate", label: "Illiterate" },
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
  return (
    <>
      <div className="mt-8 min-h-full mb-8 px-2 py-4  w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-white  rounded-lg mx-auto">
        <form className="mx-auto">
          <h1 className="text-2xl w-[90%] font-bold mx-auto">
            Preference Information
          </h1>
          <div className="w-full flex justify-around items-center">
            <Input
              value={fourthFormValues.preferredMinAge}
              //   onChange={(e) => handleInputChange(e)}
              name="preferredMinAge"
              label="Minimun Age"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="number"
              placeholder="Enter Your Preferred Minimun Age"
            />
            <Input
              value={fourthFormValues.preferredMaxAge}
              //   onChange={(e) => handleInputChange(e)}
              name="preferredMaxAge"
              label="Maximun Age"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="number"
              placeholder="Enter Your Preferred Maximun Age"
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              value={fourthFormValues.preferredMinHeight}
              //   onChange={handleHeightChange}
              label="Minimum Height "
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={heightOptions}
            />
            <InputSelect
              value={fourthFormValues.preferredMaxHeight}
              //   onChange={handleHeightChange}
              label="Maximum Height "
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={heightOptions}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              value={fourthFormValues.preferredReligion}
              // onChange={handleReligionChange}
              label="Preferred Religion"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[70%] basis-[40%]"
              options={religionOptions}
            />
            <InputSelect
              value={fourthFormValues.preferredCaste}
              //   onChange={handleCasteChange}
              label="Preferred Caste"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={casteOptions}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              value={fourthFormValues.preferredEducation_degree}
              //   onChange={handleEducationalQualification}
              label="Preferred Education Qualification"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={educationQualificationOptions}
            />
            <InputSelect
              value={fourthFormValues.preferredOccupation}
              // onChange={handleSubjectChange}
              label="Preferred Occupation"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={occupationOptions}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              value={fourthFormValues.preferredCasre}
              // onChange={handleSubjectChange}
              label="Preffered Field/Subject/Program"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={sectorOptions}
            />
            <InputSelect
              //   onChange={handleAnnualIncomeChange}
              value={fourthFormValues.preferredAnnualIncome}
              label="Preffered Annual Income"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={annualIncomeOptions}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FourthForm;
