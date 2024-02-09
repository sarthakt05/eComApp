import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
const FeaturedProducts = ({type}) => {

  const data = [
    {
      id:1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve",
      isNew: true,
      oldPrice: 1900,
      price : 1200,
    },
    {
      id:2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: true,
      oldPrice: 1900,
      price : 1200,
    },
    {
      id:3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      isNew: true,
      oldPrice: 1900,
      price : 1200,
    },
    {
      id:4,
      img: "https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "T-Shirt",
      isNew: true,
      oldPrice: 1900,
      price : 1200,
    },
  ]
  return (<div className="featuredProducts">
    <div className="top">
      <h1>{type} Products</h1>
      <p>
        Lorem ipsum sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div className="bottom">
      {data.map(item=>(
        <Card item={item} key={item.id}/>
      ))}
    </div>
    </div>
)};

export default FeaturedProducts;
