import "../styles/product.css";
import { data } from "../util/data";
import OffCanvas from "../components/sub-components/Canvas";
import Alert from "../components/sub-components/Alert";
import DisplayIcon from "../components/icons/DisplayIcon";
import ThreeDots from "../components/icons/ThreeDots";

export default function Products() {
	return (
		<div className="pages product">
			<div>
				<div className="page_title">
					<DisplayIcon />
					Бүтээгдхүүнүүд
				</div>
				<OffCanvas data={addProduct()} />
			</div>
			<table>
				<thead>
					<tr>
						<td>Зураг</td>
						<td>Барааны нэр</td>
						<td>Үнэ</td>
						<td>Үлдэгдэл</td>
						<td>Хямдрал %</td>
						<td>Категори</td>
						<td>
							<ThreeDots />
						</td>
					</tr>
				</thead>
				<tbody className="products">
					{data.map((product) => (
						<tr>
							<td>
								<img
									src={product.image}
									alt={product.name}
								/>
							</td>
							<td>{product.name}</td>
							<td>{product.price}</td>
							<td>{product.stock}</td>
							<td>{product.sale}</td>
							<td>{product.category}</td>
							<td>
								<ThreeDots />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

function addProduct() {
	return (
		<div className="addProduct">
			<div className="product_img">
				<p>Барааны зураг</p>
				<input type="text" />
			</div>
			<div className="product_info">
				<label>
					Барааны нэр:
					<input type="text" />
				</label>
				<label>
					Барааны үнэ (₮):
					<input type="text" />
				</label>
				<label>
					Үлдэгдэл:
					<input type="text" />
				</label>
				<label>
					Хямдрал (%-иар):
					<input type="text" />
				</label>
			</div>
			<div className="product_spec">
				<p>Үзүүлэлтүүд</p>
			</div>
		</div>
	);
}
