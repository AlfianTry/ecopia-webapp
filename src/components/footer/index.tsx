import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const mediaSocial = [
    {
      path: '/assets/images/IG.svg',
      url: 'https://www.instagram.com/accounts/login/?next=/ecopia_id/',
    },
    {
      path: '/assets/images/Twitter.svg',
      url: 'https://twitter.com/Ecopia_ID',
    },
    // {
    //   path: '/YT.svg',
    // },
    {
      path: '/assets/images/Tiktok.svg',
      url: 'https://www.tiktok.com/@ecopia.id?fromUrl=%2Fecopia.id&lang=en',
    },
    // {
    //   path: '/Linkedin.svg',
    // },
  ];

  return (
    <div className="w-full bg-[#FFC30B] pt-5 mt-[-8px]">
      <div className="w-full mx-auto max-w-7xl">
        <div className="grid grid-cols-1 mx-2 md:mx-3 md:grid-cols-2">
          <div className="flex flex-col">
            <img
              src="/assets/images/ecopia-logo.svg"
              alt="ecopia-logo"
              className="h-20 w-52"
            />
            <div className="flex flex-row w-full my-5 md:w-2/4 text-md">
              <div className="flex flex-col flex-wrap text-black">
                <Link href={'/about'}>
                  <p className="transition-all duration-200 cursor-pointer hover:text-white">
                    About Us
                  </p>
                </Link>
                <Link href={'/#product'}>
                  <p className="transition-all duration-200 cursor-pointer hover:text-white">
                    Our Products
                  </p>
                </Link>
              </div>
              <div className="flex flex-col flex-wrap mx-8 text-black">
                <Link href={'/#blog'}>
                  <p className="transition-all duration-200 cursor-pointer hover:text-white">
                    Blog
                  </p>
                </Link>
                <Link href={'/#contact'}>
                  <p className="transition-all duration-200 cursor-pointer hover:text-white">
                    Contact Us
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-8">
            <div className="flex flex-row flex-wrap justify-center md:justify-end">
              {mediaSocial.map((media, index) => (
                <a
                  href={media.url}
                  target="_blank"
                  key={index}
                  rel="noreferrer"
                >
                  <img
                    src={media.path}
                    alt="social-logos"
                    className="w-8 h-8 mx-1 cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-1 items-center bg-[#068A4F]">
        <p className="text-white">@2022 Ecopia, Indonesia</p>
      </div>
    </div>
  );
};

export default Footer;
