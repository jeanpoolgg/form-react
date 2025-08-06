import { BrowserRouter, Route, Routes } from "react-router";
import { BasicLayout } from "@/layouts/BasicLayout";
import { MainLayout } from "@/layouts/MainLayout";
import { FormBasic } from "@/pages/FormBasic";
import { HomePage } from "@/pages/HomePage";

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Home con MainLayout */}
				<Route path="/" element={<MainLayout />}>
					<Route index element={<HomePage />} />
				</Route>

				{/* FormBasic con BasicLayout */}
				<Route path="/form-basic" element={<BasicLayout />}>
					<Route index element={<FormBasic />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
