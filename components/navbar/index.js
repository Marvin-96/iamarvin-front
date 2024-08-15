import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { logo, rightmenu,upLinkBtn, navbarcontent , navbarClass, linksSection} from './navbar.module.scss'
import navLinks from "@/libs/navLinks"
import BurgerBtn from "../burgerBtn"
import Logo from "../logo"

const navbar = () =>  {

  const [state, setState] = useState('close');
  

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setState("close");
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (


            <nav className={navbarClass}>
              <div className={navbarcontent}>
                <Logo /> 
             
                 <div className={rightmenu} id="rightMenu">
                
                        <ul className={upLinkBtn} id="upLinkBtn">
                          {navLinks.map((navlink) => (

                            <li id={navlink.id}>
                            <Link href={navlink.link}> <div className={linksSection}>{navlink.slug} </div></Link>
                            </li>
                          ) 
                            )
                          
                          }
                        
                            
                        </ul>
                </div>
              
                </div>
                <BurgerBtn />
            </nav>

)}

export default navbar