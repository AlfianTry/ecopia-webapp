import Head from 'next/head';

import Navigation from '@/components/navigation';

interface IProps {
  children: React.ReactNode;
}

const Page = ({ children }: IProps) => (
  <div>
    <Head>
      <link rel="icon" href="/logo.svg" />
    </Head>
    <div className="flex flex-col min-h-screen">
      <Navigation />
      {children}
    </div>
  </div>
);

export default Page;
