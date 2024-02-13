
import Image from 'next/image'
import { mainContent } from './main-article-preview.module.scss'
import FeatureImage from '../feature-image'



export default function mainArticlePreview(props) {
  return (
    <div className={mainContent}>
      
    <FeatureImage post={props.post} /> 
    </div>
  )
}
