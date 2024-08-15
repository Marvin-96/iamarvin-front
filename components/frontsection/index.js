import React from "react"
import Link from 'next/link'
import { frontsection , content } from './frontsection.module.scss'
// import '../../styles/global.scss'
import Image from "next/image"


const Frontsection = () =>  {
  return (
    <div className={frontsection}>
      <div className={content} data-aos="fade-up"
     data-aos-duration="1">
        <p> Marvin Mensah</p>
      <h1> PRODUCT DESIGNER  </h1> 
      <p> Récemment installé à Montréal, je suis ouvert à des opportunités en tant que designer UX. </p>
      
      
      {/* <Image data-aos="zoom-in"
      src="https://iamarvin.com/megaincrediblebackoffice/wp-content/uploads/2024/02/A970FA8E-F954-49F1-A284-2D24F0E70A14.jpeg"
      width={1440}
      height={1799}
      alt="Picture of the author"
    /> */}
      {/* <Image data-aos="zoom-in"
      src="http://localhost:8888/iamarvin-back/wp-content/uploads/2024/02/A970FA8E-F954-49F1-A284-2D24F0E70A14.jpeg"
      width={1440}
      height={1799}
      alt="Picture of the author"
    /> */}
    </div>
    </div>

     

)}

export default Frontsection