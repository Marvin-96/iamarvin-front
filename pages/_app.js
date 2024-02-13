import '@/styles/globals.scss'
// import { RobineDemo } from'@/public/font/iamarvin/RobineDemoRegular-L3ezn.otf'
import '@/public/font/fonts.scss';
import Header from  '@/components/header'
import Navbar from  '@/components/navbar'
import Footer from  '@/components/footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'

// const robineDemo = RobineDemo({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({ duration: 1000 });

}, []);
  return (
    <>
    <Header />
    <Navbar />
    
      <Component {...pageProps} />
    
    <Footer />
  </>
  )
}
