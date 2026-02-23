import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import Members from "../pages/members/Members";
import Plans from "../pages/plans/Plans";
import Payments from "../pages/payments/Dues";
import { LoginPage } from "../pages/auth/Login";
import { SignupPage } from "../pages/auth/Register";
import AuthLayout from "../components/layout/AuthLayout";
import PrivateRoute from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔐 AUTH ROUTES */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        {/* 🔒 PRIVATE ROUTES */}
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/members" element={<Members />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/payments" element={<Payments />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;