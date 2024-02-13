
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Main from '@/components/main'
import FeatureImage from '@/components/feature-image'
import { getAllGaleriePosts } from '@/libs/posts'
import {PostGrid , AlbumPreview , albumPresentation } from './galerie.module.scss'


export async function getStaticProps() {
  const allGaleriePosts = await getAllGaleriePosts();

  return {
    props: {
      allGaleriePosts: allGaleriePosts,
    },
  }

}

export default function Galerie({ allGaleriePosts }) {

  return (
    <>
      {console.log(allGaleriePosts)}
      <Main>
      <h1> Galerie </h1>
      


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


