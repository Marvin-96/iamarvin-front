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
import { motion } from "framer-motion"

// const robineDemo = RobineDemo({ subsets: ['latin'] })


 function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({ duration: 1000 });

}, []);

const anim = (variants) => {

    return {
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants
    }
    }

    const opacity = {
      initial: {
        opacity: 0
      },
      enter: {
        opacity: 0
      },
      exit: {
        opacity: 0
      }
}

  return (
    <>
    {/* <motion.div {...anim(opacity)}> */}
        <Header />
        <Navbar />
        
          <Component {...pageProps} />
        <Footer />
    {/* </motion.div> */}
  </>
  )
}

export default App
