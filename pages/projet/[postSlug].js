import Head from "next/head";
import Image from "next/image";
import { frontImage, renderStyle , wrapContent, postdataContent, wrapContentCentered} from './slug.module.scss'
import Main from '@/components/main'
import { getPostSlugs, getSinglePost } from "@/libs/posts";
// import Date from "@/components/date";
import HeroSection from "@/components/hero-section";
import Projetfrontimage from "@/components/projet-frontimage";

export async function getStaticProps({params}){ 

  const postData = await getSinglePost(params.postSlug);
  console.log(postData);
  let featuredImageUrl = "http://localhost:8888/iamarvin-back/wp-content/uploads/2024/01/default-thumb.png";

  if (postData.featuredImage && 
    postData.featuredImage.node &&
    postData.featuredImage.node.mediaDetails &&
    postData.featuredImage.node.mediaDetails.sizes &&
    postData.featuredImage.node.mediaDetails.sizes[5] &&
    postData.featuredImage.node.mediaDetails.sizes[5].sourceUrl) {
  featuredImageUrl = postData.featuredImage.node.mediaDetails.sizes[5].sourceUrl;
} else {
  featuredImageUrl = postData.featuredImage.node.mediaDetails.sizes[1].sourceUrl;
}

  return {
    
    props: {
      postData,
      featuredImageUrl
    }
    
  };
}

export async function getStaticPaths(){ 
  const postSlugs = await getPostSlugs();

  return {
    paths: postSlugs.map((s) => (
      {
        params: {
          postSlug: s.slug
      }
       }
    )), 
    fallback: false
  
  }
}

export default function Post( {postData ,featuredImageUrl } ){ 
  return(
    <>
    {  console.log(postData)}
    <Head>
    <title key={postData.slug}> {postData.title} </title>
    </Head>
    
    <style>
    {`


.iv-container {
 display: flex;
 justify-content: center;
 width: auto;
 font-family: var(--text);
}

.iv-wrapped {
 display: flex; 
 width: 90vw;
}

.Typo {
  width: 60%;
}

.Color-card {
  width: 60px;
  text-align: center;
}

.Color-Panel {
  width: 40%;
  display: flex;
  justify-content: space-between;
}

.color-circle {
  width: 60px;
  height: 60px;
  background-color: red;
  border-radius: 100%;
  
}

.color-name {
  margin: 10px 0 30px 0;
}

@media (max-width: 765px) {
  
  .iv-wrapped {
  display: block;
  }
  
  .Color-Panel {
  display: block;
  // margin: 0 auto;
    margin-top: 30px;
  }
  
}
          `}
    </style>

    { featuredImageUrl &&  <Projetfrontimage PageName="dsds" BgImage={featuredImageUrl}/> } 
    <Main>
    <div className={wrapContent}>
 
    <div className={wrapContentCentered}>
      <div>
      <div className={postdataContent}>
            <div>
        
            {/* <h4> Dernière modification par Marvin le <Date dateString={postData.modified} /> </h4> */}
            <h1> { postData.title } </h1>
            {postData.tags.nodes.map(tag => (
             <h2 key={tag.id}> {tag.name} </h2>
            ))}
       
        </div>
      </div>

        <div className={renderStyle} dangerouslySetInnerHTML={ {__html: postData.content} }></div>
    </div>
    </div>
    </div>
    </Main>

    </>
  );
  }