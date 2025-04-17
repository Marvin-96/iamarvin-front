import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/locales"; // Hook de traduction
import Image from "next/image";
import getFooterLinks from "@/libs/footerLinks"; // Import de la fonction pour générer les liens dynamiquement

import {
  footer,
  wrapped,
  footerSection,
  linksection,
  menuSection,
  logoSection,
  socialSection,
  links,
  contactSection,
  copyright
} from "./footer.module.scss";

import XIcon from "@/public/x-icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.svg";
import DribbbleIcon from "@/public/dribbble-icon.svg";

const Footer = () => {
  const t = useI18n(); // Récupération des traductions
  const footerLinks = getFooterLinks(t); // Récupération des liens traduits dynamiquement

  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={footer}>
      <div className={wrapped}>
        <div className={footerSection}>
          {/* Section Logo et Contact */}
          <div className={logoSection}>
            <div className={contactSection}>
              <span><p>{t("footer.contactMe")}</p></span>
              <a href="mailto:marvinmensah95@gmail.com">marvinmensah95@gmail.com</a>
            </div>
          </div>

          {/* Section Liens */}
          <div className={linksection}>
            <ul className={menuSection}>
              <h3>{t("footer.menu")}</h3>
              {footerLinks
                .filter(link => link.type === "lien") // Filtrage des liens du menu
                .map((link) => (
                  <li key={link.link}>
                    <Link href={link.link}>{link.slug}</Link>
                  </li>
              ))}
            </ul>

            {/* Section Réseaux Sociaux */}
            <div>
                <h3>{t("footer.socials")}</h3>
                <ul className={links}>
                  <li>
                    <a href="https://twitter.com/marvin_msh" target="_blank" rel="noopener noreferrer">
                      X (twitter)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/marvin-mensah-75b774160/" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://dribbble.com/Marvin-96" target="_blank" rel="noopener noreferrer">
                      Dribbble
                    </a>
                  </li>
                </ul>
              </div>



          </div>

        </div>

        {/* Section Copyright */}
        <div className={socialSection}>
          <div><p className={copyright}>{`© ${year}. ${t("footer.rights")}`}</p></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
