import React from "react"
import Link from 'next/link'
import { logo, rightmenu,upLinkBtn, navbarcontent , navbarClass} from './navbar.module.scss'
// import '../../styles/global.scss'
import BurgerBtn from "../burgerBtn"

const navbar = () =>  {



  return (


            <nav className={navbarClass}>
              <div className={navbarcontent}>
                <Link href="/" className={logo}> Marvin Mensah</Link>
             
                 <div className={rightmenu} id="rightMenu">
                
                        <ul className={upLinkBtn} id="upLinkBtn">
                            <Link href="/"><li id="homeLi"> Home</li> </Link>
                            {/* <Link href="/portfolio"> <li id="portfolioLi"> Portfolio</li> </Link><a href /> */}
                            <Link href="/galerie"> <li id="galerie"> Galerie</li> </Link>
                            <Link href="/mes-projets">  <li id="contactLi"> Mes projet</li> </Link>
                            <Link href="/mon-profil">  <li id="contactLi"> Mon Profil </li> </Link>
                            <Link href="/blog">  <li id="contactLi"> Mon blog</li> </Link>
                        
                            
                        </ul>
                </div>
              
                </div>
                <BurgerBtn />
            </nav>

)}

export default navbar