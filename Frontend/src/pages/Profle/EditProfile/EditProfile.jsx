import BasicInfo from "./Component/Basic-info";
import Bio from "./Component/Bio";
import EducationalInfo from "./Component/Educational-info";
import FamilyInfo from "./Component/Family-info";
import PreferenceInfo from "./Component/Preference-info";
import ReligiousInfo from "./Component/Religious-info";

const EditProfile = () => {
  return (
    <>
      <Bio />
      <BasicInfo />
      <ReligiousInfo />
      <EducationalInfo />
      <FamilyInfo />
      <PreferenceInfo />
    </>
  );
};

export default EditProfile;
