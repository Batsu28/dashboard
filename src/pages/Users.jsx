import axios from "axios";
import UsersIcon from "../components/icons/UsersIcon";
import "../styles/users.css";

export default function Users() {
	function postName(e) {
		e.preventDefault();
		console.log(e.target.name.value);
		axios
			.post("http://localhost:2000/users", {
				name: `${e.target.name.value}`,
			})
			.then((res) => console.log(res))
			.catch((res) => console.error(res));
	}

	return (
		<div className="pages users">
			<div className="page_title">
				<UsersIcon />
				Хэрэглэгчид
			</div>
			<form onSubmit={postName}>
				<input
					type="text"
					name="name"
				/>
				<button type="submit">submit</button>
			</form>
		</div>
	);
}
