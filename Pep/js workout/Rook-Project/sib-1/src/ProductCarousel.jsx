import React, { useRef, useState } from "react";
import leftArrow from "./assets/left-arrow-dark.png";
import rightArrow from "./assets/right-arrow-light.png";
import carousel1 from "./assets/client-1.svg"; // Example image import

const ProductCarousel = () => {
  const [productSlide, setProductSlide] = useState(0);
  const productCarouselRef = useRef(null);

  const productWidth = 397; // Adjust based on your design

  const slideForward = () => {
    const productCarousel = productCarouselRef.current;
    if (!productCarousel) return;

    const products = productCarousel.children.length;
    const newSlide = Math.min(productSlide + 1, products - 1); // Prevent oversliding
    setProductSlide(newSlide);

    productCarousel.style.transform = `translateX(-${newSlide * productWidth}px)`;
  };

  const slideBackward = () => {
    const productCarousel = productCarouselRef.current;
    if (!productCarousel) return;

    const newSlide = Math.max(productSlide - 1, 0); // Prevent going negative
    setProductSlide(newSlide);

    productCarousel.style.transform = `translateX(-${newSlide * productWidth}px)`;
  };

  return (
    <section id="products" className="overflow-hidden">
      <h2 className="text-center fw-semibold">
        Products we <span className="blue-txt">offer for you</span>
      </h2>
      <p className="text-center">With lots of unique blocks,</p>

      <div className="buttons d-flex mb-5">
        <button className="arrow-btn ms-auto" onClick={slideBackward} id="backward-btn">
          <img src={leftArrow} alt="Previous" />
        </button>
        <button className="arrow-btn me-5" onClick={slideForward} id="forward-btn">
          <img src={rightArrow} alt="Next" />
        </button>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel d-flex gap-5" ref={productCarouselRef}>
          {[...Array(7)].map((_, index) => (
            <div className="product-card" key={index}>
              <img src={carousel1} alt="Product" className="carousel-img" />
              <h5 className="mt-2 mb-2">Product Name</h5>
              <p className="para-text">
                With lots of unique blocks, you can easily build a page without coding. 
                Build your next landing page.
              </p>
              <p><span className="b-text">Read More</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
