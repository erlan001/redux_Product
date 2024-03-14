import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { useState } from "react";
import rabbitStart from "./images/rabbit-loading.png";
import DetalProduct from "./pages/DetalProduct/DetalProduct";
import AllProduct from "./pages/AllProduct/AllProduct";
import Order from "./pages/Order/Order";
import Category from "./pages/Category/Category";
import Footer from "./Component/Footer/Footer";

function App() {
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 2000);
  return load ? (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "#2382AA",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="rabbitLoad"
          style={{
            background: "#2E99C7",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "100px",
              objectFit: "cover",
            }}
            src={rabbitStart}
            alt=""
          />
        </div>
      </div>
    </div>
  ) :
  
  
  (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} key={1} />
        <Route path="/admin" element={<Admin />} key={2} />
        <Route path="/detal/:id" element={<DetalProduct/>} key={3} />
        <Route path="/allProduct" element= {<AllProduct/>} key={3}/>
        <Route path="/category/:category" element={<Category/>} key={5} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
