import '../styles/global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <TawkMessengerReact
      propertyId="62f8ba2b37898912e962e640"
      widgetId="1gadpef5e"
    />
  </>
);

export default MyApp;
