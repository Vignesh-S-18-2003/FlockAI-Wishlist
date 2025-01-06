import { useRef, useState } from 'react'
import hero from "./assets/hero.svg";
import logo from "./assets/logo.svg";
import help from "./assets/help-bg.png";
import carousel1 from "./assets/carousel-img-1.png";
import servicIcon from "./assets/services.png";
import transparent from "./assets/transparent-icon-1.svg";
import serviceIcon1 from "./assets/service-icon-1.svg";
import serviceIcon2 from "./assets/service-icon-2.svg";
import serviceIcon3 from "./assets/service-icon-3.svg";
import serviceIcon4 from "./assets/service-icon-4.svg";
import playBtn from "./assets/play-btn.svg";
import client1 from "./assets/client-1.svg";
import client2 from "./assets/client-2.svg";
import client3 from "./assets/client-3.svg";
import client4 from "./assets/client-4.svg";
import client5 from "./assets/client-5.svg";
import client6 from "./assets/client-6.svg";
import client7 from "./assets/client-7.svg";
import leftArrow from "./assets/left-arrow-dark.png";
import rightArrow from "./assets/right-arrow-light.png";
import star from "./assets/star.svg";
import profile1 from "./assets/profile-1.svg";
import phone from "./assets/phone.svg";
import phoneFooter from "./assets/phone-footer.svg";
import mail from "./assets/mail.svg";
import location from "./assets/location.svg";
import indiaMap from "./assets/india-mar.svg";
import jdLogo from "./assets/jd.png";
import whatsapp from "./assets/whatsapp.svg";
import ProductCarousel from './ProductCarousel';


