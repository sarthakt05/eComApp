import React from 'react'
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import "./Slider.scss"

const Slider = () => {
  const[currentSlide, setCurrentSlide] = React.useState(0)


  const data = [
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=16000",
    "https://images.pexels.com/photos/10319789/pexels-photo-10319789.jpeg?auto=compress&cs=tinysrgb&w=16000",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=16000",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
  }
  
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
  }
  return (
    <div>
      <div className="slider">
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
          <img src={data[0]} alt="" />
          <img src={data[1]} alt="" />
          <img src={data[2]} alt="" />
        </div>
        <div className="icons">
          <div className="icon" onClick={prevSlide}>
            <WestOutlinedIcon />
          </div>
          <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider
