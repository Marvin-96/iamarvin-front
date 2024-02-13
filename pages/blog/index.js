
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Main from '@/components/main'
import WrappedProject from "@/components//wrapped-project"
import FeatureImage from '@/components/feature-image'
import { getAllPosts } from '@/libs/posts'
import Date from '@/components/date'
import MainArticlePreview from '@/components/main-article-preview'

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts: allPosts,
    },
  }

}

export default function Blog({ allPosts }) {

  return (
    <>
      {console.log(allPosts)}
      <Main>
      <h1> Le blog </h1>
      <p> Bienvenue sur mon blog ! 🤓 Ici on parle de Design, de tech et bien autres !!</p>


      <div>
            {/* { allPosts.nodes.map((post , index) =>  ( 
              <div className='wrappedPreview' key={post.id}>

                  {index == 0 && (
                                  <MainArticlePreview post={post} />
                                )}
                </div> 

              )
            )} */}

            <div className='Section-title'> <h2> Mes derniers articles</h2> </div>
            <div className="PostGrid">
            { allPosts.nodes.map((post , index) =>  (  

            <>
            {/* {index !== 0 && ( */}
              <div key={post.id}>


                <WrappedProject title={post.title} 
                                slug={post.slug} 
                                date={post.date}
                                post={post}
                                tags={post.tags}
                                />

              </div>
            {/* )} */}
            </>


              )  
            )}  </div> 

      </div>
      </Main>
    </>
  );
}


