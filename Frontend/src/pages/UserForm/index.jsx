import { useState, useRef, useEffect } from "react";
import Input from "../../components/ProfileForm/input";
import InputSelect from "../../components/ProfileForm/select";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import profileSvc from "../../services/profile.service";
import Loading from "../error/loading";
import { VscDeviceCamera } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import FirstForm from "./firstform";
import SecondForm from "./secondform";
import ThirdForm from "./thirdform";
import FourthForm from "./fourthform";
import FifthForm from "./fifthform";
import NewHeader from "../../components/ProfileFormComp/NewHeader";
import NewProgressBar from "../../components/ProfileFormComp/progressbar";
import Button from "../../components/ProfileForm/profilebutton";

const Form = () => {
  const [currentFormCount, setCurrentFormCount] = useState(0);

  const [firstFormValues, setFirstFormValues] = useState({
    fullname: "",
    height: "",
    religion: "",
    sex: "",
    marital_status: "",
    dateOfBirth: "",
    address: "",
  });

  const [secondFormValues, setSecondFormValues] = useState({
    familyType: "",
    physicalDisability: "",
    familyValues: "",
    gotra: "",
    occupation: "",
    highestEducation: "",
    employedIn: "",
    income: "",
  });

  const [thirdFormValues, setThirdFormValues] = useState({
    preferredAge: "",
    preferredEducation: "",
    preferredFamilyValues: "",
    preferredHeight: "",
    preferredIncome: "",
    preferredMaritalStatus: "",
    preferredOccupation: "",
    preferredReligion: "",
  });

  const [fourthFormValues, setFourthFormValues] = useState({
    ageWeight: 0,
    heightWeight: 0,
    religionWeight: 0,
    casteWeight: 0,
    educational_degreeWeight: 0,
    annualIncomeWeight: 0,
    marital_statusWeight: 0,
    motherTongeWeight: 0,
  });
  const [fifthFormValues, setFifthFormValues] = useState({
    bio: "",
  });

  const allForms = [
    <FirstForm
      firstFormValues={firstFormValues}
      setFirstFormValues={setFirstFormValues}
      currentFromCount={currentFormCount}
      setCurrentFormCount={setCurrentFormCount}
    />,
    <SecondForm
      secondFormValues={secondFormValues}
      setSecondFormValues={setSecondFormValues}
      currentFormCount={currentFormCount}
      setCurrentFormCount={setCurrentFormCount}
    />,
    <ThirdForm
      thirdFormValues={thirdFormValues}
      setThirdFormValues={setThirdFormValues}
      currentFormCount={currentFormCount}
      setCurrentFormCount={setCurrentFormCount}
    />,
    <FourthForm
      fourthFormValues={fourthFormValues}
      setFourthFormValues={setFourthFormValues}
      currentFormCount={currentFormCount}
      setCurrentFormCount={setCurrentFormCount}
    />,
    <FifthForm
      fifthFormValues={fifthFormValues}
      setFifthFormValues={setFifthFormValues}
      currentFormCount={currentFormCount}
      setCurrentFormCount={setCurrentFormCount}
    />,
  ];

  const submitAllForms = () => {
    console.log("All form values:", {
      ...firstFormValues,
      ...secondFormValues,
      ...thirdFormValues,
      ...fourthFormValues,
      ...fifthFormValues,
    });
  };

  return (
    <>
      <div className="w-full min-h-[100vh] bg-screen">
        {/* <NewHeader /> */}
        <NewProgressBar
          currentFormCount={currentFormCount}
          setCurrentFormCount={setCurrentFormCount}
        />
        {allForms[currentFormCount]}
        {currentFormCount === 4 && (
          <Button
            type="button"
            label="Submit"
            onClick={submitAllForms}
            classes="px-16 py-3 rounded-xl btnnext text-white"
            classes2="w-full flex justify-center py-4"
          />
        )}
        {/* <Footer />  */}
      </div>
    </>
  );
};

export default Form;
