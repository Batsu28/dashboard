import "../styles/order.css";
import PaperIcon from "../components/icons/PaperIcon";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Order() {
	const [orders, setOrders] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:2000/orders")
			.then((res) => setOrders(res.data));
	}, []);
	console.log(orders);

	return (
		<div className="pages order">
			<div className="page_title">
				<PaperIcon />
				Захиалгууд
			</div>
			<table>
				<thead>
					<tr>
						<td>Захиалга No</td>
						<td>Огноо</td>
						<td>Утас</td>
						<td>И-мэйл</td>
						<td>Хаяг</td>
						<td>Тоо</td>
						<td>Нийт дүн ₮</td>
						<td>Төлбөр</td>
						<td>Статус</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{orders &&
						orders.map((order, index) => (
							<tr key={index}>
								<td>{order.id}</td>
								<td>{order.date}</td>
								<td>{order.phone}</td>
								<td>{order.email}</td>
								<td>{order.address}</td>
								<td>{order.number}</td>
								<td>{order.price}</td>
								<td>{order.payment}</td>
								<td>{order.status}</td>
								<td></td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}
