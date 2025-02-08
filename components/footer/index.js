import React from "react"
import { Fragment, useState, useEffect } from "react";
import Link from 'next/link'
import { emailSection, linksection, footer, copyright, footerSection , menuSection, logoSection, socialSection , links, wrapped , contactSection} from './footer.module.scss'
import footerLink from "@/libs/footerLink"
import Image from "next/image"
import xIcon from "@/public/x-icon.svg"
import linkedinIcon from "@/public/linkedin-icon.svg"
import dribbbleIcon from "@/public/dribbble-icon.svg"
import { footerLinks, language } from '@/libs/footerLink'; // Correction de l'importation

const Footer = () =>  {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);



const selectedFooterLinks = footerLinks[language] || []; // Sécurité pour éviter undefined


  return (

          <footer className={footer}>
            <div className={wrapped}>
            <div className={footerSection}>

            {/* <div  className={emailSection} >
                    
                  </div> */}
                  
                  <div  className={logoSection}>
                    <div className={contactSection}>
                    
                    <span> <p>Contactez-moi ! </p></span>
                    <a href="mailto:marvinmensah95@gmail.com"> marvinmensah95@gmail.com</a>
                    </div>
                  </div>


            <div className={linksection}>
                    
                    <ul className={menuSection}>
                    <h3> Menu </h3>  
                    {selectedFooterLinks.map(link => {
                          if (link.type === "lien") {
                            return (
                              <li key={link.id}>
                                <Link href={link.link}>{link.slug}</Link>
                              </li>
                            );
                          }
                          return null; // ou tout autre chose que vous voulez rendre
                        })}
                    </ul>
                    
                    <div>
                    <ul>
                    <h3>Mes Reseaux</h3>    
                    <div className={links}>
                     
                              <a href='https://twitter.com/marvin_msh' target="_blank">
                                  <li> <Image src={xIcon} width={20} height={20} /> </li>
                              </a>
                              <a href='https://www.linkedin.com/in/marvin-mensah-75b774160/' target="_blank">
                                  <li> <Image src={linkedinIcon} width={20} height={20} /> </li>
                              </a>
                              <a href='https://dribbble.com/Marvin-96' target="_blank">
                                  <li> <Image src={dribbbleIcon} color="#fff" width={20} height={20} /> </li>
                              </a>
                            
                    </div>
                    </ul>
                    </div>


                  </div>

     
                
            
            

            </div>

            <div className={socialSection}>
              <div><p className={copyright}>{`© ${year}. Tous droits réservés`}</p></div>

              

              
            </div> 
            </div>
          </footer>
)}

export default Footer