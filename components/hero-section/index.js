import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { heroSection , heroContent , heroNav } from './hero-section.module.scss'
import BackButton from '../back-button';

export default function HeroSection({BgImage, PageName }) {
  return(
    <div  data-aos="fade-down" 
    data-aos-duration="600" 
    className={heroSection}
    >

      <div className={heroContent}>
          <div className={heroNav}>
          <BackButton></BackButton>
          </div>
          
          <h1>{PageName}<e>✦</e></h1>
         
          </div>
      </div>
  )
}