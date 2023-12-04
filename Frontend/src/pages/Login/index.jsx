import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import login from "/login.png";
import * as Yup from "yup";
import { useState } from "react";
import TextField from "../../components/TextField";
import PasswordField from "../../components/PasswordField";
import Button from "../../components/Button";
import authSvc from "../../services/auth.service";
import { toast } from "react-toastify";
import Loading from "../error/loading";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const googleAuth = () => {
    window.open(
      `${import.meta.env.VITE_API_URL}/v1/oauth/google/callback`,
      "_self"
    );
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(6).required("Required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        let response = await authSvc.login(values);
        if (response.status) {
          let formattedData = {
            id: response.user._id,
            name: response.user.name,
            email: response.user.email,
          };
          localStorage.setItem("token", response.token);
          localStorage.setItem("user", JSON.stringify(formattedData));
          toast.success("Login Successful");
          navigate("/user");
        } else {
          toast.error(response.msg);
        }
      } catch (exception) {
        setIsLoading(false);
        toast.error("Invalid Credentials");
        console.log(exception);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen justify-center items-center mx-5">
      {isLoading && <Loading />}
      <div className="bg-white p-8 rounded-lg flex flex-col items-center w-full md:w-3/5 lg:w-1/2 xl:w-1/3">
        <h1 className="text-4xl font-semibold mb-6">Welcome Back</h1>
        <form className="w-full max-w-sm" onSubmit={formik.handleSubmit}>
          <TextField
            label="Email Address"
            id="email"
            name="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
          />
          <PasswordField
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            showPassword={showPassword}
            onTogglePassword={togglePasswordVisibility}
            error={formik.errors.password}
          />
          <div className="mt-2">
            <NavLink
              to="/forgetPassword"
              className="text-blue-500 hover:underline"
            >
              Forget Password
            </NavLink>
          </div>
          <Button text="Login" />
        </form>
        <div>
          <button
            onClick={googleAuth}
            className="bg-gray-200 rounded-md p-1 mr-1 w-full mt-2"
          >
            <span>
              <FaGoogle size={20} />
              Sign in with Google
            </span>
          </button>
          <button className="bg-gray-200 rounded-md p-2 mr-1 w-full mt-2">
            <span>
              <FaFacebook size={20} />
              Sign in with Facebook
            </span>
          </button>
        </div>
        <div>
          Dont have an account?{" "}
          <NavLink to={"/register"} className="text-blue-500 hover:underline">
            Register
          </NavLink>
        </div>
      </div>
      <div className="hidden md:block ">
        <img src={login} alt="Login" className="w-[40rem]" />
      </div>
    </div>
  );
};

export default LoginPage;
