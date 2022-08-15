import Image from 'next/image';
import Link from 'next/link';

import phoneImage from '@/public/assets/images/ecopia-id-phone.jpg';

const ExploreSection = () => {
  return (
    <div
      id="explore"
      className="relative z-20 w-full h-auto bg-white rounded-t-3xl"
    >
      <div className="w-full mx-auto max-w-7xl">
        <div className="grid grid-cols-1 px-10 py-5 lg:grid-cols-2 lg:px-20">
          {/* <img src="/ecopia-id-phone.jpg" alt="phone" className="block w-3/4 h-auto mx-auto" /> */}
          <div className="block mx-auto">
            <Image
              src={phoneImage}
              alt="phone"
              width={450}
              quality={90}
              height={800}
            />
          </div>
          <div className="flex flex-col px-0 my-16 lg:my-36 md:px-10 lg:py-20">
            <h1 className="text-[#FFC30B] text-5xl font-bold">Makan Sehat</h1>
            <h1 className="text-[#068A4F] text-5xl font-bold">Makin Enak</h1>

            {/* <div className="relative h-12 pt-5 w-max">
              <h1 className="text-3xl xl:text-4xl text-[#FFC30B] font-semibold absolute top-1 left-12 xl:left-16">
                care
              </h1>
              <h1 className="text-3xl xl:text-4xl text-[#068A4F] font-semibold">
                We <span className="ml-16 xl:ml-20">about you.</span>
              </h1>
            </div> */}
            <p className="leading-10 py-7 text-md md:text-lg md:leading-10">
              Ecopia memberikan puluhan makanan sehat yang enak dengan harga
              terjangkau dari merchant lokal terbaik. Beli makanan sehat jadi
              lebih mudah karena pilihan produknya telah dipersonalisasi sesuai
              kebutuhan kamu!
            </p>
            <Link href={`/about`}>
              {/* <a className="block py-2 w-max px-4 md:px-8 rounded-full outline outline-2 font-semibold hover:outline-none hover:bg-[#068A4F] hover:text-white transition-all duration-200 text-md md:text-lg text-[#068A4F]"> */}
              <a className="block py-2 w-max px-4 md:px-8 rounded-full font-bold hover:bg-[#ffae0b] transition-all duration-200 text-md md:text-lg text-black bg-[#FFC30B]">
                Cari Tahu di Sini!
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
