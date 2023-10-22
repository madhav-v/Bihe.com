import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ResetPassword from "./pages/ResetPassword/resetPassword";
import SetPassword from "./pages/ResetPassword/setPassword";
import UserDashboard from "./pages/UserDashboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import TermsAndConditions from "./pages/Terms and Condition";
import ErrorPage from "./pages/error/index.jsx";

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgetPassword" element={<ResetPassword />} />
        <Route path="/setPassword/:token" element={<SetPassword />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
