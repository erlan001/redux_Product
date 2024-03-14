import './Footer.css'
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
    return (
        <div style={{
            background:' #2b8db7',
            padding:'50px 0',
            marginTop:"100px"
        }}>
            <div className="container"> 
            <div className="footer">
            <h1>PRODUCT SHOP</h1>  
            <div className="product-2">
            <div>
            <p>Meat</p>
            <p>Sweets</p>
            <p>Vegetables</p> 
            </div>
           <div>
           <p>Product</p>             
            <p>Drinks</p> 
            <p>More</p> 
            </div> 
            </div> 
           
            <div className="nomer">
            <h3>Связаться с нами:</h3>    
            <p>+996 501 618 161</p>
            <p>+996 709 051 636</p>
            <p>+996 550 597 982</p>  
           <div style={{
            display:'flex',
            gap:'24px',
            fontSize:'35px',
            marginTop:"10px"
           }}>
           <FaWhatsapp />  
            <FaTelegramPlane />
            <FaInstagram />
            <FaFacebookF />
           </div>
            </div> 
               <div className="adress">
               <h3>Адрес</h3>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Soluta et maiores dolorum tempore dolor esse incidunt autem consequatur, <br /> voluptatum, nobis nemo delectus vero modi mollitia quos aut,  labore aliquid <br /> ratione earum magni. Repudiandae vitae esse distinctio alias ipsa non nihil.
                    </p> 
               </div>
            </div>
            </div>
            
        </div>
    );
};

export default Footer;