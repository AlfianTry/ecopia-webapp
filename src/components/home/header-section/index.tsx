import Image from 'next/image';
import Link from 'next/link';

import bgHeader from '@/public/assets/images/bg-header.jpg';

const HeaderSection = () => {
  return (
    <div className="relative w-full h-[100vh]">
      <div className="brightness-50 w-full h-[105vh] absolute">
        <Image
          alt="header"
          src={bgHeader}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute z-20 w-full">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="font-bold text-[#FFCD34] text-6xl">
            Sehat Bersama Ecopia
          </h1>
          <Link href={`/#explore`}>
            <a className="bg-[#068A4F] mt-10 px-[56px] py-3 rounded-full text-white text-xl border-4 border-none hover:bg-green-900 transition-all duration-200">
              EXPLORE
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
