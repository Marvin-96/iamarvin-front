import React from "react"
import Link from 'next/link'
import { ProjectPreviewContainer, ProjectPreviewWrapped} from './project-preview.module.scss'
import FeatureImage from "../feature-image"
// import '../../styles/global.scss'


const ProjectPreview = (props) =>  {

  

  return (

<div className={ProjectPreviewContainer}>
<div className={ProjectPreviewWrapped} data-aos="fade-up" data-aos-duration={props.index * 9} >

<Link href={`/projet/${props.slug}`}> 
<FeatureImage post={props.post}></FeatureImage>
</Link>
<h3> {props.title}</h3>
</div>
{/* <hr/> */}
</div>

)}

export default ProjectPreview