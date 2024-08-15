import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { heroSection , heroContent , heroNav } from './hero-section.module.scss'
import BackButton from '../back-button';

export default function HeroSection({BgImage, PageName }) {
  return(
    <div  data-aos="fade-down" 
    data-aos-duration="100" 
    className={heroSection}
    style={{ backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,1), rgba(255,255,255,0)), url(${BgImage})`}} 
    >

      <div className={heroContent}>
          <div className={heroNav}>
          <BackButton></BackButton>
          </div>
          <hr></hr>
          <h1> {PageName} </h1>
         
          </div>
      </div>
  )
}