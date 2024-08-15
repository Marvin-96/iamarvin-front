import React from "react"
import { Fragment, useState, useEffect } from "react";
import Link from 'next/link'
import { goBack , arrowleft } from './back-button.module.scss'


const BackButton = () =>  {



  return (

          <>
                    <Link href="/" className={goBack}> <i className={arrowleft}></i> Retour à l'accueil</Link>
          </>
)}

export default BackButton