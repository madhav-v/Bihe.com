import { useFormik } from "formik";
import login from "/login.png";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";
import TextField from "../../components/TextField";
import PasswordField from "../../components/PasswordField";
import Button from "../../components/Button";
import authSvc from "../../services/auth.service";
import { toast } from "react-toastify";
import Loading from "../error/loading";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      role: "user",
      email: "",
      password: "",
      agreeToTerms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(6).required("Required"),
      agreeToTerms: Yup.boolean().oneOf(
        [true],
        "You must agree to the terms and conditions"
      ),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        if (!values.agreeToTerms) {
          toast.error("You must agree to terms");
        }
        const { agreeToTerms, ...requestData } = values;
        let response = await authSvc.register(requestData);
        if (response.status) {
          toast.success("Registration Successful");
          navigate("/user/form");
        }
      } catch (exception) {
        setIsLoading(false);
        toast.error("Something Went Wrong");
        throw exception;
      }
    },
  });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center mx-5">
        {isLoading && <Loading />}
        <div className="bg-white p-8 rounded-lg flex flex-col items-center w-full md:w-3/5 lg:w-1/2 xl:w-1/3">
          <h1 className="text-4xl font-semibold mb-6">Create an Account</h1>
          <form className="w-full max-w-sm" onSubmit={formik.handleSubmit}>
            <input value={formik.role} type="hidden" />
            <TextField
              label="Full Name"
              id="name"
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.errors.name}
            />
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
            <div className="mb-2">
              <label>
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={isTermsChecked}
                  onChange={(e) => {
                    formik.handleChange(e);
                    setIsTermsChecked(!isTermsChecked);
                  }}
                />{" "}
                I agree to the{" "}
                <NavLink to="/terms" className="underline">
                  Terms and Conditions
                </NavLink>
              </label>
            </div>
            <span className="text-red-500">{formik.errors.agreeToTerms}</span>
            <Button text="Register" />
          </form>
          <div>
            Already have an account?{" "}
            <NavLink to={"/login"} className="text-blue-500 hover:underline">
              Login
            </NavLink>
          </div>
        </div>
        <div className="hidden md:block ">
          <img src={login} alt="Login" className="w-[40rem]" />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
