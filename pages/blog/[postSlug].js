import Head from "next/head";
import Image from "next/image";
import { frontImage, renderStyle , tagName, postMeta , wrapContent, postdataContent, wrapContentCentered} from './slug.module.scss'
import Main from '@/components/main'
import { getPostSlugs, getSinglePost } from "@/libs/posts";
import { Date } from "@/components/date";
import Link from "next/image"


export async function getStaticProps({params}){ 
  const postData = await getSinglePost(params.postSlug);
  console.log(postData);  
  
  let featuredImageUrl = "http://localhost:8888/iamarvin-back/wp-content/uploads/2024/01/default-thumb.png";
  
  if(postData.featuredImage) {
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

    
    <Main>
    <div className={wrapContent}>
    <div className={wrapContentCentered}>
      <div>
      <div className={postdataContent}>
            <div>
            {/* <Link href="../"> <p> Retour </p> </Link> */}
            
            <div className={postMeta}>
            {postData.tags.nodes.map(tag => (
             <h4 key={tag.id} className={tagName}> {tag.name} </h4>
            ))}
            <h1> { postData.title } </h1>

            <p> Dernière modification par Marvin le <Date dateString={postData.modified} /> </p>
            </div>
                  <div className={frontImage}>
                  { featuredImageUrl &&  <Image  src={featuredImageUrl} alt="ds" fill  /> } 
                  </div>
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