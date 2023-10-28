import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar";

const UserDashboard = () => {
  
  return <>
  <NavBar/>
  <Link to={"/user/form/id"}>Edit Profile</Link>
  </>;
};

export default UserDashboard;
