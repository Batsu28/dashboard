import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar(prop) {
	const { SIDEMENUS } = prop;
	const naviagte = useNavigate();
	const [sideVal, setSideVal] = useState("board");

	return (
		<nav>
			<ul>
				{SIDEMENUS.map((menu, index) => (
					<li key={index}>
						<button
							onClick={() => (naviagte(`/${menu.url}`), setSideVal(menu.val))}
							className={sideVal === menu.val ? "active" : "inactive"}>
							<div>{menu.icon}</div>
							{menu.name}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
}
