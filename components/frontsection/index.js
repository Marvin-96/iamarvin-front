import React from "react"
import Link from 'next/link'
import { frontsection , content } from './frontsection.module.scss'
// import '../../styles/global.scss'
import Image from "next/image"


const Frontsection = () =>  {
  return (
    <div className={frontsection}>
      <div className={content}>
      <h1 data-aos="fade-up"
     data-aos-duration="1"> Bonjour<br/> je suis Marvin Mensah. Je suis PRODUCT DESIGNER  </h1> 
      {/* <p> Je suis PRODUCT DESIGNER  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in diam ultricies, iaculis turpis ut, mollis orci. Sed lobortis nibh sed odio mollis ultrices. Aliquam erat volutpat. Praesent sed tincidunt urna. Ut id mi urna. Aliquam pretium consequat blandit. Sed porta, ligula nec blandit consectetur,  </p> */}
      <Image data-aos="zoom-in"
      src="https://iamarvin.com/megaincrediblebackoffice/wp-content/uploads/2024/02/A970FA8E-F954-49F1-A284-2D24F0E70A14.jpeg"
      width={1440}
      height={1799}
      alt="Picture of the author"
    />
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