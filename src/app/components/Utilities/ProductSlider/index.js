import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Slider from "react-slick";

import { CollectionProduct, ProductsItems } from "../../Utilities";

function ProductSlider({ title, Data, collection }) {
  const settings = {
    infinite: false,
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: true,
    nextArrow: <BsChevronCompactRight size={30} />,
    prevArrow: <BsChevronCompactLeft size={30} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      {collection ? (
        <Slider {...settings}>
          {Data?.length &&
            Data?.map((data) => (
              <CollectionProduct item={data} key={data.id} />
            ))}
        </Slider>
      ) : (
        <>
          <h1 className="text-2xl text-gray-700 font-bold mb-5">{title}</h1>
          <Slider {...settings}>
            {Data?.length &&
              Data?.map((data) => <ProductsItems items={data} key={data.id} />)}
          </Slider>
        </>
      )}
    </>
  );
}

export default ProductSlider;
