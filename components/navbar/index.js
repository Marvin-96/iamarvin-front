import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useI18n } from "@/locales"; // Import du hook de traduction
import getNavLinks from "@/libs/navLinks"; // Import de la fonction qui génère les liens dynamiquement

import {
  rightmenu,
  upLinkBtn,
  navbarcontent,
  navbarClass,
  linksSection,
} from "./navbar.module.scss";

import BurgerBtn from "../burgerBtn";
import Logo from "../logo";
import LanguageSwitcher from "../language-switcher";
import ThemeSwitcher from "../themeSwitcher";


const Navbar = () => {
  const [state, setState] = useState("close");
  const router = useRouter();
  const t = useI18n(); // Récupération des traductions

  const navLinks = getNavLinks(t); // Appel de la fonction avec `t`

  useEffect(() => {
    const handleRouteChange = () => {
      setState("close");
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const toggleBurger = () => {
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
            {navLinks.map((navlink, index) => (
              <li key={index}>
                <Link href={navlink.link}>
                  <div className={linksSection}>{navlink.slug}</div>
                </Link>
              </li>
            ))}
        
          </ul>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>

        <BurgerBtn state={state} toggleBurger={toggleBurger} />
      </div>
    </nav>
  );
};

export default Navbar;
