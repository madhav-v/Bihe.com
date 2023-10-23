import Input from "../../components/ProfileForm/input";
import InputSelect from "../../components/ProfileForm/select";

const FirstForm = (firstFormValues, setFirstFormValues) => {
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
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
  const maritalStatusOptions = [
    { value: "unmarried", label: "Unmarried" },
    { value: "awatingdivorce", label: "Awating Divorce" },
    { value: "divorced", label: "Divorced" },
  ];
  const smokeOrDrinkOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

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

  const disabilityOptions = [
    { value: "no", label: "No" },
    { value: "physicalDisability", label: "Physical Disability" },
  ];
  return (
    <>
      <div className="mt-8 min-h-full mb-8 px-2 py-4  w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-white  rounded-lg mx-auto">
        <h1 className="text-2xl w-full text-center font-semibold xl:text-3xl my-4">
          Let's setup your profile.
        </h1>

        <form className="mx-auto">
          <h1 className="text-2xl w-[90%] font-bold mx-auto">
            Basic Information
          </h1>

          <div className="w-full flex justify-around items-center">
            <Input
              value={firstFormValues.fullname}
              //   onChange={(e) => handleInputChange(e)}
              name="fullname"
              label="Full Name"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="text"
              placeholder="Enter Full Name"
            />
            <InputSelect
              value={firstFormValues.sex}
              //   onChange={handleGenderChange}
              label="Gender"
              classes1="block text-xl my-1"
              classes2="xl:w-[40%] basis-[40%]"
              options={genderOptions}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              value={firstFormValues.religion}
              // onChange={handleReligionChange}
              label="Religion"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[70%] basis-[40%]"
              options={religionOptions}
            />
            <InputSelect
              value={firstFormValues.caste}
              //   onChange={handleCasteChange}
              label="Caste"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={casteOptions}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <Input
              value={firstFormValues.dateOfBirth}
              name="dateOfBirth"
              label="Date of Birth"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="date" // Set the input type to "date"
              placeholder="Select Date of Birth"
            />
            <InputSelect
              value={firstFormValues.marital_status}
              //   onChange={handleMaritalStatusChange}
              label="Marital Status"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={maritalStatusOptions}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              value={firstFormValues.height}
              //   onChange={handleHeightChange}
              label="Your Height "
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={heightOptions}
            />
            <InputSelect
              value={firstFormValues.physicalDisability}
              //   onChange={handlePhysicalDisabilityChange}
              label="Any Disability"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={disabilityOptions}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <Input
              value={firstFormValues.address}
              //   onChange={handleInputChange}
              name="address"
              label="Where do you live ?"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block xl:text-xl xl:text-xl lg:text-lg"
              type="text"
              placeholder="Enter your current address"
            />
            <InputSelect
              value={firstFormValues.smokeOrDrink}
              label="Smoke or Drink"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={smokeOrDrinkOptions}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FirstForm;