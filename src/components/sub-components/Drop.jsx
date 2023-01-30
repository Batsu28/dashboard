import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ThreeDots from "../icons/ThreeDots";
import ProductCanvas from "./ProductsCanvas";

export default function Drop(prop) {
  const { product, setDltProduct, setSpecVal } = prop;
  return (
    <DropdownButton id="dropdown-basic-button" title={<ThreeDots />}>
      <Dropdown.Item className="edit_btn">
        <ProductCanvas product={product} />
      </Dropdown.Item>
      <Dropdown.Item>
        <button
          className="delete_product"
          onClick={() => (setDltProduct(product.id), setSpecVal(product.spec))}
        >
          Устгах
        </button>
      </Dropdown.Item>
      <Dropdown.Item>Вебсайтаас нуух</Dropdown.Item>
    </DropdownButton>
  );
}
