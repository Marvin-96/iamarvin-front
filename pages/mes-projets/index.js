
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Main from '@/components/main'
import FeatureImage from '@/components/feature-image'
import { getAllPortfolioPost } from '@/libs/posts'
import {PostGrid , AlbumPreview , albumPresentation } from './mes-projets.module.scss'
import Head from 'next/head'
import HeroSection from '@/components/hero-section'
import ProjectPreview from '@/components/project-preview'

export async function getStaticProps() {
  const allPortfolioPost = await getAllPortfolioPost();

return {
  props: {
    allPortfolioPost: allPortfolioPost,
  },
}
}

export default function mesProjets({ allPortfolioPost }) {
  const backgroundImage = "https://iamarvin.com/megaincrediblebackoffice/wp-content/uploads/2024/04/alvaro-reyes-qWwpHwip31M-unsplash-min-scaled.jpg";
  return (
    <>
      {console.log(allPortfolioPost)}

      <Head>
        <title>Mes projets | Marvin Mensah</title>
    </Head>
      <HeroSection PageName="Mes projets" 
                   BgImage={backgroundImage} 
 
                   />
      
      <Main>
    
      


      <div>
                  

        <div className={albumPresentation}> 
          <h2> Mes derniers Projets </h2> 
          {/* <p> Voici une selection de mes photos. Je prends mes photos avec un Fudjifilm X S-10 avec un objectif 15-45mm. <br /> J'utilise également un Iphone 15 Pro Max. </p> */}
        
        </div>
        <div className="PostGrid">
        { allPortfolioPost.nodes.map((post , index) =>  (  

               <ProjectPreview key={post.id}
                              title={post.title} 
                              post={post}
                              index={index}
                              slug={post.slug}
              />
          )  
        )}  </div> 

      </div>
      </Main>
    </>
  );
}


