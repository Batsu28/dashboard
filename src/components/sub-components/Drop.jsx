import axios from "axios";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ThreeDots from "../icons/ThreeDots";
import ProductCanvas from "./ProductsCanvas";

export default function Drop(prop) {
  const { product, setDltProduct } = prop;
  function deleteProduct() {
    setDltProduct(product.id);
    axios
      .delete(`http://localhost:2000/products/${product.id}`)
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  }
  return (
    <DropdownButton id="dropdown-basic-button" title={<ThreeDots />}>
      <ProductCanvas product={product} />
      <Dropdown.Item>
        <button className="delete_product" onClick={deleteProduct}>
          Устгах
        </button>
      </Dropdown.Item>
      <Dropdown.Item>Вебсайтаас нуух</Dropdown.Item>
    </DropdownButton>
  );
}
