import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { DateYear } from "@/components/date";
import { heroSection , heroContent , heroNav , heroImage, projectTag, textLabel, heroDetail } from './newprojet-frontimage.module.scss'
import BackButton from '../back-button';
import { useI18n, useScopedI18n } from '../../locales';
import { useRouter } from 'next/router';



export default function NewProjetfrontimage({ BgImage , title , postData }) {
  
  const t = useI18n(); // Hook global pour la traduction
  const projectsT = useScopedI18n('projects'); // Traductions spécifiques à la page "Mes Projets"

  
  return(
    <div  className={heroSection}>

      
      <div className={heroContent}>

              <div className={heroImage}>
                  <Image 
                    fill
                    placeholder="blur"
                    blurDataURL="/images/projet-blur.jpg" 
                    style={{ objectFit: "cover" }}
                    src={BgImage}
                    />
                  </div>
                  
              <div className={heroNav}>
                    <div>
                    <BackButton />

                    </div>
                    <div className={heroDetail}>
                          <div className={""}>
                            <p className={textLabel}> {projectsT('single_projet_name')}   </p>
                            <h1> {title} </h1>
                            </div>

                          <div>
                            <p className={textLabel}> {projectsT('Year')}  </p>
                            <DateYear dateString={postData.date} />
                            </div>
                          <div  >
                            <p className={textLabel}> {projectsT('achievements')}  </p>
                            <ul>
                            {postData.tags.nodes.map(tag => (
                                            <li  className={projectTag} key={tag.id}> {tag.name} </li>
                                            ))}
                            </ul>                
                            </div>
                    </div>

                    <div>
                    {projectsT('scrolling_text')}                       
                    </div>

              </div>
          


          
         
          </div>
      </div>
  )
}