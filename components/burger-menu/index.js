import React from "react";
import { burgerBtn, close, open } from "./burger-menu.module.scss";
import "./burgerBtn.module.scss";
import navLinks from "@/libs/navLinks";

const BurgerMenu = () => {
  return (
        <div>
        {navLinks.map((navlink) => (
              <li id={navlink.id} key={navlink.id}>
                <Link href={navlink.link}>
                  <div className={linksSection}>{navlink.slug}</div>
                </Link>
              </li>
            ))}
        </div>
  );
};

export default BurgerMenu;
