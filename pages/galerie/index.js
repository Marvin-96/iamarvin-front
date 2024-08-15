
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Main from '@/components/main'
import FeatureImage from '@/components/feature-image'
import { getAllGaleriePosts } from '@/libs/posts'
import {PostGrid , AlbumPreview , albumPresentation } from './galerie.module.scss'
import Head from 'next/head'
import BackButton from '@/components/back-button'
import HeroSection from '@/components/hero-section'


export async function getStaticProps() {
  const allGaleriePosts = await getAllGaleriePosts();

  return {
    props: {
      allGaleriePosts: allGaleriePosts,
    },
  }

}

export default function Galerie({ allGaleriePosts }) {

  const backgroundImage = "https://iamarvin.com/megaincrediblebackoffice/wp-content/uploads/2024/04/hector-martinez-EG49vTtKdvI-unsplash-min-scaled.jpg";

  return (
    <>
      {console.log(allGaleriePosts)}

      <Head>
        <title>Galerie | Marvin Mensah</title>
    </Head>

    <HeroSection PageName='Ma Galerie' BgImage={backgroundImage}></HeroSection>

    {/* <div  data-aos="fade-down" 
    data-aos-duration="100" 
    className='heroSection'
    style={{ backgroundImage:'linear-gradient(to bottom, rgba(0,0,0,1), rgba(255,255,255,0)), url(https://iamarvin.com/megaincrediblebackoffice/wp-content/uploads/2024/04/hector-martinez-EG49vTtKdvI-unsplash-min-scaled.jpg)'}} 
    >

      <div className='heroContent'>
          <div className='heroNav'>
          <BackButton></BackButton>
          </div>
          <hr></hr>
          <h1> Galerie </h1>
          </div>
      </div> */}

      <Main>
      
     


      <div>
                  

        <div className={albumPresentation}> 
          <h2> Mes derniers Albums </h2> 
          <p> Voici une selection de mes photos. Je prends mes photos avec un Fudjifilm X S-10 avec un objectif 15-45mm. <br /> J'utilise également un Iphone 15 Pro Max. </p>
        
        </div>
        <div className={PostGrid}>
        { allGaleriePosts.nodes.map((post , index) =>  (  

        <>

          <div className={AlbumPreview} key={post.id}>
          <Link href={`/galerie/${post.slug}`}> 
             <FeatureImage data-aos="fade-up" data-aos-duration='1' post={post}/>
          </Link>
          <Link href={` /galerie/${post.slug}`}> 
           {post.title} 
          </Link>
            



          </div>
        </>


          )  
        )}  </div> 

      </div>
      </Main>
    </>
  );
}


