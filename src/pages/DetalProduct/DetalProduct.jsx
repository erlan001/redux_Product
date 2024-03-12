import React, { useEffect, useState } from "react";
import "./DetalProduct.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetalProduct = () => {
  const product = useSelector((s) => s.product.product);
  const [detalProduct, setDetalProduct] = useState([]);
  const [recomend, setRecomend] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    let res = product.filter((el) => {
      return el.id == id;
    });
    let str = product.filter((el) => {
        detalProduct.filter((il)=>{
            return el.category == el.category
        })
    });
    setDetalProduct(res);
    setRecomend(str);
  }, []);
  return (
    <div className="container">
      <div className="detal_blocks">
        {detalProduct.map((el) => (
          <div>
            <div className="detal_block">
              <img className="detal_product" src={el.image} alt="" />
              <div style={{ marginTop: "100px" }}>
                <h2 className="detal_name">{el.name}</h2>
                <p className="detal_plot">{el.plot}</p>
                <h1>{el.price}$</h1>
                <h2 className="detal_category">Category: {el.category}</h2>
                <div className="plus_minus">
                  <button class="button">+</button>
                  <h4>{el.count}</h4>
                  <button class="button">-</button>
                </div>
              </div>
            </div>
            <div className="recomend">
                {recomend.map((el)=>(
                    <div>
                        <h1>{el.name}</h1>
                    </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetalProduct;
