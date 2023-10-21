import {
  AiFillDollarCircle,
  AiFillHome,
  AiFillNotification,
  AiOutlineHome,
} from "react-icons/ai";
import {
  BsChatHeart,
  BsMessenger,
  BsPersonAdd,
  BsSearchHeart,
} from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { RiMessengerLine, RiProfileFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import Button from "../Button";

const NavBar = () => {
  return (
    <>
      <header className="Navbar z-50 shadow-sm flex justify-between items-center md:fixed w-full left-0 top-0 bg-white">
        <div className="basis-1/2 flex justify-start items-center">
          <NavLink className="navbar-logo basis-1/3" to="/">
            <img alt="logo" />
          </NavLink>
          <div className="basis-1/2"></div>
        </div>
        <div className="basis-1/2 xl:basis-1/2  md:flex md:justify-between items-center hidden">
          <ul className="flex md:justify-between w-full md:basis-1/2 mr-3">
            <li className="navbar-item inline-block mt-2  hover:bg-screen px-3 py-2 rounded-xl">
              <NavLink className="navbar-link cool-link " aria-current="page">
                <AiOutlineHome
                  size={30}
                  color={
                    location.pathname == "/user"
                      ? "var(--primary)"
                      : "rgba(0,0,0,0.8)"
                  }
                />
              </NavLink>
            </li>
            <li className="navbar-item mt-2 hover:bg-screen py-2 px-3 rounded-xl">
              <NavLink className="navbar-link cool-link" to="/home/connection">
                <BsPersonAdd
                  size={30}
                  color={
                    location.pathname == "/user/connection"
                      ? "var(--primary)"
                      : "rgba(0,0,0,0.8)"
                  }
                />
              </NavLink>
            </li>
            <li className="navbar-item mt-2 hover:bg-screen py-2 px-3 rounded-xl">
              <NavLink className="navbar-link cool-link">
                <RiMessengerLine
                  size={30}
                  color={
                    location.pathname == "/user/chat/conversation"
                      ? "var(--primary)"
                      : "rgba(0,0,0,0.8)"
                  }
                />
              </NavLink>
            </li>

            <li className="navbar-item mt-2 hover:bg-screen py-2 px-3 rounded-xl">
              <NavLink className="navbar-link cool-link">
                <MdNotificationsNone
                  size={30}
                  color={
                    location.pathname == "/user/notification"
                      ? "var(--primary)"
                      : "rgba(0,0,0,0.8)"
                  }
                />
              </NavLink>
            </li>
            <li className="navbar-item mt-2 hover:bg-screen py-2 px-3 rounded-xl">
              <NavLink className="navbar-link cool-link " aria-current="page">
                <FaRegUser
                  size={25}
                  color={
                    location.pathname == ""
                      ? "var(--primary)"
                      : "rgba(0,0,0,0.8)"
                  }
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavBar;
