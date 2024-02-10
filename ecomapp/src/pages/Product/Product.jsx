import { React, useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [qty, setQty] = useState(1);

  const images = [
    "https://images.pexels.com/photos/14564834/pexels-photo-14564834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/16160955/pexels-photo-16160955/free-photo-of-man-in-t-shirt-making-gesture-and-posing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">Rs.4545</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          dolores obcaecati. Esse ratione cupiditate quaerat, deleniti enim vel
          reprehenderit? Perferendis repellendus, libero provident sit eos error
          aut officia nesciunt. Maxime!
        </p>
        <div className="qty">
          <button onClick={()=>setQty(prev=>prev===1 ? 1 : prev-1)}>-</button>
          {qty}
          <button onClick={()=>setQty(prev=>prev+1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />Add to Cart
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon />Add to wishlist
          </div>
          <div className="item">
            <BalanceIcon />Compare
          </div>
        </div>
        <div className="info">
          <span>Product Details</span>
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>Description</span>
          <hr />
          <span>Additional info</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
