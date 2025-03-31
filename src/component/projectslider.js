import React from "react";
import Slider from "react-slick"; // Import Slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#000", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#000", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

const FullWidthSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    centerMode: true,
    centerPadding: "10px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Slider {...settings}>
       
        <div>
          <img src="https://www.dalmiacement.com/assets/images/products/Dalmia-Supreme-banner.jpg" width="1400" height="600" alt="cement" />
        </div>
        <div>
          <img src="https://futurestiles.com/wp-content/uploads/2024/07/New-Project-3-1024x576.jpg" width="1400" height="600" alt="tiles" />
        </div>
        <div>
          <img src="https://petronthermoplast.com/wp-content/uploads/2023/11/Types-OF-PVC-Pipes-1.png" width="1400" height="600" alt="pipes" />
        </div>
        <div>
          <img src="https://ufc-oversea-wp-blog.unionfab.com/wp-content/uploads/2024/03/Titanium-vs-Stainless-Steel.png" width="1400" height="600" alt="Stell" />
        </div>
        <div>
          <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUsLRrEU49EtBtE7GMIBUemdKa16QaWzCeg&s" width="1400" height="600" alt="Stell" />
        </div>
        
      
       
      </Slider>
    </div>
  );
};

export default FullWidthSlider;
