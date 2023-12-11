import NavBar from "../../../components/Navbar";
import BasicInfo from "./Component/Basic-info";
import Bio from "./Component/Bio";
import EducationalInfo from "./Component/Educational-info";
import Photo from "./Component/Photo";
import ReligiousInfo from "./Component/Religious-info";

const EditProfile = () => {
  return (
    <>
      <NavBar/>
      <Photo />
      <Bio />
      <BasicInfo />
      <ReligiousInfo />
      <EducationalInfo />
    </>
  );
};

export default EditProfile;
