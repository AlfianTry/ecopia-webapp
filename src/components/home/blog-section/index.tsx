import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Carousel from 'react-grid-carousel';

const BlogSection = ({ listsBlog }) => {
  const next = () => {
    return (
      <img
        src="/next.svg"
        alt="next"
        className="w-10 h-10 absolute top-[50%] right-0 cursor-pointer z-10"
      />
    );
  };
  const prev = () => {
    return (
      <img
        src="/prev.svg"
        alt="next"
        className="w-10 h-10 absolute top-[50%] left-0 cursor-pointer z-10"
      />
    );
  };

  const [hover, setHover] = useState(null);

  return (
    <div id="blog" className="w-full pt-20 bg-[#068A4F] rounded-2xl">
      <div className="w-full py-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl text-[#FFC30B] font-semibold">Blog</h1>
        </div>
        <div className="block w-full py-8 mx-auto">
          <div className="px-8">
            <Carousel
              cols={2}
              rows={2}
              arrowRight={next}
              arrowLeft={prev}
              mobileBreakpoint={767}
              loop
            >
              {listsBlog.map((show) => {
                return (
                  <Carousel.Item key={show.id}>
                    <Link href={`/read-article/${show.slug}`}>
                      <div
                        className="relative w-full mx-auto my-5 text-sm font-semibold bg-white cursor-pointer md:w-3/4 md:text-md shadow-card rounded-2xl"
                        onMouseEnter={() => setHover(show.id)}
                        onMouseLeave={() => setHover(null)}
                      >
                        <div className="w-full h-[240px] rounded">
                          <Image
                            src={show.cover.url}
                            alt={show.title}
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: '0.25rem' }}
                          />
                        </div>
                        <div
                          className={`absolute bottom-0 ${
                            hover === show.id
                              ? 'bg-[#FFC30B] text-black'
                              : 'bg-[#068A4F] text-white'
                          } bg-opacity-50 w-full py-8 px-5 rounded-b transition-all duration-300`}
                        >
                          <p>{show.title}</p>
                          {hover === show.id && (
                            <div className="hidden mt-2 lg:block">
                              <p className="text-sm">By {show.author.name}</p>
                              <div className="absolute bottom-8 right-5">
                                <div className="flex flex-row">
                                  <img
                                    src="/calendar.svg"
                                    alt="calendar"
                                    className="w-5 h-5"
                                  />
                                  <p className="mx-2 text-sm">
                                    {new Date(show.created_at).toLocaleString(
                                      'id-ID',
                                      {
                                        dateStyle: 'medium',
                                      }
                                    )}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <div className="flex justify-center">
            <Link href={'/blog'}>
              <a className="px-5 py-2 mt-5 rounded-full bg-[#FFC30B] outline outline-2">
                See all
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
