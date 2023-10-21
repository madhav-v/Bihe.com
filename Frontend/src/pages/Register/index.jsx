import { useFormik } from "formik";
import login from "/login.png";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const RegisterPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(6).required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="flex h-screen justify-center items-center mx-5">
        <div className="bg-white p-8 rounded-lg flex flex-col items-center w-full md:w-3/5 lg:w-1/2 xl:w-1/3">
          <h1 className="text-4xl font-semibold mb-6">Welcome Back</h1>
          <form className="w-full max-w-sm" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-base mb-2">
                Full Name
              </label>
              <input
                id="text"
                name="name"
                type="text"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                onChange={formik.handleChange}
              />
              <span className="text-red-500">{formik.errors?.name}</span>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-base mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                onChange={formik.handleChange}
              />
              <span className="text-red-500">{formik.errors?.email}</span>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-base mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                onChange={formik.handleChange}
              />
              <span className="text-red-500">{formik.errors?.password}</span>
            </div>

            <button
              type="submit"
              className="w-full mb-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              Log In
            </button>
          </form>
          <div>
            Already have an account?{" "}
            <NavLink to={"/login"} className="text-blue-500 hover:underline">
              Login
            </NavLink>
          </div>
        </div>
        <div className="hidden md:block ml-4">
          <img src={login} alt="Login" className="w-[40rem]" />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
