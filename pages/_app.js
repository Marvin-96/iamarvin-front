import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '@/styles/globals.scss';
import '@/public/font/fonts.scss';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { I18nProvider } from '@/locales';

function App({ Component, pageProps }) {

  const router = useRouter();
  const locale = router.locale || 'fr'; 


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);





  const anim = (variants) => ({
    initial: 'initial',
    animate: 'animate',
    exit: 'exit',
    variants,
  });

  const opacity = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <I18nProvider locale={locale}> 
      <>
        {/* <motion.div {...anim(opacity)}> */}
        <Header />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        {/* </motion.div> */}
      </>
    </I18nProvider>
  );
}

export default App;
