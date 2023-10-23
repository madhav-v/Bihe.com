import { useState } from "react";
import Input from "../../components/ProfileForm/input";
import InputSelect from "../../components/ProfileForm/select";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import profileSvc from "../../services/profile.service";
import Loading from "../error/loading";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const ProfileSchema = Yup.object({
    fullname: Yup.string().required(),
    sex: Yup.string().required(),
    religion: Yup.string().required(),
    caste: Yup.string().required(),
    dateOfBirth: Yup.string().required(),
    maritalStatus: Yup.string().required(),
    height: Yup.string().required(),
    physicalDisability: Yup.string().required(),
    address: Yup.string().required(),
    smokeOrDrink: Yup.string().required(),
    familyType: Yup.string().required(),
    familyValue: Yup.string().required(),
    parentalStatus: Yup.string().required(),
    numberOfSiblings: Yup.string().required(),
    numberOfFamilyMembers: Yup.string().required(),
    familyAddress: Yup.string().required(),
    motherTongue: Yup.string().required(),
    gotra: Yup.string().required(),
    educationalDegree: Yup.string().required(),
    college: Yup.string().required(),
    occupation: Yup.string().required(),
    sector: Yup.string().required(),
    annualIncome: Yup.string().required(),
    companyName: Yup.string().required(),
    maxAge: Yup.string().required(),
    minHeight: Yup.string().required(),
    maxHeight: Yup.string().required(),
    minAge: Yup.string().required(),
    preferredReligion: Yup.string().required(),
    preferredCaste: Yup.string().required(),
    preferredEducation: Yup.string().required(),
    preferredOccupation: Yup.string().required(),
    preferredCaste: Yup.string().required(),
    preferredSector: Yup.string().required(),
    preferredAnnualIncome: Yup.string().required(),
    preferredMaritalStatus: Yup.string().required(),
    preferredMotherTongue: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      fullname: "",
      sex: "",
      religion: "",
      caste: "",
      dateOfBirth: "",
      maritalStatus: "",
      height: "",
      physicalDisability: "",
      address: "",
      smokeOrDrink: "",
      familyType: "",
      familyValue: "",
      parentalStatus: "",
      numberOfSiblings: "",
      numberOfFamilyMembers: "",
      familyAddress: "",
      motherTongue: "",
      gotra: "",
      educationalDegree: "",
      college: "",
      occupation: "",
      sector: "",
      annualIncome: "",
      companyName: "",
      minAge: "",
      maxAge: "",
      minHeight: "",
      maxHeight: "",
      preferredReligion: "",
      preferredCaste: "",
      preferredEducation: "",
      preferredOccupation: "",
      preferredCaste: "",
      preferredSector: "",
      preferredAnnualIncome: "",
      preferredMotherTongue: "",
      preferredMaritalStatus: "",
    },
    validationSchema: ProfileSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const res = await profileSvc.createProfile(values);
        if (res) {
          setIsLoading(false);
        }
        toast.success("Profile Created Successfully");
      } catch (exception) {
        setIsLoading(false);
        toast.error("Cannot Create Profile at this moment");
        console.log(exception);
      }
    },
  });
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
  ];
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
  ];
  return (
    <>
      <div className="mt-0 min-h-full mb-8 px-2 py-4  w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-red-50  rounded-lg mx-auto">
        {isLoading && <Loading />}
        <h1 className="text-2xl w-full text-center font-semibold xl:text-3xl my-4">
          Let's setup your profile.
        </h1>

        <form className="mx-auto" onSubmit={formik.handleSubmit}>
          <h1 className="text-2xl w-[90%] font-bold mx-auto">
            Basic Information
          </h1>

          <div className="w-full flex justify-around items-center">
            <Input
              name="fullname"
              label="Full Name"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="text"
              placeholder="Enter Full Name"
              value={formik.values?.fullname}
              onChange={formik.handleChange}
            />
            <span className="text-red-500">{formik.errors.fullname}</span>
            <InputSelect
              value={formik.values?.sex}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  sex: selcOpt,
                });
              }}
              name="sex"
              label="Sex"
              classes1="block text-xl my-1"
              classes2="xl:w-[40%] basis-[40%]"
              options={genderOptions}
            />
            <span className="text-red-500">{formik.errors.sex}</span>
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              value={formik.values?.religion}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  religion: selcOpt,
                });
              }}
              name="religion"
              label="Religion"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[70%] basis-[40%]"
              options={religionOptions}
            />
            <span className="text-red-500">{formik.errors.religion}</span>

            <InputSelect
              value={formik.values?.caste}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  caste: selcOpt,
                });
              }}
              name="caste"
              label="Caste"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={casteOptions}
            />
            <span className="text-red-500">{formik.errors.caste}</span>
          </div>
          <div className="w-full flex justify-around items-center">
            <Input
              onChange={formik.handleChange}
              value={formik.values?.dateOfBirth}
              name="dateOfBirth"
              label="Date of Birth"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="date" // Set the input type to "date"
              placeholder="Select Date of Birth"
            />
            <span className="text-red-500">{formik.errors.dateOfBirth}</span>

            <InputSelect
              // value={firstFormValues.maritalStatus}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  maritalStatus: selcOpt,
                });
              }}
              name="maritalStatus"
              label="Marital Status"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={maritalStatusOptions}
            />
            <span className="text-red-500">{formik.errors.maritalStatus}</span>
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              // value={firstFormValues.height}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  height: selcOpt,
                });
              }}
              name="height"
              label="Your Height "
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={heightOptions}
            />
            <span className="text-red-500">{formik.errors.height}</span>

            <InputSelect
              // value={firstFormValues.physicalDisability}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  physicalDisability: selcOpt,
                });
              }}
              name="physicalDisability"
              label="Any Disability"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={disabilityOptions}
            />
            <span className="text-red-500">
              {formik.errors.physicalDisability}
            </span>
          </div>
          <div className="w-full flex justify-around items-center">
            <Input
              // value={firstFormValues.address}
              onChange={formik.handleChange}
              name="address"
              label="Where do you live ?"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block xl:text-xl xl:text-xl lg:text-lg"
              type="text"
              placeholder="Enter your current address"
            />
            <span className="text-red-500">{formik.errors.address}</span>

            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  smokeOrDrink: selcOpt,
                });
              }}
              name="smokeOrDrink"
              label="Smoke or Drink"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={smokeOrDrinkOptions}
            />
            <span className="text-red-500">{formik.errors.smokeOrDrink}</span>
          </div>
          <h1 className="mt-10 text-2xl w-[90%] font-bold mx-auto">
            Family Information
          </h1>
          <div className=" w-full flex justify-around items-center">
            <InputSelect
              // value={secondFormValues.familyType}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  familyType: selcOpt,
                });
              }}
              name="familyType"
              label="Family Type"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={familytypeOptions}
            />
            <span className="text-red-500">{formik.errors.familyType}</span>

            <InputSelect
              // value={secondFormValues.familyValue}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  familyValue: selcOpt,
                });
              }}
              name="familyValue"
              label="Family Values"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={familyValueOptions}
            />
            <span className="text-red-500">{formik.errors.familyValue}</span>
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              // value={secondFormValues.parentStatus}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  parentalStatus: selcOpt,
                });
              }}
              name="parentalStatus"
              label="Parent Status"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={parentStatusOptions}
            />
            <span className="text-red-500">{formik.errors.parentalStatus}</span>

            <Input
              // value={secondFormValues.numberOfSiblings}
              onChange={formik.handleChange}
              name="numberOfSiblings"
              label="Number of Siblings"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="number"
              placeholder="Enter Number of Siblings"
            />
            <span className="text-red-500">
              {formik.errors.numberOfSiblings}
            </span>
          </div>
          <div className="w-full flex justify-around items-center">
            <Input
              // value={secondFormValues.numberOfFamilyMembers}
              onChange={formik.handleChange}
              name="numberOfFamilyMembers"
              label="Number of Family Members"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="number"
              placeholder="Enter Number of Family Member"
            />
            <span className="text-red-500">
              {formik.errors.numberOfFamilyMembers}
            </span>

            <Input
              // value={secondFormValues.familyAddress}
              onChange={formik.handleChange}
              name="familyAddress"
              label="Family Address"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="text"
              placeholder="Enter Family Address"
            />
            <span className="text-red-500">{formik.errors.familyAddress}</span>
          </div>
          <div className="w-full flex justify-around items-center">
            <Input
              // value={secondFormValues.motherTongue}
              onChange={formik.handleChange}
              name="motherTongue"
              label="Mother Tongue"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="texr"
              placeholder="Enter Your Mother Tongue"
            />
            <span className="text-red-500">{formik.errors.motherTongue}</span>

            <InputSelect
              // value={secondFormValues.gotra}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  gotra: selcOpt,
                });
              }}
              name="gotra"
              label="Gotra"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={gotraOptions}
            />
            <span className="text-red-500">{formik.errors.gotra}</span>
          </div>
          <h1 className="mt-10 text-2xl w-[90%] font-bold mx-auto">
            Education Information
          </h1>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              // value={thirdFormValues.educationalDegree}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  educationalDegree: selcOpt,
                });
              }}
              name="educationalDegree"
              label="Education Qualification"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={educationQualificationOptions}
            />
            <span className="text-red-500">
              {formik.errors.educationalDegree}
            </span>

            <Input
              // value={thirdFormValues.college}
              onChange={formik.handleChange}
              name="college"
              label="College Name"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl my-2"
              type="text"
              placeholder="Enter College Name"
            />
            <span className="text-red-500">{formik.errors.college}</span>
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              // value={thirdFormValues.occupation}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  occupation: selcOpt,
                });
              }}
              name="occupation"
              label="Occupation"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={occupationOptions}
            />
            <span className="text-red-500">{formik.errors.occupation}</span>

            <InputSelect
              // value={thirdFormValues.sector}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  sector: selcOpt,
                });
              }}
              name="sector"
              label="Field/Subject/Program"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={sectorOptions}
            />
            <span className="text-red-500">{formik.errors.sector}</span>
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  annualIncome: selcOpt,
                });
              }}
              // value={thirdFormValues.annualIncome}
              name="annualIncome"
              label="Annual Income"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={annualIncomeOptions}
            />
            <span className="text-red-500">{formik.errors.annualIncome}</span>

            <Input
              // value={thirdFormValues.companyName}
              onChange={formik.handleChange}
              name="companyName"
              label="Company Name"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="text"
              placeholder="Enter Company Name"
            />
            <span className="text-red-500">{formik.errors.companyName}</span>
          </div>
          {/* <div className="w-full flex justify-around items-center">
            <label htmlFor="image" className="text-md lg:text-xl xl:text-2xl ">
              Profile Image
            </label>
            <label
              htmlFor="image"
              className="cursor-pointer block w-32  bg-red-500 text-white font-medium py-2 px-4 rounded-lg text-center"
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
          </div> */}
          <h1 className="mt-10 text-2xl w-[90%] font-bold mx-auto">
            Preference Information
          </h1>
          <div className="w-full flex justify-around items-center">
            <Input
              // value={fourthFormValues.preferredMinAge}
              onChange={formik.handleChange}
              name="minAge"
              label="Minimun Age"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="number"
              placeholder="Enter Your Preferred Minimun Age"
            />
            <span className="text-red-500">{formik.errors.minAge}</span>

            <Input
              // value={fourthFormValues.maxAge}
              onChange={formik.handleChange}
              name="maxAge"
              label="Maximun Age"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="number"
              placeholder="Enter Your Preferred Maximun Age"
            />
            <span className="text-red-500">{formik.errors.maxAge}</span>
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              // value={fourthFormValues.minHeight}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  minHeight: selcOpt,
                });
              }}
              name="minHeight"
              label="Minimum Height "
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={heightOptions}
            />
            <span className="text-red-500">{formik.errors.minHeight}</span>

            <InputSelect
              // value={fourthFormValues.maxHeight}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  maxHeight: selcOpt,
                });
              }}
              name="maxHeight"
              label="Maximum Height "
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={heightOptions}
            />
            <span className="text-red-500">{formik.errors.maxHeight}</span>
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              // value={fourthFormValues.preferredReligion}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  preferredReligion: selcOpt,
                });
              }}
              name="preferredReligion"
              label="Preferred Religion"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[70%] basis-[40%]"
              options={religionOptions}
            />
            <span className="text-red-500">
              {formik.errors.preferredReligion}
            </span>

            <InputSelect
              // value={fourthFormValues.preferredCaste}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  preferredCaste: selcOpt,
                });
              }}
              name="preferredCaste"
              label="Preferred Caste"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={casteOptions}
            />
            <span className="text-red-500">{formik.errors.preferredCaste}</span>
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              // value={fourthFormValues.preferredEducation_degree}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  preferredEducation: selcOpt,
                });
              }}
              name="preferredEducation"
              label="Preferred Education Qualification"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={educationQualificationOptions}
            />
            <span className="text-red-500">
              {formik.errors.preferredEducation}
            </span>

            <InputSelect
              // value={fourthFormValues.preferredOccupation}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  preferredOccupation: selcOpt,
                });
              }}
              name="preferredOccupation"
              label="Preferred Occupation"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={occupationOptions}
            />
            <span className="text-red-500">
              {formik.errors.preferredOccupation}
            </span>
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              // value={fourthFormValues.preferredCasre}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  preferredSector: selcOpt,
                });
              }}
              name="preferredSector"
              label="Preffered Field/Subject/Program"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={sectorOptions}
            />
            <span className="text-red-500">
              {formik.errors.preferredSector}
            </span>

            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  preferredAnnualIncome: selcOpt,
                });
              }}
              // value={fourthFormValues.preferredAnnualIncome}
              name="preferredAnnualIncome"
              label="Preffered Annual Income"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={annualIncomeOptions}
            />
            <span className="text-red-500">
              {formik.errors.preferredAnnualIncome}
            </span>
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              // value={fourthFormValues.preferredCasre}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  preferredMaritalStatus: selcOpt,
                });
              }}
              name="preferredMaritalStatus"
              label="Preffered Marital Status"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={sectorOptions}
            />
            <span className="text-red-500">
              {formik.errors.preferredMaritalStatus}
            </span>

            <Input
              name="preferredMotherTongue"
              label="Preferred Mother Tongue"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="text"
              placeholder="Preferred Mother Tongue"
              value={formik.values?.preferredMotherTongue}
              onChange={formik.handleChange}
            />
            <span className="text-red-500">
              {formik.errors.preferredMotherTongue}
            </span>
          </div>
          <div className="w-full mt-5 flex justify-around items-center">
            <button
              type="submit"
              className="w-40 mb-4 mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
