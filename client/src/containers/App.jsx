import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import AdminLayout from "../layouts/AdminLayout";
import { AdminHome, Home, UserProfile } from "../pages";
import NewUser from "../pages/admin/NewUser";

const App = () => {
	return (
		<Suspense fallback={<div>Loading....</div>}>
			<Routes>
				{/* client user */}
				<Route element={<Layout />}>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/profile/:uid"
						element={<UserProfile />}
					/>
				</Route>

				{/* admin layout */}
				{/* admin users */}
				<Route
					path="/admin/*"
					element={<AdminLayout />}
				>
					<Route
						index
						element={<AdminHome />}
					/>
				</Route>
				<Route
					path="/newUser"
					element={<NewUser />}
				/>

				{/* auth layout*/}
				<Route path="/auth/*"></Route>
			</Routes>
		</Suspense>
	);
};

export default App;
