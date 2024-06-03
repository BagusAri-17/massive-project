import { Routes, Route } from "react-router-dom";

import Home from "@/views/landing-views/home";
import Contact from "@/views/landing-views/contact";
import Campaign from "../views/landing-views/campaign";
import Article from "../views/landing-views/Article";

import LoginAdministrator from "@/views/auth-views/administrator/Login";
import LoginExchanger from "@/views/auth-views/exchanger/Login";
import RegisterAdministrator from "@/views/auth-views/administrator/Register";
import RegisterExchanger from "@/views/auth-views/exchanger/Register";
import ResetPasswordAdministrator from "@/views/auth-views/administrator/ResetPassword";
import ResetPasswordExchanger from "@/views/auth-views/exchanger/ResetPassword";
import AppLayout from "../components/layout-components/AppLayout";
import Dashboard from "../views/app-views/dashboard";

export default function SetupRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/campaign" element={<Campaign />} />
      <Route path="/article" element={<Article />} />

      <Route path="/dashboard" element={<AppLayout />}>
        <Route path="main" element={<Dashboard />} />
      </Route>

      <Route path="/admin/login" element={<LoginAdministrator />} />
      <Route path="/admin/register" element={<RegisterAdministrator />} />
      <Route
        path="/admin/reset-password"
        element={<ResetPasswordAdministrator />}
      />
      <Route path="/user/login" element={<LoginExchanger />} />
      <Route path="/user/register" element={<RegisterExchanger />} />
      <Route path="/user/reset-password" element={<ResetPasswordExchanger />} />
    </Routes>
  );
}
