import React, {useEffect, useState} from "react";
import Slider from 'react-slick';
import { getAllProducts } from "src/services/products";
import Card from "./card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllShowcases } from "src/services/showcase";

function SampleNextArrow(props) {
  const { className, style, onClick, color } = props;
  return (
    <div
      className={className}
      style={{ ...style, color}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, color} = props;
  return (
    <div
      className={className}
      style={{ ...style, color}}
      onClick={onClick}
    />
  );
}

const fetchData = async (showcases) => {
  const Products = await getAllProducts();

  return showcases.map(showcase => {
    const ShowCaseProducts = Products.filter(product => showcase.products && showcase.products.includes(product.id));

    return {
      ...showcase,
      products: ShowCaseProducts
    };
  });
};

const fecth = async () => {
  const resShowcases = await getAllShowcases();

  return resShowcases;
};

function MultipleItems() {
  const [data, setData] = useState({
    showcases: [],
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow color= '#007bff'/>,
    prevArrow: <SamplePrevArrow color= '#007bff'/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  
  };

  useEffect(() => {
    const fetchDataa = async () => {
      const resShowcases = await fecth();
      const showcasesWithProducts = await fetchData(resShowcases);

      setData({
        showcases: showcasesWithProducts
      });
    };

    fetchDataa();
  }, []);

  return (

    <div className="text-center">
      <h1 className='text-3xl font-semibold item-center'>Populares</h1>

      <hr className='h-2 w-36 bg-[#21242D] mt-2 rounded mx-auto'/>
  
      <Slider {...settings}>
        {data.showcases.length > 0 && (
          data.showcases[0].products.map(product => (
            <Card key={product.id} id={product.id} image={product.image}
                  name={product.name} price={product.price} />
          ))
        )}
      </Slider>
    </div>

  );
}

export default MultipleItems;