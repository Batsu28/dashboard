import "../styles/product.css";
import ProductCanvas from "../components/sub-components/ProductsCanvas";
import DisplayIcon from "../components/icons/DisplayIcon";
import Drop from "../components/sub-components/Drop";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
	const [products, setProducts] = useState("");
	const [dltProduct, setDltProduct] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:2000/products")
			.then((res) => setProducts(res.data));
	}, [dltProduct]);

	console.log(products);

	console.log(dltProduct);

	return (
		<div className="pages product">
			<div>
				<div className="page_title">
					<DisplayIcon />
					Бүтээгдхүүнүүд
				</div>
				<ProductCanvas />
			</div>
			{products && (
				<table>
					<thead>
						<tr>
							<td>Зураг</td>
							<td className="product_table_name">Барааны нэр</td>
							<td>Үнэ</td>
							<td>Үлдэгдэл</td>
							<td>Хямдрал</td>
							<td>Категори</td>
							<td></td>
						</tr>
					</thead>
					<tbody className="products">
						{products.map((product, index) => (
							<tr key={index}>
								<td className="product_table_img dis_flex">
									<img
										src={product.image}
										alt={product.name}
									/>
								</td>
								<td className="product_table_name">{product.name}</td>
								<td className="product_table_price">{product.price}$</td>
								<td className="product_table_stock">{product.stock}</td>
								<td className="product_table_sale">
									{product.sale === 0 ? "none" : `${product.sale} %`}
								</td>
								<td className="product_table_category">
									<div>{product.category}</div>
								</td>
								<td className="product_table_edit">
									<Drop
										product={product}
										setDltProduct={setDltProduct}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}
