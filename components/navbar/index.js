import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  logo,
  rightmenu,
  upLinkBtn,
  navbarcontent,
  navbarClass,
  linksSection,
} from "./navbar.module.scss";

import navLinks from "@/libs/navLinks";
import BurgerBtn from "../burgerBtn";
import Logo from "../logo";

const Navbar = () => {
  const [state, setState] = useState("close");

  const router = useRouter();

  // Ferme le menu burger au changement de route
  useEffect(() => {
    const handleRouteChange = () => {
      setState("close");
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Fonction pour ouvrir/fermer le menu burger
  const toggleBurger = () => {
    const links = document.querySelector("#rightMenu");
    const upLink = document.querySelector("#upLinkBtn");
    const allUpLink = document.querySelectorAll("#upLinkBtn li");

    setState((prevState) => (prevState === "open" ? "close" : "open"));
    upLink.classList.toggle("show-links");

    allUpLink.forEach((link) => {
      link.classList.toggle("link-animation");
    });
  };

  return (
    <nav className={navbarClass}>
      <div className={navbarcontent}>
        <Logo />

        <div className={rightmenu} id="rightMenu">
          <ul className={upLinkBtn} id="upLinkBtn">
            {navLinks.map((navlink) => (
              <li id={navlink.id} key={navlink.id}>
                <Link href={navlink.link}>
                  <div className={linksSection}>{navlink.slug}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
              {/* Passe l'état et le toggle au BurgerBtn */}
      <BurgerBtn state={state} toggleBurger={toggleBurger} />
      </div>


    </nav>
  );
};

export default Navbar;
