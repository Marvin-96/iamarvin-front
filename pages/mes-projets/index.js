
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Main from '@/components/main'
import FeatureImage from '@/components/feature-image'
import { getAllPortfolioPost } from '@/libs/posts'
import {PostGrid , AlbumPreview , albumPresentation } from './mes-projets.module.scss'
import Head from 'next/head'


export async function getStaticProps() {
  const allPortfolioPost = await getAllPortfolioPost();

return {
  props: {
    allPortfolioPost: allPortfolioPost,
  },
}
}

export default function mesProjets({ allPortfolioPost }) {

  return (
    <>
      {console.log(allPortfolioPost)}

      <Head>
        <title>Mes projets | Marvin Mensah</title>
    </Head>
      <Main>
      <h1> Mes projets </h1>
      


      <div>
                  

        <div className={albumPresentation}> 
          <h2> Mes derniers Albums </h2> 
          <p> Voici une selection de mes photos. Je prends mes photos avec un Fudjifilm X S-10 avec un objectif 15-45mm. <br /> J'utilise également un Iphone 15 Pro Max. </p>
        
        </div>
        <div className={PostGrid}>
        { allPortfolioPost.nodes.map((post , index) =>  (  

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


