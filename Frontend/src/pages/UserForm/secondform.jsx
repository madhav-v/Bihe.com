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
  // const { familyDetail } = useSelector((state) => state.familyDetail);

  const dispatch = useDispatch();

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

  const liveWithFamilyOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
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

  const handleInputChange = (e) => {
    setSecondFormValues({
      ...secondFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFamilyTypeChange = (values) => {
    setSecondFormValues({ ...secondFormValues, familyType: values.value });
  };

  const handleYouLiveWithFamilyChange = (values) => {
    setSecondFormValues({ ...secondFormValues, liveWithFamily: values.value });
  };

  const handleFamilyValuesChange = (values) => {
    setSecondFormValues({ ...secondFormValues, familyValues: values.value });
  };

  const handleParentStatusChange = (values) => {
    setSecondFormValues({ ...secondFormValues, parentStatus: values.value });
  };

  return (
    <div className="mt-16 min-h-full mb-8 px-2 py-4  w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-white rounded-lg mx-auto">
      {/* <h1 className="text-2xl w-full text-center font-semibold xl:text-4xl my-4">Some Personal details</h1> */}

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
          {/* <InputSelect label="Father's Status" classes1="block text-2xl my-2" classes2="xl:w-[70%] basis-[40%]" /> */}
        </div>

        <div className="w-full flex justify-around items-center">
          {/* <Input label="No of sibling" type="number" classes1="block text-2xl my-2" classes2="xl:w-[60%] basis-[40%]" options={genderOptions} /> */}
          <Input
            value={secondFormValues.noOfSiblings}
            onChange={handleInputChange}
            name="noOfSiblings"
            label="No of Sibling"
            classes3="w-[40%]"
            classes="px-2"
            classes2="block xl:text-xl lg:text-lg"
            type="number"
            placeholder="Enter full Name"
          />
          <InputSelect
            value={secondFormValues.liveWithFamily}
            onChange={handleYouLiveWithFamilyChange}
            label="Do you live with your family"
            classes1="block text-md lg:text-lg xl:text-xl my-2"
            classes2="xl:w-[40%] basis-[40%]"
            options={liveWithFamilyOptions}
          />
        </div>

        <div className="w-full flex justify-around items-center">
          {/* <InputSelect label="N" classes1="block text-2xl my-2" classes2="xl:w-[70%] basis-[40%]" options={familytypeOptions}  /> */}
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
          {/* <InputSelect label="Father's Status" classes1="block text-2xl my-2" classes2="xl:w-[70%] basis-[40%]" /> */}
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
          {/* <Input label="Enter your Gotra" type="text" classes1="block text-2xl my-2" classes2="xl:w-[60%] basis-[40%]" options={genderOptions} /> */}
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
          <InputSelect
            value={secondFormValues.familyValues}
            onChange={handleFamilyValuesChange}
            label="Family Values"
            classes1="block text-md lg:text-lg xl:text-xl my-2"
            classes2="xl:w-[40%] basis-40%]"
            options={familyValueOptions}
          />
        </div>

        <div className="w-full flex justify-around items-center">
          <InputSelect
            value={secondFormValues.parentStatus}
            onChange={handleParentStatusChange}
            label="Parent Status"
            classes1="block text-md lg:text-lg xl:text-xl my-2"
            classes2="xl:w-[40%] basis-[40%]"
            options={parentStatusOptions}
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

        <div className="w-[90%] mx-auto flex justify-between items-center"></div>

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

        {/* <button className="btnprev" onClick={() => handlePrevClick()}>
            <HiChevronDoubleLeft /> Prev
          </button>
    
          <button type="submit" className="btnnext">
            Next <HiChevronDoubleRight /> */}
        {/* </button> */}
      </form>
    </div>
  );
}

export default SecondForm;
