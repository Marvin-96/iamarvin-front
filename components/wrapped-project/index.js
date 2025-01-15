import React from "react"
import { projectPreview, previewImage, ArticleDetail , linkSection } from './wrapped-project.module.scss'
import Link from 'next/link'
import Image from "next/image"
import Arrow from "@/public/arrow.svg"
// import '../../styles/global.scss'
import { Date } from "../date"
import FeatureImage from "../feature-image"
import MainArticlePreview from "../main-article-preview"

export default function  WrappedProject(props){
          
return (

<div className={projectPreview}>
    
    
    <div  className={previewImage}> 
    <Link href={`/blog/${props.slug}`}> 
        <FeatureImage post={props.post}/>
    </Link>
    </div>

    <Link href={`/blog/${props.slug}`}> <h3>{props.title || "s"}</h3> </Link>
    <Link href={`/blog/${props.slug}`}> 
    <li className={ArticleDetail}>
 
            {props.tags.edges.map(tag => (
                    <h4 key={tag.id}> {tag.node.name} </h4>
                    ))}
            
                 <h4> <Date dateString={props.date} /></h4>

            </li>
    </Link>
    
    
        
    
</div>

)}
