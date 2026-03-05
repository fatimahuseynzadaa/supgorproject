import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AddToCartBtn from "../utils/addTocart";

const Carousel = ({ datas }) => {
  const settings = {
    dots: true,
    infinite: datas.length > 3, 
    speed: 500,
    autoplay: true,           
    autoplaySpeed: 1000,      
    draggable: true,          
    swipe: true,              
    swipeToSlide: true,       
    pauseOnHover: true,       
    slidesToShow: 4, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <div className="slider-container container py-5">
      <Slider {...settings}>
        {datas && datas.map((product) => (
          <div key={product.id} className="p-2">
            <div className="card h-100 shadow-sm border-0">
              <img 
                src={product.image} 
                className="card-img-top p-3" 
                alt={product.title} 
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body text-center">
                <h6 className="card-title text-truncate">{product.title}</h6>
                <p className="text-muted small mb-1">{product.category}</p>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <span className="text-danger fw-bold">${product.discountedPrice}</span>
                  <span className="text-decoration-line-through text-muted small">${product.price}</span>
                </div>
                {/* <button className="btn btn-success btn-sm mt-3 w-100">Add to Cart</button> */}
                   <AddToCartBtn product={product} className="add-to-cart-btn" />

           
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;