import Image from 'next/image';
import React, { useState } from 'react';
import Slider from 'react-slick';

const ProductSection = () => {
  const [indexArr, setIndex] = useState(0);

  const NextArrow = (props) => {
    return (
      <div onClick={props.onClick}>
        <img
          src="/next.svg"
          alt="next"
          className="absolute right-[35%] md:right-[40%] lg:right-[45%] bottom-0 z-10 w-10 mb-[-30px] cursor-pointer"
        />
      </div>
    );
  };
  const PrevArrow = (props) => {
    return (
      <div onClick={props.onClick}>
        <img
          src="/prev.svg"
          alt="prev"
          className="absolute bottom-0 left-[35%] md:left-[40%] lg:left-[45%] z-10 w-10 mb-[-30px] cursor-pointer"
        />
      </div>
    );
  };

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next: number) => setIndex(next),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const products = [
    {
      title: 'Mulai Belanja!',
      description:
        'Ada puluhan makanan sehat yang enak, murah, dan telah dipersonalisasi khusus untuk kamu.',
      image: '/assets/images/product-2.svg',
    },
    {
      title: 'Forum Diskusi',
      description:
        'Bagikan cerita kamu tentang makanan sehat dengan teman-teman baru di dalam komunitas.',
      image: '/assets/images/product-3.svg',
    },
    {
      title: 'Gabung Kemitraan',
      description:
        'Ecopia sedang mencari UMKM lokal untuk masuk ke marketplace kami! GRATIS!.',
      image: '/assets/images/product-4.svg',
    },
    {
      title: 'Butuh Konsultasi?',
      description:
        'Yuk ngobrol dengan ahli gizi berpengalaman yang siap bantu kamu hidup sehat. Gratis dan praktis!',
      image: '/assets/images/product-1.svg',
    },
  ];

  return (
    <div
      id="product"
      className="pt-8 pb-12 bg-white lg:pt-16 2xl:pt-24 lg:rounded-b-3xl"
    >
      <div className="w-full mx-auto max-w-7xl">
        <div className="bg-[#FFC30B] mx-2 xl:mx-0 rounded-3xl px-3 md:px-12 pt-4 pb-12 mt-6 h-auto relative">
          <h1 className="my-5 text-4xl font-bold text-center text-[#068A4F]">
            <span className="text-[#232222] font-bold">Produk </span>
            Ecopia
          </h1>
          <div className="w-full">
            <Slider {...settings}>
              {products.map((product, index) => (
                <div
                  className={`bg-[#FFF3CE] w-1/4 ${
                    index === indexArr
                      ? 'scale-[0.8] lg:scale-[0.9]'
                      : 'scale-[0.6]'
                  } h-full rounded-2xl transition-all duration-300 mt-[56px]`}
                  key={index}
                >
                  <div className="flex flex-row justify-center w-full h-auto">
                    <Image
                      src={product.image}
                      alt="food"
                      width={'300px'}
                      height={'300px'}
                      className="mt-[-100px]"
                    />
                    {/* <img src={product.image} alt="food" className="block w-[300px] h-[300px] mt-[-100px]" /> */}
                  </div>
                  <div className="flex flex-col px-5 py-3 pt-5">
                    <h3 className="text-4xl font-semibold text-center text-greenEcopia">
                      {product.title}
                    </h3>
                    <p className="my-3 text-sm text-center text-woodEcopia">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
