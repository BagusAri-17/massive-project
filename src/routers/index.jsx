import { Routes, Route } from "react-router-dom";
import LoginAdministrator from "@/views/auth-views/administrator/Login";
import LoginExchanger from "@/views/auth-views/exchanger/Login";
import RegisterAdministrator from "@/views/auth-views/administrator/Register";
import RegisterExchanger from "@/views/auth-views/exchanger/Register";
import ResetPasswordAdministrator from "@/views/auth-views/administrator/ResetPassword";
import ResetPasswordExchanger from "@/views/auth-views/exchanger/ResetPassword";

export default function SetupRoutes() {
	return (
		<Routes>
			<Route path="/admin/login" element={<LoginAdministrator />} />
			<Route path="/admin/register" element={<RegisterAdministrator />} />
			<Route path="/admin/reset-password" element={<ResetPasswordAdministrator />} />
			<Route path="/user/login" element={<LoginExchanger />} />
			<Route path="/user/register" element={<RegisterExchanger />} />
			<Route path="/user/reset-password" element={<ResetPasswordExchanger />} />
		</Routes>
	)
}