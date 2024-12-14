import React, { useRef, useState, useEffect } from "react";
import Carousel from "../components/Hero/Carousel";
import ProductCard from "../components/ProductCard";
import Ellipse from "../assets/Ellipse.svg"
import { FaWhatsapp } from "react-icons/fa";
import logo from '../assets/Group 5.svg'
import { RiProductHuntLine } from "react-icons/ri";

import { useNavigate } from "react-router-dom";
const barproduct = [
  
  {
    id: 40,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTgoVZCCwH57OwQKOvVR_rqg5gvMdXcykSx97qcS0eDB88XY0m9",
    name: "Bubble Top Tile",
    category: "Concrete roofing tiles",
  },
  {
    id: 16,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtW66Vn7quch0IwF3NVzvO2B-eYy-5hOzIkAJL2gez27qNFlcJ",
    name: "Bubble Top Tile",
    category: "Wire clay brick",
  },
  {
    id: 18,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQl2A3ZYyyrblkFRYM-ndYIKVE-kUKFCYq4eLUgRv1M6_4-C0_f",
    name: "Bubble Top Tile",
    category: "Wire clay brick",
  },
  {
    id: 33,
    image:
      "https://i0.wp.com/brickart.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-20-at-1.25.44-PM-5.jpeg?fit=1024%2C683&ssl=1",
    name: "Bubble Top Tile",
    category: "Wire clay brick",
  },
  {
    id: 3,
    image: "../assets/brick.png",
    name: "Bubble Top Tile",
    category: "Clay false ceiling tiles",
  },

  {
    id: 4,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSG8p9F9n1Govx46c9DRdDm-WCwpctlxkjVEGgI97loeUdZJxGx",
    name: "Bubble Top Tile",
    category: "Clay roofing tiles",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTNHPttDVtObMhG2VkHzUjSXve9seQnCMoiXovqfukxz0Yqg_k",
    name: "Bubble Top Tile",
    category: "Clay roofing tiles",
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR543vLRSsnj907vpP_joJBRZpJD7gDc_8daCmRGV7XD54Qu7Yq",
    name: "Bubble Top Tile",
    category: "Clay roofing tiles",
  },
  {
    id: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVcG2j1rxBlIly7r9UzihgfGf_czrP2_fNCA0g23qJ7OBBEMdK",
    name: "Bubble Top Tile",
    category: "Clay roofing tiles",
  },
  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzj5Mwr3tYRUCvlC3jFzXGJqVTKy6jm1DgysSvJFJ4-o7DWon",
    name: "Bubble Top Tile",
    category: "Clay roofing tiles",
  },
  {
    id: 9,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuRADpKOa1EKLjsiWsYSo2RkBgJTMh5Icqa3GiDJbgTbR8VeyG",
    name: "Bubble Top Tile",
    category: "Clay roofing tiles",
  },
];
const featuredProducts = [
  {
    id: 1,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDxgg2y3Vekn0jez0qGL33lVYxmSykExlNxBVWG-nLxWLJriMV",
    name: "Bubble Top Tile",
    category: "Ceramic Roofing Tiles",
    material: "Ceramic",
    description:
      "Durable and aesthetically pleasing ceramic roofing tiles, ideal for residential and commercial buildings.",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_eOEGs8nCHa3plqsSi-kfOVuVDsNG4FCyRlfeG4LZKXslh13i",
    name: "Bubble Top Tile",
    category: "Ceramic Roofing Tiles",
    material: "Ceramic",
    description:
      "Classic ceramic tiles with a bubble top design, providing an elegant look and excellent protection.",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1KPMWEgiP_NWtz_ZRNHcykpzMLOXf7IyK39ZGP2aLh2s2axMy",
    name: "Mangalore Clay Roof Tiles 2",
    category: "Ceramic Roofing Tiles",
    material: "Clay",
    description:
      "Traditional Mangalore-style clay roof tiles known for their durability and natural insulation properties.",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSp2bx6xngrwGOZOAL-zAM4IG6gfjJ7xv4PRVfbsVJNsm6nTYkF",
    name: "Bubble Top Tile",
    category: "Ceramic Roofing Tiles",
    material: "Ceramic",
    description:
      "Versatile and weather-resistant ceramic tiles with a stylish bubble top texture.",
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRnf644F92MMELGlUhIN2t08mruQSQikcIuwtBaIq-fJRtMb-4L",
    name: "Bubble Top Tile",
    category: "Concrete Roofing Tiles",
    material: "Concrete",
    description:
      "High-quality concrete tiles designed for long-lasting durability and low maintenance.",
  }
];

export default function Home() {

  const navigate = useNavigate();

  // Navigate to the product details page
  
  // const trackRef = useRef(null);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const track = trackRef.current;
  //   const slides = Array.from(track.children);

  //   console.log("Number of slides:", slides.length);

  //   const moveToNextSlide = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  //   };

  //   const interval = setInterval(moveToNextSlide, 3500);

  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   const track = trackRef.current;
  //   if (track) {
  //     track.style.transition = "transform 1s ease";
  //     track.style.transform = `translateX(-${currentIndex * 100}%)`;
  //   }
  // }, [currentIndex]);
  // WhatsApp message URL
 const whatsappMessage = encodeURIComponent(`
Could you share more details and assist with the purchase? 😊`);
 const whatsappLink = `https://wa.me/+919865980220?text=${whatsappMessage}`;

 const goToProductPage = () => {
   window.location.href = whatsappLink; // Navigate to the external WhatsApp link
 };

  return (
    <div className="home-wrapper">
      <img src={Ellipse} alt="" className="backgroundImg" />
      <img src={Ellipse} alt="" className="backgroundImg1" />

      <div className="home-display">
        <div className="first">
          <h1>DESIGN YOUR ROOF, YOUR WAY</h1>
          <p>
            Mix and match GAF shingle styles and colors along with siding, trim,
            and doors to create the perfect look for your home.
          </p>
        </div>
        <div className="second">
          <div className="card">
            <img src={logo} alt="logo" />
            <button onClick={()=>{
              navigate('/products');
            }}>
              <RiProductHuntLine />
              Products
            </button>
          </div>
          <div className="card">
            <img src={logo} alt="logo" />
            <button onClick={() => goToProductPage()}>
              <FaWhatsapp /> WhatsApp
            </button>
          </div>
        </div>
      </div>

      <div className="companies-brand">
        Brands
        <div className="companies">
          <img src={logo} alt="" /> <img src={logo} alt="" />{" "}
          <img src={logo} alt="" /> <img src={logo} alt="" />{" "}
          <img src={logo} alt="" /> <img src={logo} alt="" />{" "}
          <img src={logo} alt="" />
        </div>
      </div>

      <Carousel />

      <div className="home-featured-section">
        <div className="home-featured-header">
          <h2 className="home-featured-title">Featured Products</h2>
          <p className="home-featured-description">
            Discover our selection of premium roofing tiles, designed to enhance
            the beauty and protection of your home.
          </p>
        </div>
        <div className="home-products-grid">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}