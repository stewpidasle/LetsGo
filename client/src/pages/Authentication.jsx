import React, { useCallback } from "react";
import { Background } from "../assets"
import { FcGoogle } from 'react-icons/fc'
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import { auth } from "../config/firebase.config"

const Authentication = () => {
	const googleProvider = new GoogleAuthProvider()

	const handleLoginAction = useCallback(async () => {
		try {
			const userCred = await signInWithRedirect(auth, googleProvider);
			if (userCred) {
				console.log(userCred);
				console.log("SUCCESS")
			}
		} catch (error) {
			console.error("Error during sign in:", error);
		}
	}, []);

	return (
		<div
			style={{
				background: `url(${Background})`,
				backgroundSize: 'cover',
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
			className="w-screen h-screen flex items-center justify-center px-4 py-6"
		>
			<div className="w-full lg:w-96 px-4 py-6 rounded-md backdrop-blur-md flex items-center justify-center flex-col gap-8 bg-[rgba(255,255,255,0.1)]">
				<div className="flex flex-col items-center justify-center gap-2">
					<p className="text-2xl text-white">Welcome Back!</p>
					<p className="text-lg text-gray-200">Sign in to access your store</p>
				</div>

				<div onClick={handleLoginAction} className="w-full lg:auto px-4 py-3 flex items-center justify-center border border-gray-200 cursor-pointer rounded-md active:scale-95 transition-all duration-150 ease-in-out gap-4 bg-[rgba(255,255,255,0.1)]">
					<FcGoogle className="text-3xl" />
					<p className="text-lg font-semibold text-white">Sign In With Gmail</p>
				</div>
			</div>
		</div >
	);
};

export default Authentication