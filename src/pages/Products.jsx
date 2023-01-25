import "../styles/product.css";
import { data } from "../util/data";
import OffCanvas from "../components/sub-components/Canvas";
import Alert from "../components/sub-components/Alert";
import DisplayIcon from "../components/icons/DisplayIcon";
import ThreeDots from "../components/icons/ThreeDots";
import Drop from "../components/sub-components/Drop";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
  const [getProducts, setGetProducts] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:2020/products")
      .then((products) => setGetProducts(products.data));
  }, []);
  console.log(getProducts);

  return (
    <div className="pages product">
      <div>
        <div className="page_title">
          <DisplayIcon />
          Бүтээгдхүүнүүд
        </div>
        <OffCanvas data={addProduct()} btnName={"Бараа нэмэх"} />
      </div>
      <table>
        <thead>
          <tr>
            <td>Зураг</td>
            <td className="product_table_name">Барааны нэр</td>
            <td>Үнэ</td>
            <td>Үлдэгдэл</td>
            <td>Хямдрал %</td>
            <td>Категори</td>
            <td></td>
          </tr>
        </thead>
        <tbody className="products">
          {getProducts &&
            getProducts.map((product, index) => (
              <tr key={index}>
                <td className="product_table_img dis_flex">
                  <img src={product.image} alt={product.name} />
                </td>
                <td className="product_table_name">
                  {product.name.slice(0, 25)}
                </td>
                <td className="product_table_price">{product.price}$</td>
                <td className="product_table_stock">{product.stock}</td>
                <td className="product_table_sale">{product.sale}%</td>
                <td className="product_table_category">
                  <div>{product.category}</div>
                </td>
                <td className="product_table_edit">
                  <Drop name={<ThreeDots />} />
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
