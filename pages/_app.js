import { I18nProvider, getLocaleProps } from '@/locales';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/styles/globals.scss';
import '@/public/font/fonts.scss';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

function App({ Component, pageProps, locale }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <I18nProvider locale={locale}>
      <>
        <Header />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    </I18nProvider>
  );
}

// Charge la locale côté serveur
App.getInitialProps = async (appContext) => {
  const localeProps = await getLocaleProps(appContext.ctx);
  return { ...localeProps };
};

export default App;
