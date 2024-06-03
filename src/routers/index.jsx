import { Routes, Route } from "react-router-dom";

import Home from "@/views/landing-views/home";
import Campaign from "@/views/landing-views/campaign";
import Article from "@/views/landing-views/Article";
import Edukasi from "@/views/landing-views/edukasi";
import Contact from "@/views/landing-views/contact";
import AboutUs from "@/views/landing-views/AboutUs";

import LoginAdministrator from "@/views/auth-views/administrator/Login";
import LoginExchanger from "@/views/auth-views/exchanger/Login";
import RegisterAdministrator from "@/views/auth-views/administrator/Register";
import RegisterExchanger from "@/views/auth-views/exchanger/Register";
import ResetPasswordAdministrator from "@/views/auth-views/administrator/ResetPassword";
import ResetPasswordExchanger from "@/views/auth-views/exchanger/ResetPassword";

import AppLayout from "@/components/layout-components/AppLayout";

import Dashboard from "@/views/app-views/dashboard";
import Profile from "@/views/app-views/profile";
import ChangeTrash from "@/views/app-views/change-trash";
import TransactionHistory from "@/views/app-views/transaction-history";
import Point from "@/views/app-views/point";

import AdminDashboard from "@/views/admin-app-views/dashboard"

export default function SetupRoutes() {
	return (
		<Routes>
			{/* Landing Page */}
			<Route path="/" element={<Home />} />
			<Route path="/article" element={<Article />} />
			<Route path="/campaign" element={<Campaign />} />
			<Route path="/edukasi" element={<Edukasi />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/about-us" element={<AboutUs />} />

			{/* Dashboard User */}
			<Route path="/" element={<AppLayout />}>
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="profile" element={<Profile />} />
				<Route path="change-trash" element={<ChangeTrash />} />
				<Route path="Transaction-history" element={<TransactionHistory />} />
				<Route path="my-point" element={<Point />} />
			</Route>

			{/* Dashboard Admin */}
			<Route path="/admin" element={<AppLayout />}>
				<Route path="dashboard" element={<AdminDashboard />} />
			</Route>

			{/* Authentication Page */}
			<Route path="/admin/login" element={<LoginAdministrator />} />
			<Route path="/admin/register" element={<RegisterAdministrator />} />
			<Route path="/admin/reset-password" element={<ResetPasswordAdministrator />} />
			<Route path="/user/login" element={<LoginExchanger />} />
			<Route path="/user/register" element={<RegisterExchanger />} />
			<Route path="/user/reset-password" element={<ResetPasswordExchanger />} />
		</Routes>
	);
}
