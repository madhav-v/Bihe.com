import Input from "../../components/ProfileForm/input";
import InputSelect from "../../components/ProfileForm/select";

const SecondForm = (secondFormValues, setSecondValues) => {
  const familytypeOptions = [
    { value: "nuclear", label: "Nuclear" },
    { value: "joint", label: "Joint" },
    { value: "nofamily", label: "No Family/Orphan" },
  ];
  const familyValueOptions = [
    { value: "traditional", label: "Traditional" },
    { value: "moderate", label: "Moderate" },
    { value: "liberal", label: "Liberal" },
  ];
  const parentStatusOptions = [
    { value: "bothAlive", label: "Both Alive" },
    { value: "fatherPassedAway", label: "Father Passed Away" },
    { value: "motherPassedAway", label: "Mother Passed Away" },
    { value: "bothPassedAway", label: "Both Passed Away" },
  ];
  const gotraOptions = [
    { value: "Bharadwaj", label: "Bharadwaj" },
    { value: "Vashishtha", label: "Vashishtha" },
    { value: "Kashyapa", label: "Kashyapa" },
    { value: "Garg", label: "Garg" },
    { value: "Vatsa", label: "Vatsa" },
    { value: "Shandilya", label: "Shandilya" },
    { value: "Atri", label: "Atri" },
    { value: "Dhanvantari", label: "Dhanvantari" },
    { value: "Gautam", label: "Gautam" },
    { value: "Kaushik", label: "Kaushik" },
    { value: "Jamadagni", label: "Jamadagni" },
    { value: "Parashara", label: "Parashara" },
    { value: "Vishwamitra", label: "Vishwamitra" },
    { value: "Bhrigu", label: "Bhrigu" },
    { value: "Shukla", label: "Shukla" },
    { value: "Sharma", label: "Sharma" },
    { value: "Chaturvedi", label: "Chaturvedi" },
    { value: "Pandey", label: "Pandey" },
    { value: "Upadhyay", label: "Upadhyay" },
    { value: "Joshi", label: "Joshi" },
    { value: "Goswami", label: "Goswami" },
    { value: "Saraswat", label: "Saraswat" },
    // Add more Gotra options as needed
  ];

  return (
    <>
      <div className="mt-8 min-h-full mb-8 px-2 py-4  w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-white  rounded-lg mx-auto">
        <form className="mx-auto">
          <h1 className="text-2xl w-[90%] font-bold mx-auto">
            Family Information
          </h1>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              value={secondFormValues.familyType}
              // onChange={handleFamilyTypeChange}
              label="Family Type"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={familytypeOptions}
            />
            <InputSelect
              value={secondFormValues.familyValue}
              // onChange={handleFamilyValueChange}
              label="Family Values"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={familyValueOptions}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              value={secondFormValues.parentStatus}
              // onChange={handleParentStatusChange}
              label="Parent Status"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={parentStatusOptions}
            />
            <Input
              value={secondFormValues.noOfSiblings}
              //   onChange={(e) => handleInputChange(e)}
              name="noOfSiblings"
              label="Number of Siblings"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="number"
              placeholder="Enter Number of Siblings"
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <Input
              value={secondFormValues.noOfFamilyMembers}
              //   onChange={(e) => handleInputChange(e)}
              name="noOfFamilyMembers"
              label="Number of Family Members"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="number"
              placeholder="Enter Number of Family Member"
            />
            <Input
              value={secondFormValues.familyAddress}
              //   onChange={(e) => handleInputChange(e)}
              name="familyAddress"
              label="Family Address"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="text"
              placeholder="Enter Family Address"
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <Input
              value={secondFormValues.motherTongue}
              //   onChange={(e) => handleInputChange(e)}
              name="motherTongue"
              label="Mother Tongue"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="texr"
              placeholder="Enter Your Mother Tongue"
            />
            <InputSelect
              value={secondFormValues.gotra}
              // onChange={handleParentStatusChange}
              label="Gotra"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={gotraOptions}
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default SecondForm;
