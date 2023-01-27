import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import AddInput from "./AddInput";
import AddIcon from "../icons/AddIcon";
import axios from "axios";

export default function ProductCanvas(prop) {
  const { specVal, setSpecVal, product } = prop;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function postProduct(e) {
    e.preventDefault();

    let arr = specVal.map((spec) => ({ [spec[0]]: spec[1] }));
    console.log(arr);

    axios
      .post("http://localhost:2000/products", {
        description: "none",
        name: `${e.target.addName.value}`,
        spec: arr,
        price: `${e.target.addPrice.value}`,
        stock: `${e.target.addStock.value}`,
        sale: `${e.target.addSale.value}`,
        category: `${e.target.addCategoty.value}`,
      })
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  }
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="me-2 canvas_btn"
      >
        {!product && <AddIcon />}
        {product ? "Засах" : "Бараа нэмэх"}
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="off_canvas"
      >
        <Offcanvas.Header closeButton="start">
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form className="addProduct" onSubmit={postProduct}>
            <div className="product_img">
              <p>Барааны зураг</p>
              <input
                type="url"
                name="addImg"
                placeholder="Барааны зураг"
                defaultValue={product && product.image}
              />
            </div>
            <div className="product_info">
              <label>
                Барааны нэр:
                <input
                  type="text"
                  name="addName"
                  placeholder="Барааны нэр"
                  defaultValue={product && product.name}
                />
              </label>
              <label>
                Барааны үнэ (₮):
                <input
                  type="text"
                  name="addPrice"
                  placeholder="Барааны үнэ"
                  defaultValue={product && product.price}
                />
              </label>
              <label>
                Үлдэгдэл:
                <input
                  type="text"
                  name="addStock"
                  placeholder="Үлдэгдэл"
                  defaultValue={product && product.stock}
                />
              </label>
              <label>
                Хямдрал (%-иар):
                <input
                  type="text"
                  name="addSale"
                  placeholder="Хямдрал"
                  defaultValue={product && product.sale}
                />
              </label>
            </div>
            <div className="product_spec">
              <p>Үзүүлэлтүүд</p>
              {product ? (
                ""
              ) : (
                <AddInput
                  setSpecVal={setSpecVal}
                  specVal={specVal}
                  btnName={
                    <div>
                      <AddIcon /> Үзүүлэлт нэмэх
                    </div>
                  }
                />
              )}
              <div className="product_info">
                {specVal &&
                  specVal.map((spec, index) => (
                    <label key={index}>
                      {spec[0]}
                      <input type="text" value={spec[1]} readOnly />
                    </label>
                  ))}
              </div>
            </div>
            <div className="product_info">
              <label>
                Категори сонгох
                <select
                  name="addCategoty"
                  onChange={(e) => setCateVal(e.target.value)}
                  defaultValue={product && product.category}
                >
                  <option value="appliances">Appliances</option>
                  <option value="computers & tablets">
                    Computers & tablets
                  </option>
                  <option value="gaming console">Gaming console</option>
                  <option value="telescope">Telescope</option>
                  <option value="other">БУСАД</option>
                </select>
              </label>
              <label>
                Брэнд сонгох
                <select
                  name="brand"
                  onChange={(e) => setBrandVal(e.target.value)}
                >
                  <option value="SAMSUNG">SAMSUNG</option>
                </select>
              </label>
            </div>
            <button type="submit">ХАДГАЛАХ</button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
