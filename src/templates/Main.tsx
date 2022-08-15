import type { ReactNode } from 'react';

import Navigation from '@/components/navigation';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ meta, children }: IMainProps) => (
  <div>
    {meta}
    <div className="flex flex-col min-h-screen">
      <Navigation />
      {children}
    </div>
  </div>
);

export { Main };
