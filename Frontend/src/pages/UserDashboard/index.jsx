import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar";

const UserDashboard = () => {
  return (
    <>
      <NavBar />
      <div className="mt-[15vh] ml-10 bg-red-500 inline-block">
        <Link to="/user/form">Create Profile</Link>
      </div>
    </>
  );
};

export default UserDashboard;
