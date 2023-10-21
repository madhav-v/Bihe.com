import { useFormik } from "formik";
import login from "/login.png";
import * as Yup from "yup";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

const ResetPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex h-screen justify-center items-center mx-5">
      <div className="bg-white p-8 rounded-lg flex flex-col items-center w-full md:w-3/5 lg:w-1/2 xl:w-1/3">
        <h1 className="text-3xl font-semibold mb-6">Enter your email</h1>
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
          <Button text="Send Email" />
        </form>
      </div>
      <div className="hidden md:block ml-[-3rem]">
        <img src={login} alt="Login" className="w-[40rem]" />
      </div>
    </div>
  );
};

export default ResetPassword;
