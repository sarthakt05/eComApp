import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Cart = () => {
  const data = [
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto itaque dignissimos distinctio sint, enim ex officiis? Omnis molestiae expedita a animi facilis vero saepe. Est earum reiciendis eius commodi fugit?",
      isNew: true,
      oldPrice: 1900,
      price: 1200,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "T-Shirt",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto itaque dignissimos distinctio sint, enim ex officiis? Omnis molestiae expedita a animi facilis vero saepe. Est earum reiciendis eius commodi fugit?",
      isNew: true,
      oldPrice: 1900,
      price: 1200,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>Sub Total</span>
        <span>Rs. 1000</span>
      </div>
      <button>CHECKOUT NOW</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
