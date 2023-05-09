import React from "react";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

function Logout({ setIsAuth }) {
	const navigate = useNavigate();
	const logout = () => {
		//ログアウト
		signOut(auth).then(() => {
			localStorage.clear();
			setIsAuth(false);
			navigate("/login");
		});
	};
	return (
		<div>
			<p>ログアウトする</p>
			<button onClick={logout}>ログアウトする</button>
		</div>
	);
}

export default Logout;
