import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ProfileForm/input";
import InputSelect from "../../components/ProfileForm/select";
import Button from "../../components/ProfileForm/profilebutton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFamilyDetail } from "../../config/setFamilyDetailSlice";

function SecondForm({
  secondFormValues,
  setSecondFormValues,
  setCurrentFormCount,
  currentFromCount,
}) {

  const handlePrevClick = () => {
    setCurrentFormCount((prev) => prev - 1);
  };
  const handleNextClick = () => {
    setCurrentFormCount((prev) => prev + 1);
  };

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


  const handleInputChange = (e) => {
    setSecondFormValues({
      ...secondFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFamilyTypeChange = (values) => {
    setSecondFormValues({ ...secondFormValues, familyType: values.value });
  };

  const handleFamilyValuesChange = (values) => {
    setSecondFormValues({ ...secondFormValues, familyValues: values.value });
  };

  return (
    <div className="mt-16 min-h-full mb-8 px-2 py-4  w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-white rounded-lg mx-auto">
      <form className=" mx-auto">
        <h1 className="text-2xl font-bold w-[90%] mx-auto">
          Family Information
        </h1>

        <div className="w-full flex justify-around items-center">
          <InputSelect
            value={secondFormValues.familyType}
            onChange={handleFamilyTypeChange}
            label="Family Type"
            classes1="block text-md lg:text-lg xl:text-xl my-2"
            classes2="xl:w-[40%] basis-[40%]"
            options={familytypeOptions}
          />
          <InputSelect
            value={secondFormValues.familyValues}
            onChange={handleFamilyValuesChange}
            label="Family Values"
            classes1="block text-md lg:text-lg xl:text-xl my-2"
            classes2="xl:w-[40%] basis-[40%]"
            options={familyValueOptions}
          />
        </div>
        <div className="w-full flex justify-around items-center">
          <Input
            value={secondFormValues.noOfSiblings}
            onChange={handleInputChange}
            name="noOfSiblings"
            label="No of Sibling"
            classes3="w-[40%]"
            classes="px-2"
            classes2="block xl:text-xl lg:text-lg"
            type="number"
            placeholder="Number of Siblings"
          />
          <Input
            value={secondFormValues.noOfFamilyMember}
            onChange={handleInputChange}
            name="noOfFamilyMember"
            label="No of family Members"
            classes3="w-[40%]"
            classes="px-2"
            classes2="block xl:text-xl lg:text-lg"
            type="number"
            placeholder="Family Member Number"
          />
        </div>

        <div className="w-full flex justify-around items-center">
          <Input
            value={secondFormValues.nativePlace}
            onChange={handleInputChange}
            name="nativePlace"
            label="Native/Ancestors Place"
            classes3="w-[40%]"
            classes="px-2"
            classes2="block xl:text-xl lg:text-lg"
            type="text"
            placeholder="Native Place"
          />
          <Input
            value={secondFormValues.motherTongue}
            onChange={handleInputChange}
            name="motherTongue"
            label="Mother Tongue"
            classes3="w-[40%]"
            classes="px-2"
            classes2="block text-md lg:text-lg xl:text-xl"
            type="text"
            placeholder="Enter your mother tongue"
          />
        </div>

        <div className="w-full flex justify-around items-center">
          <Input
            value={secondFormValues.gotra}
            name="gotra"
            onChange={handleInputChange}
            label="Enter your gotra"
            classes3="w-[40%]"
            classes="px-2"
            classes2="block text-md lg:text-lg xl:text-xl"
            type="text"
            placeholder="Enter your gotra (if applied)"
          />
          <Input
            name="familyAddress"
            value={secondFormValues.familyAddress}
            onChange={handleInputChange}
            label="Where do your family live ?"
            classes3="w-[40%]"
            classes="px-2"
            classes2="block xl:text-xl lg:text-lg"
            type="text"
            placeholder="Enter your family location"
          />
        </div>

        <div className="w-full flex justify-around">
          <Button
            label="Previous"
            classes="px-16 py-3 rounded-xl btnnext text-white"
            classes2="w-full flex justify-center py-4"
            onClick={() => handlePrevClick()}
          />
          <Button
            label="Next"
            classes="px-16 py-3 rounded-xl btnnext text-white"
            classes2="w-full flex justify-center py-4"
            onClick={() => handleNextClick()}
          />
        </div>
      </form>
    </div>
  );
}

export default SecondForm;
