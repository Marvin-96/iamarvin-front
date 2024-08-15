import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { heroSection , heroContent , heroNav } from './projet-frontimage.module.scss'
import BackButton from '../back-button';

export default function Projetfrontimage({BgImage, PageName }) {
  return(
    <div  data-aos="fade-down" 
    data-aos-duration="100" 
    className={heroSection}
    style={{ backgroundImage:`url(${BgImage})`}} 
    >

      <div className={heroContent}>
          <div className={heroNav}>
          
          </div>
   
         
         
          </div>
      </div>
  )
}