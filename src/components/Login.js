import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
	const navigate = useNavigate();
	const loginWithGoogle = () => {
		signInWithPopup(auth, provider).then(() => {
			localStorage.setItem("isAuth", true);
			setIsAuth(true);
			navigate("/");
		});
	};
	return (
		<div>
			<p>ログインして始める</p>
			<button onClick={loginWithGoogle}>Googleでログインする</button>
		</div>
	);
}

export default Login;
