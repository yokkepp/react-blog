import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBookOpen, FaHome } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

function Navbar({ isAuth }) {
	return (
		<nav>
			<Link to='/'>
				<FaHome className='icon' />
				<span>ホーム</span>
			</Link>

			{isAuth ? (
				<>
					<Link to='/createpost'>
						<div>
							<FaBookOpen className='icon' />
							<span>記事投稿</span>
						</div>
					</Link>
					<Link to='/logout'>
						<FiLogIn className='icon' />
						<span>ログアウト</span>
					</Link>
				</>
			) : (
				<Link to='/login'>
					<FiLogIn className='icon' />
					<span>ログイン</span>
				</Link>
			)}
		</nav>
	);
}

export default Navbar;
