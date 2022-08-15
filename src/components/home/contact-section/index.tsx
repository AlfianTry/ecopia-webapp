import Image from 'next/image';
import React from 'react';

import saladImage from '@/public/assets/images/salad.png';

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="w-full pt-20 pb-8 mx-auto my-2 max-w-7xl lg:pb-0"
    >
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="hidden lg:block mb-[-8px]">
          <Image
            src={saladImage}
            alt="salad"
            width={500}
            height={400}
            quality={100}
          />
        </div>
        <h1 className="my-5 text-3xl font-semibold text-center md:hidden text-greenEcopia">
          Give Us a Feedback
        </h1>
        <div className="flex flex-col items-start w-full lg:items-center lg:justify-center">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              window.location.href = `mailto:ecopia.id@gmail.com?&subject=${event.target[0].value}&body=${event.target[2].value}`;
            }}
            className="w-full lg:w-3/4"
          >
            <div className="flex-col w-full h-auto">
              <div className="mx-2 mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 font-semibold text-gray-900 md:ml-0 text-md"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-3 py-1 focus:outline-none"
                />
                <div className="bg-[#309D6C] w-[95%] mx-auto md:mx-0 md:w-full mt-1 h-1 rounded-full"></div>
              </div>
              <div className="mx-2 mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 font-semibold text-gray-900 md:ml-0 text-md"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="px-3 py-1 focus:outline-none"
                />
                <div className="bg-[#309D6C] w-[95%] mx-auto md:mx-0 md:w-full mt-1 h-1 rounded-full"></div>
              </div>
              <div className="mx-2 mb-5">
                <label
                  htmlFor="Message"
                  className="block mb-2 font-semibold text-gray-900 md:ml-0 text-md"
                >
                  Message
                </label>
                <input
                  id="message"
                  name="message"
                  type="text"
                  className="px-3 py-1 focus:outline-none"
                />
                <div className="bg-[#309D6C] w-[95%] mx-auto md:mx-0 md:w-full mt-1 h-1 rounded-full"></div>
              </div>
              <button
                type="submit"
                className="w-2/4 bg-[#FFC30B] py-3 block rounded-full outline outline-black hover:outline-[#FFC30B] transition-all duration-300 mx-auto lg:mx-0"
              >
                CONTACT US
              </button>
            </div>
          </form>
        </div>
        <div className="flex-col items-center justify-center hidden md:flex lg:hidden">
          <h1 className="text-4xl text-[#309D6C] font-semibold">Give Us</h1>
          <h1 className="text-4xl text-[#309D6C] font-semibold">a Feedback</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
