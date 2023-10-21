import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomepageLayout from "./pages/Layout/homePage.Layout";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ResetPassword from "./pages/ResetPassword/resetPassword";
import SetPassword from "./pages/ResetPassword/setPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomepageLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgetPassword" element={<ResetPassword />} />
        <Route path="/setPassword/:token" element={<SetPassword />} />
      </Routes>
    </>
  );
}

export default App;
