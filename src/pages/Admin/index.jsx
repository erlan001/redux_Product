import React, { useState } from "react";
import "./Admin.css";
import { useDispatch } from "react-redux";
import { ADD_PRODUCT } from "../../redux/actionTypes";

const Admin = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  function creatData() {
    let data = JSON.parse(localStorage.getItem("product")) || [];
    let newObj = {
      name,
      image,
      price,
      count: 1,
      id: Date.now(),
    };
    data.push(newObj);
    dispatch({ type: ADD_PRODUCT, payload: newObj });
    localStorage.setItem("product", JSON.stringify(data));
  }
  return (
    <div className="admin">
      <input
        onChange={(e) => setName(e.target.value)}
        class="input"
        name="text"
        type="text"
        placeholder="Name..."
      />
      <input
        onChange={(e) => setImage(e.target.value)}
        class="input"
        name="text"
        type="text"
        placeholder="URL..."
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        class="input"
        name="text"
        type="number"
        placeholder="Price..."
      />
      <button onClick={creatData}>CREATE</button>
    </div>
  );
};

export default Admin;
