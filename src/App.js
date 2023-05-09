import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
	const [isAuth, setIsAuth] = useState(false);
	return (
		<BrowserRouter>
			<Navbar isAuth={isAuth} />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route
					path='/createpost'
					element={<CreatePost isAuth={isAuth} />}></Route>
				<Route path='/login' element={<Login setIsAuth={setIsAuth} />}></Route>
				<Route
					path='/logout'
					element={<Logout setIsAuth={setIsAuth} />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
