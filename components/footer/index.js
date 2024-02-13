import React from "react"
import { Fragment, useState, useEffect } from "react";
import Link from 'next/link'
import { emailSection, linksection, footer, copyright, footerSection , logoSection, socialSection , links, wrapped} from './footer.module.scss'
import footerLink from "@/libs/footerLink"
import Image from "next/image"
import xIcon from "@/public/x-icon.svg"
import linkedinIcon from "@/public/linkedin-icon.svg"
import dribbbleIcon from "@/public/dribbble-icon.svg"

const Footer = () =>  {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);


  return (

          <footer className={footer}>
            <div className={wrapped}>
            <div className={footerSection}>


            <div className={linksection}>
                    
                    <ul>
                    <h3> Menu </h3>  
                    {footerLink.map(link => {
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
                  </div>

                  <div  className={emailSection} >
                    <a> marvinmensah95@gmail.com</a>
                  </div>
                  
                  <div  className={logoSection}>
                    <div>
                    <p>Marvin Mensah</p>
                    
                    </div>
                  </div>
                
            
            

            </div>

            <div className={socialSection}>
              <div><p className={copyright}>{`© ${year}. Tous droits réservés`}</p></div>

              <div className={links}>
                              <a href='https://twitter.com/marvin_msh'>
                                  <li> <Image src={xIcon} width={20} height={20} /> </li>
                              </a>
                              <a href='https://www.linkedin.com/in/marvin-mensah-75b774160/'>
                                  <li> <Image src={linkedinIcon} width={20} height={20} /> </li>
                              </a>
                              <a href='https://dribbble.com/Marvin-96'>
                                  <li> <Image src={dribbbleIcon} color="#fff" width={20} height={20} /> </li>
                              </a>
                            
              </div>
              
            </div> 
            </div>
          </footer>
)}

export default Footer