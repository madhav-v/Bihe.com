import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ProfileForm/input";
import InputSelect from "../../components/ProfileForm/select";
import Button from "../../components/ProfileForm/profilebutton";
import { useDispatch, useSelector } from "react-redux";
// import { setPreferanceDetail } from '../../store/features/preferanceDetailSlice';

function FourthForm({
  fourthFormValues,
  setFourthFormValues,
  setCurrentFormCount,
  currentFromCount,
}) {
  // const { preferanceDetail } = useSelector((state) => state.preferanceDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePrevClick = () => {
    setCurrentFormCount((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setCurrentFormCount((prev) => prev + 1);
  };

  const fromheightOptions = [
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

  const toheightOptions = [
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

  const maritalStatusOptions = [
    { value: "unmarried", label: "Unmarried" },
    { value: "awatingdivorce", label: "Awating Divorce" },
    { value: "divorced", label: "Divorced" },
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
  const subjectOptions = [
    { value: "engineering", label: "Engineering/" },
    { value: "medical", label: "Medical" },
    { value: "business", label: "Business" },
    { value: "law", label: "Law" },
    { value: "socialScience", label: "Social Science" },
    { value: "commerce", label: "Commerce/Finance" },
    { value: "agriculture", label: "Agriculture" },
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

  const educationQualificationOptions = [
    { value: "undergraduate", label: "Undergraduate" },
    { value: "graduate", label: "Graduate" },
    { value: "doctarate", label: "P.h.d/Doctorate" },
    { value: "highSchool", label: "High School" },
    { value: "literate", label: "Literate" },
    { value: "illiterate", label: "Illiterate" },
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

  const sectorOptions = [
    { value: "private", label: "Private Company" },
    { value: "government", label: "Government" },
    { value: "ngo", label: "NGO's/INGO's" },
    { value: "selfEmployed", label: "Self Employed" },
    { value: "unEmployed", label: "Unemployed" },
  ];

  const handleInputChange = (e) => {
    setFourthFormValues({
      ...fourthFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleMinHeightChange = (values) => {
    setFourthFormValues({ ...fourthFormValues, minHeight: values.value });
  };

  const handleMaxHeightChange = (values) => {
    setFourthFormValues({ ...fourthFormValues, maxHeight: values.value });
  };

  const handleMaritalStatusChange = (values) => {
    setFourthFormValues({ ...fourthFormValues, maritalStatus: values.value });
  };
  const handleReligionChange = (values) => {
    setFourthFormValues({ ...fourthFormValues, religion: values.value });
  };

  const handleCasteChange = (values) => {
    setFourthFormValues({ ...fourthFormValues, caste: values.value });
  };

  const handleEducationalQualificationChange = (values) => {
    setFourthFormValues({ ...fourthFormValues, education: values.value });
  };

  const handleSubjectChange = (values) => {
    setFourthFormValues({ ...fourthFormValues, subject: values.value });
  };

  const handleAnnualIncomeChange = (values) => {
    setFourthFormValues({ ...fourthFormValues, annualIncome: values.value });
  };

  const handleSectorChange = (values) => {
    setFourthFormValues({ ...fourthFormValues, sector: values.value });
  };

  const handleMotherTongueChange = (values) => {
    setFourthFormValues({ ...fourthFormValues, motherTongue: values.value });
  };

  return (
    <div className="mt-16 min-h-full mb-8 px-2 py-4  w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-white  rounded-lg mx-auto">
      <form className=" mx-auto">
        <h1 className="text-2xl w-[90%] mx-auto mb-1 font-bold">
          Partner Preferance detail{" "}
        </h1>

        <div className="w-[90%] mx-auto flex flex-col justify-start items-center">
          <div className="flex w-[100%] justify-between mt-0">
            <Input
              name="minAge"
              value={fourthFormValues.minAge}
              onChange={handleInputChange}
              label="Minimum Age"
              classes3="w-[45%]"
              classes="px-2"
              classes2="block text-md lg:text-lg xl:text-xl"
              type="number"
              placeholder="Preferred Minimun Age"
            />
            <Input
              name="maxAge"
              value={fourthFormValues.maxAge}
              onChange={handleInputChange}
              label="Maximum Age"
              classes3="w-[45%]"
              classes="px-2"
              classes2="block text-md lg:text-lg xl:text-xl"
              type="number"
              placeholder="Preferred Maximum Age"
            />
          </div>
        </div>

        <div className="w-[90%] mx-auto flex flex-col justify-start items-center">
          <div className="flex w-full justify-between">
            <InputSelect
              value={fourthFormValues.minHeight}
              onChange={handleMinHeightChange}
              placeholder="From"
              label="Minimun Height"
              classes1="block text-md lg:text-lg 2xl:text-xl my-1"
              classes2="xl:w-[45%] basis-[45%] "
              options={fromheightOptions}
            />
            <InputSelect
              placeholder="To"
              value={fourthFormValues.maxHeight}
              label="Maximum Height"
              onChange={handleMaxHeightChange}
              classes1="block text-md lg:text-lg 2xl:text-xl my-1"
              classes2="xl:w-[45%] basis-[45%] "
              options={toheightOptions}
            />
          </div>
        </div>
        <div className="w-full flex justify-around items-center">
          <InputSelect
            value={fourthFormValues.religion}
            onChange={handleReligionChange}
            label="Religion"
            classes1="block text-md lg:text-lg 2xl:text-xl my-1"
            classes2="xl:w-[40%] basis-[40%]"
            options={religionOptions}
          />
          <InputSelect
            value={fourthFormValues.caste}
            onChange={handleCasteChange}
            label="Caste"
            classes1="block text-md lg:text-lg 2xl:text-xl my-1"
            classes2="xl:w-[40%] basis-[40%]"
            options={casteOptions}
          />
        </div>
        <div className="w-full flex justify-around items-center">
          <InputSelect
            value={fourthFormValues.education}
            onChange={handleEducationalQualificationChange}
            label="Educational Qualification"
            classes1="block text-md lg:text-lg 2xl:text-xl my-1"
            classes2="xl:w-[40%] basis-[40%]"
            options={educationQualificationOptions}
          />

          <InputSelect
            value={fourthFormValues.subject}
            onChange={handleSubjectChange}
            label="Subject"
            classes1="block text-md lg:text-lg 2xl:text-xl my-1"
            classes2="xl:w-[40%] basis-[40%]"
            options={subjectOptions}
          />
        </div>

        <div className="w-full flex justify-around items-center">
          <InputSelect
            value={fourthFormValues.sector}
            onChange={handleSectorChange}
            label="Sector working in"
            classes1="block text-md lg:text-lg 2xl:text-xl my-1"
            classes2="xl:w-[40%] basis-[40%]"
            options={sectorOptions}
          />
          <InputSelect
            value={fourthFormValues.annualIncome}
            onChange={handleAnnualIncomeChange}
            label="Annual Income"
            classes1="block text-md lg:text-lg 2xl:text-xl my-1"
            classes2="xl:w-[40%] basis-[40%]"
            options={annualIncomeOptions}
          />
        </div>

        <div className="w-full flex justify-around items-center">
          <InputSelect
            value={fourthFormValues.maritalStatus}
            onChange={handleMaritalStatusChange}
            label="Marital Status"
            classes1="block text-md lg:text-lg 2xl:text-xl my-1"
            classes2="xl:w-[40%] basis-[40%]"
            options={maritalStatusOptions}
          />
          <Input
            value={fourthFormValues.motherTongue}
            onChange={handleMotherTongueChange}
            label="Mother Tongue"
            classes3="w-[40%]"
            classes="px-2"
            classes2="block text-md lg:text-lg xl:text-xl"
            type="text"
            placeholder="Preferred mother tongue"
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
            type="submit"
            label="Next"
            onClick={() => handleNextClick()}
            classes="px-16 py-3 rounded-xl btnnext text-white"
            classes2="w-full flex justify-center py-4"
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

export default FourthForm;
