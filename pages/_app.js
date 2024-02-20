import {useEffect, useState} from 'react'
import  {useRouter} from "next/router"
import '@/styles/globals.scss'
// import { RobineDemo } from'@/public/font/iamarvin/RobineDemoRegular-L3ezn.otf'
import '@/public/font/fonts.scss';
import Header from  '@/components/header'
import Navbar from  '@/components/navbar'
import Footer from  '@/components/footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

// const robineDemo = RobineDemo({ subsets: ['latin'] })

function Loading(){
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
      const handleStart = (url) => (url !== router.asPath) && setLoading(true);
      const handleComplete = (url) => (url === router.asPath)  &&  setLoading(false);
      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError', handleComplete)
      

      return () => {
        router.events.off('routeChangeStart', handleStart)
        router.events.off('routeChangeComplete', handleComplete)
        router.events.off('routeChangeError', handleComplete)
      }

  })

  return loading && (
    <div className='loading-bg'>
      <div className='loading-element'></div>
    </div>
  )
}

 function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({ duration: 1000 });

}, []);
  return (
    <>
    
    <Header />

    {/* <Loading /> */}

    <Navbar />
    
      <Component {...pageProps} />
    
    <Footer />
  </>
  )
}

export default App