function App() {
  const [count, setCount] = useState(0)
  const [productSlide, setProductSlide] = useState(0); // Track the product slide
  const [testSlide, setTestSlide] = useState(0); // Track the testimonial slide

  const productCarouselRef = useRef(null); // Ref for the product carousel
  const testCarouselRef = useRef(null); // Ref for the testimonial carousel

  const productWidth = 397; // Width of each product (adjust as needed)

  const slideForward = () => {
    const productCarousel = productCarouselRef.current;
    const products = productCarousel.children.length;

    // Increment forward and reset if it exceeds total products
    const newSlide = (productSlide + 1) % products;
    setProductSlide(newSlide);

    // Apply translateX based on the current slide index
    productCarousel.style.transform = `translateX(-${newSlide * productWidth}px)`;
  };

  const slideBackward = () => {
    const productCarousel = productCarouselRef.current;
    const products = productCarousel.children.length;

    // Decrement backward and reset if it goes below 0
    const newSlide = productSlide - 1 < 0 ? 0 : productSlide - 1;
    setProductSlide(newSlide);

    // Apply translateX based on the current slide index
    productCarousel.style.transform = `translateX(-${newSlide * productWidth}px)`;
  };

  const slideTestimonialForward = () => {
    const testCarousel = testCarouselRef.current;
    const testimonials = testCarousel.children.length;

    // Increment forward and reset if it exceeds total testimonials
    const newTestSlide = (testSlide + 1) % testimonials;
    setTestSlide(newTestSlide);

    // Apply translateX based on the current slide index
    testCarousel.style.transform = `translateX(-${newTestSlide * productWidth}px)`;
  };

  const slideTestimonialBackward = () => {
    const testCarousel = testCarouselRef.current;
    const testimonials = testCarousel.children.length;

    // Decrement backward and reset if it goes below 0
    const newTestSlide = testSlide - 1 < 0 ? 0 : testSlide - 1;
    setTestSlide(newTestSlide);

    // Apply translateX based on the current slide index
    testCarousel.style.transform = `translateX(-${newTestSlide * productWidth}px)`;
  };


  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="" class="me-2" />
          <span class="fw-bold fs-3">SIB</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav ms-auto me-5 d-flex justify-content-between gap-lg-5 gap-sm-0"
          >
            <li class="nav-item">
              <a href="#" class="nav-link text-dark">Home</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-dark">About</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-dark"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <img src={phone} alt="" />
              <span>+2349067322844</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section class="mt-5" id="hero">
      <div
        class="container d-flex flex-lg-row flex-column-reverse justify-content-between align-items-center"
      >
        <div>
          <h1 class="fw-bold fs-1 lh-base mb-5 hero-text">
            A Tradition of Excellence commitment to quality of product
          </h1>
          <button class="menu-btn">View Products</button>
        </div>
        <div>
          <img src={hero} alt="hero-img" class="hero-img" />
        </div>
      </div>
    </section>
    <section id="description" class="mt-5">
      <div class="container">
        <p class="desc-text">
          SIB is a leading provider of advanced solutions in pneumatics and
          safety equipment. Boasting extensive experience and a team of
          dedicated professionals, we are unwaveringly dedicated to delivering
          top-notch products and services. Our commitment is centered on meeting
          the diverse needs of our customers, ensuring their satisfaction with
          the quality we offer. With years of expertise in the field, we
          specialize in staying at the forefront of technological advancements
          to provide cutting-edge solutions. At SIB, our focus is on excellence,
          and we take pride in our ability to consistently deliver high-quality
          products and services that align with the evolving demands of our
          clientele.
        </p>
      </div>
    </section>
    <section id="stats" class="position-relative">
      <img
        src={transparent}
        alt=""
        class="position-absolute icon-1"
      />
      <div
        class="d-flex container justify-content-evenly flex-lg-row flex-column"
      >
        <div class="text-center">
          <p class="blue-txt fw-semibold">80+</p>
          <p>Satisfied Clients</p>
        </div>
        <div
          style={{borderLeft: '1.5px solid rgba(0, 175, 239, 1)', height:'100px'}}
          class="vertical-line"
        ></div>
        <div class="text-center">
          <p class="blue-txt fw-semibold">100+</p>
          <p>Satisfied Clients</p>
        </div>
        <div
          style={{borderLeft: '1.5px solid rgba(0, 175, 239, 1)', height:'100px'}}
          class="vertical-line"
        ></div>
        <div class="text-center">
          <p class="blue-txt fw-semibold">25+</p>
          <p>Products</p>
        </div>
      </div>
    </section>
    <section id="products" class="overflow-hidden">
      <h2 class="text-center fw-semibold">
        Products we <span class="blue-txt">offer for you</span>
      </h2>
      <p class="text-center">With lots of unique blocks,</p>
      <div class="buttons d-flex mb-5">
        <button
          class="forward ms-auto arrow-btn"
          onClick="slideBackward()"
          id="backward-btn"
        >
          <img src={leftArrow} alt="" />
        </button>
        <button
          class="Backward me-5 arrow-btn"
          onClick="slideForward()"
          id="forward-btn"
        >
          <img src={rightArrow} alt="" />
        </button>
      </div>
      <div class="carousel d-flex gap-5" id="product-carousel">
        <div class="product-card">
          <img src={carousel1} alt="" class="carousel-img" />
          <h5 class="mt-2 mb-2">Product Name</h5>
          <p class="para-text">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.With lots of unique blocks, you
            can easily build a page without coding. Build your next landing
            page.
          </p>
          <p><span class="b-text">Read More</span></p>
        </div>
        <div class="product-card">
          <img src={carousel1} alt="" class="carousel-img" />
          <h5 class="mt-2 mb-2">Product Name</h5>
          <p class="para-text">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.With lots of unique blocks, you
            can easily build a page without coding. Build your next landing
            page.
          </p>
          <p><span class="b-text">Read More</span></p>
        </div>
        <div class="product-card">
          <img src={carousel1} alt="" class="carousel-img" />
          <h5 class="mt-2 mb-2">Product Name</h5>
          <p class="para-text">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.With lots of unique blocks, you
            can easily build a page without coding. Build your next landing
            page.
          </p>
          <p><span class="b-text">Read More</span></p>
        </div>
        <div class="product-card">
          <img src={carousel1} alt="" class="carousel-img" />
          <h5 class="mt-2 mb-2">Product Name</h5>
          <p class="para-text">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.With lots of unique blocks, you
            can easily build a page without coding. Build your next landing
            page.
          </p>
          <p><span class="b-text">Read More</span></p>
        </div>
        <div class="product-card">
          <img src={carousel1} alt="" class="carousel-img" />
          <h5 class="mt-2 mb-2">Product Name</h5>
          <p class="para-text">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.With lots of unique blocks, you
            can easily build a page without coding. Build your next landing
            page.
          </p>
          <p><span class="b-text">Read More</span></p>
        </div>
        <div class="product-card">
          <img src={carousel1} alt="" class="carousel-img" />
          <h5 class="mt-2 mb-2">Product Name</h5>
          <p class="para-text">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.With lots of unique blocks, you
            can easily build a page without coding. Build your next landing
            page.
          </p>
          <p><span class="b-text">Read More</span></p>
        </div>
        <div class="product-card">
          <img src={carousel1} alt="" class="carousel-img" />
          <h5 class="mt-2 mb-2">Product Name</h5>
          <p class="para-text">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.With lots of unique blocks, you
            can easily build a page without coding. Build your next landing
            page.
          </p>
          <p><span class="b-text">Read More</span></p>
        </div>
      </div>
    </section>
    {/* <ProductCarousel/> */}
    <section id="services">
      <div class="service-box">
        <h1 class="text-center">
          Services we <span class="blue-txt">provide</span>
        </h1>
        <div class="d-flex gap-1 mt-5">
          <img src={servicIcon} alt="" class="service-img" />
          <div class="d-flex flex-column justify-content-between">
            <div class="d-flex align-items-start gap-2 pe-5">
              <img src={serviceIcon1} alt="" class="me-2" />
              <div>
                <h4 class="fw-semibold">Product Supply</h4>
                <p>
                  We offer a wide range of high-quality pneumatics and safety
                  products from leading manufacturers.
                </p>
              </div>
            </div>
            <div class="d-flex align-items-start gap-2 pe-5">
              <img src={serviceIcon2} alt="" class="me-2" />
              <div>
                <h4 class="fw-semibold">Product Supply</h4>
                <p>
                  We offer a wide range of high-quality pneumatics and safety
                  products from leading manufacturers.
                </p>
              </div>
            </div>
            <div class="d-flex align-items-start gap-2 pe-5">
              <img src={serviceIcon3} alt="" class="me-2" />
              <div>
                <h4 class="fw-semibold">Product Supply</h4>
                <p>
                  We offer a wide range of high-quality pneumatics and safety
                  products from leading manufacturers.
                </p>
              </div>
            </div>
            <div class="d-flex align-items-start gap-2 pe-5">
              <img src={serviceIcon4} alt="" class="me-2" />
              <div>
                <h4 class="fw-semibold">Product Supply</h4>
                <p>
                  We offer a wide range of high-quality pneumatics and safety
                  products from leading manufacturers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="help">
      <div class="help-bg-container">
        <img src={help} alt="" class="help-img" />
        <div class="text-center help-text">
          <span class="round-icon"
            ><img src={playBtn} alt=""
          /></span>
          <h3 class="fs-1 mt-2">How do we help you ?</h3>
          <p>View all your products</p>
        </div>
      </div>
    </section>
    <section id="clients">
      <h1 class="text-center">Our <span class="blue-txt">Clients</span></h1>
      <p class="text-center">
        We have been working with some Fortune 500+ clients
      </p>
      <div class="container mt-5 mb-5">
        <div class="d-flex justify-content-between">
          <img src={client1} alt="" />
          <img src={client2} alt="" />
          <img src={client3} alt="" />
          <img src={client4} alt="" />
          <img src={client5} alt="" />
          <img src={client6} alt="" />
          <img src={client7} alt="" />
        </div>
      </div>
    </section>
    <section id="testimonials" class="overflow-hidden">
      <h1 class="text-center">Our Customer Say 
        Something <span class="blue-txt">About Us</span></h1>
        <div class="buttons d-flex mb-5">
          <button
            class="forward ms-auto arrow-btn"
            onClick="slideTestimonialBackward()"
            id="backward-test-btn"
          >
            <img src={leftArrow} alt=""/>
          </button>
          <button
            class="Backward me-5 arrow-btn"
            onClick="slideTestimonialForward()"
            id="forward-test-btn"
          >
            <img src={rightArrow} alt=""/>
          </button>
        </div>
        <div class="carousel d-flex gap-5" id="test-carousel">
          <div class="testimonial-card">
            <div>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
            </div>
            <p class="mt-3">
              We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company
            </p>
            <div class="d-flex align-items-center">
              <img src={profile1}alt="" class="me-2"/>
              <div>
                <p class="mb-0 fw-semibold mt-3">Amir Uddin</p>
                <p class="mt-0">UX Designer</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
            </div>
            <p class="mt-3">
              We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company
            </p>
            <div class="d-flex align-items-center">
              <img src={profile1} alt="" class="me-2"/>
              <div>
                <p class="mb-0 fw-semibold mt-3">Amir Uddin</p>
                <p class="mt-0">UX Designer</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
            </div>
            <p class="mt-3">
              We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company
            </p>
            <div class="d-flex align-items-center">
              <img src={profile1} alt="" class="me-2"/>
              <div>
                <p class="mb-0 fw-semibold mt-3">Amir Uddin</p>
                <p class="mt-0">UX Designer</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
            </div>
            <p class="mt-3">
              We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company
            </p>
            <div class="d-flex align-items-center">
              <img src={profile1} alt="" class="me-2"/>
              <div>
                <p class="mb-0 fw-semibold mt-3">Amir Uddin</p>
                <p class="mt-0">UX Designer</p>
              </div>
            </div>
          </div>
        </div>  
    </section>
    <section id="freq-asked-questions">
        <h1 class="text-center">Frequently Ask <span class="blue-txt">Questions</span></h1>
        <div class="container show-box-cont">
          <div class="show-box d-flex justify-content-between align-items-center mt-5">
            <div class="fw-semibold fs-4">01</div>
            <div class="fs-5">Do you provide installation services for your  products?</div>
            <div class="plus-icon d-flex justify-content-center align-items-center"><span>+</span></div>
          </div>
          <div class="show-box d-flex justify-content-between align-items-center mt-5">
            <div class="fw-semibold fs-4">02</div>
            <div class="fs-5">Do you provide installation services for your  products?</div>
            <div class="plus-icon d-flex justify-content-center align-items-center"><span>+</span></div>
          </div>
          <div class="show-box d-flex justify-content-between align-items-center mt-5">
            <div class="fw-semibold fs-4">03</div>
            <div class="fs-5">Do you provide installation services for your  products?</div>
            <div class="plus-icon d-flex justify-content-center align-items-center"><span>+</span></div>
          </div>
          <div class="show-box d-flex justify-content-between align-items-center mt-5">
            <div class="fw-semibold fs-4">04</div>
            <div class="fs-5">Do you provide installation services for your  products?</div>
            <div class="plus-icon d-flex justify-content-center align-items-center"><span>+</span></div>
          </div>
          <div class="show-box d-flex justify-content-between align-items-center mt-5">
            <div class="fw-semibold fs-4">05</div>
            <div class="fs-5">Do you provide installation services for your  products?</div>
            <div class="plus-icon d-flex justify-content-center align-items-center"><span>+</span></div>
          </div>
          <div class="show-box d-flex justify-content-between align-items-center mt-5">
            <div class="fw-semibold fs-4">06</div>
            <div class="fs-5">Do you provide installation services for your  products?</div>
            <div class="plus-icon d-flex justify-content-center align-items-center"><span>+</span></div>
          </div>
        </div>
    </section>
    <section id="footer">
      <h1 class="text-center">Let's Get <span class="blue-txt">Connected</span></h1>
      <p class="text-center">Let’s make something new, different and more meaningful or make thing more visual or conceptual</p>
      <div class="container mt-5 d-flex justify-content-between gap-5 mb-5 px-3 py-3 ">
        <div class="d-flex flex-column gap-3">
          <div class="d-flex align-items-center gap-3">
            <div class="footer-icon p-3">
              <img src={phoneFooter} alt=""/>
            </div>
            <div>
              <p class="mb-0 mt-3">Call me</p>
              <p class="">+8801613968687</p>
            </div>
          </div>
          <div class="d-flex align-items-center gap-3">
            <div class="footer-icon p-3">
              <img src={mail} alt=""/>
            </div>
            <div>
              <p class="mb-0 mt-3">Email me</p>
              <p class="">ahvir8687@gmail.com</p>
            </div>
          </div>
          <div class="d-flex align-items-center gap-3">
            <div class="footer-icon p-3">
              <img src={location} alt=""/>
            </div>
            <div>
              <p class="mb-0 mt-3">Address</p>
              <p class="">Anna nagar, Chennai.</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
          <div class="col-6 mb-3 px-3 py-3"><input type="text" placeholder="Full name"  class="px-3 py-2"/></div>
          <div class="col-6 mb-3 px-3 py-3"><input type="email" name="" id="" placeholder="Your email" class="px-3 py-2"/></div>
          <div class="col-6 mb-3 px-3 py-3"><input type="number" placeholder="Phone number" class="px-3 py-2"/></div>
          <div class="col-6 mb-3 px-3 py-3"><input type="name" class="px-3 py-2" placeholder="Product"/></div>
          <div><textarea name="" id="" placeholder="Message" class="px-3 py-2 col-12"></textarea></div>
          <div class="button-space d-flex mt-4"><button class="ms-auto menu-btn">Submit Message</button></div>
        </div>
        </div>
      </div>
  </section>
  <section class="lower-footer d-flex container justify-content-between pt-4">
    <div><p>@ 2024. All Rights Reserved</p></div>
    <div class="d-flex gap-5">
      <span>Home</span>
      <span>Products</span>
      <span>About</span>
    </div>
    <div>
      <img src={indiaMap} alt="" class="me-3"/>
      <img src={jdLogo} alt="" class="me-3"/>
      <img src={whatsapp} alt=""/>
    </div>
  </section>
  </>
  )
}

export default App
