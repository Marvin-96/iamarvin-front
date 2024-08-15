import React , {useState} from "react"
import {burgerBtn, close , open} from './burgerBtn.module.scss'
import'./burgerBtn.module.scss'



const BurgerBtn = () =>  {

const [state, setState] = useState('close');


function openBurger()  {
    const links = document.querySelector("#rightMenu");
    const upLink = document.querySelector("#upLinkBtn");
    const allUpLink = document.querySelectorAll("#upLinkBtn li");

    setState(state === 'open' ? 'close' : 'open')
    upLink.classList.toggle('show-links');

    allUpLink.forEach((link) => {
        link.classList.toggle('link-animation');
    });
}

    return(
        <button role="button" onClick={openBurger} className={burgerBtn}>
            <span className={state}></span>
            <span className={state}></span>
            <span className={state}></span>
        </button>
    );
}


export default BurgerBtn