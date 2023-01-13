import { useState } from "react";
import { data } from "../util/data";
import "../styles/product.css";

export default function Product() {
  return (
    <div className="product">
      {data.map((product, index) => (
        <div className="card" key={index}>
          <div className="image">
            <img src={product.image} alt={product.name} />
          </div>
          <div>name: {product.name}</div>,
          {/* <div>description: {product.description.slice(0, 100)}</div> */}
          <div>price: {product.price} </div>
          {Object.entries(product.spec[0]).map(([one, two]) => (
            <div>
              {console.log({ one })}
              {console.log({ two })}
              {one}: {two}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
