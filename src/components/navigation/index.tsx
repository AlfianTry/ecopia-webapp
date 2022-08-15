import { Transition } from '@headlessui/react';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Navigation = () => {
  const [color, setColor] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const changeColorNavbar = () => {
    if (window.scrollY >= 124) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeColorNavbar);
  }, []);
  return (
    <nav
      className={`fixed z-30 w-full ${
        color ? 'bg-[#FFC30B]' : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className="w-full px-3 mx-auto my-3 max-w-7xl lg:px-0">
        <div className="flex flex-wrap items-center justify-between w-full">
          <Link href={`/`}>
            <a
              className="flex items-center"
              onClick={() => setIsOpen(false)}
              title="Home"
            >
              <img
                src="/logo.svg"
                className="h-auto w-36 2xl:w-44"
                alt="ecopia"
              />
            </a>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`block lg:hidden ${color ? 'text-black' : 'text-white'}`}
          >
            <Hamburger toggled={isOpen} />
          </button>
          <div id="mobile-menu" className="block w-full lg:hidden">
            <Transition
              show={isOpen}
              enter="transition ease-out duration-150 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-150 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              <div className="flex flex-col items-start w-full bg-[#FFC30B]">
                <Link href={`/`}>
                  <span
                    className="items-center justify-center w-full px-3 py-2 text-black rounded cursor-pointer hover:text-white hover:transition-all hover:duration-500"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    HOME
                  </span>
                </Link>
                <Link href={`/#product`}>
                  <span
                    className="items-center justify-center w-full px-3 py-2 text-black rounded cursor-pointer hover:text-white hover:transition-all hover:duration-500"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    PRODUCT
                  </span>
                </Link>
                <Link href={`/blog`}>
                  <span
                    className="items-center justify-center w-full px-3 py-2 text-black rounded cursor-pointer hover:text-white hover:transition-all hover:duration-500"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    BLOG
                  </span>
                </Link>
                <Link href={`/about`}>
                  <span
                    className="items-center justify-center w-full px-3 py-2 text-black rounded cursor-pointer hover:text-white hover:transition-all hover:duration-500"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    ABOUT US
                  </span>
                </Link>
                <Link href={`/#contact`}>
                  <span
                    className="items-center justify-center w-full px-3 py-2 text-black rounded cursor-pointer hover:text-white hover:transition-all hover:duration-500"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    CONTACT US
                  </span>
                </Link>
              </div>
            </Transition>
          </div>
          <div className={`hidden w-full lg:block md:w-auto`}>
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link href={'/'}>
                  <a
                    className={`block ${
                      router.pathname === '/'
                        ? 'bg-[#068A4F]'
                        : 'outline outline-2 hover:outline-none hover:bg-[#068A4F] '
                    } py-2 px-8 text-white rounded-full font-semibold transition-all duration-200`}
                  >
                    HOME
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/#product'}>
                  <a
                    className={`block ${
                      router.pathname === '/#product'
                        ? 'bg-[#068A4F]'
                        : 'outline outline-2 hover:outline-none hover:bg-[#068A4F] '
                    } py-2 px-8 text-white rounded-full font-semibold transition-all duration-200`}
                  >
                    PRODUCT
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/blog'}>
                  <a
                    className={`block ${
                      router.pathname === '/blog'
                        ? 'bg-[#068A4F]'
                        : 'outline outline-2 hover:outline-none hover:bg-[#068A4F] '
                    } py-2 px-8 text-white rounded-full font-semibold transition-all duration-200`}
                  >
                    BLOG
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/about'}>
                  <a
                    className={`block ${
                      router.pathname === '/about'
                        ? 'bg-[#068A4F]'
                        : 'outline outline-2 hover:outline-none hover:bg-[#068A4F] '
                    } py-2 px-8 text-white rounded-full font-semibold transition-all duration-200`}
                  >
                    ABOUT US
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/#contact'}>
                  <a
                    className={`block ${
                      router.pathname === '/contact'
                        ? 'bg-[#068A4F]'
                        : 'outline outline-2 hover:outline-none hover:bg-[#068A4F] '
                    } py-2 px-8 text-white rounded-full font-semibold transition-all duration-200`}
                  >
                    CONTACT US
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
