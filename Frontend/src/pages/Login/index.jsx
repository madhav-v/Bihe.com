import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import login from "/login.png";
import * as Yup from "yup";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import TextField from "../../components/TextField";
import PasswordField from "../../components/PasswordField";
import Button from "../../components/Button";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
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
      console.log(values);
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen justify-center items-center mx-5">
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
              to="/forget-password"
              className="text-blue-500 hover:underline"
            >
              Forget Password
            </NavLink>
          </div>
         <Button text="Login"/>
        </form>
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
