import React from "react"
import Link from 'next/link'
import { Jobdetail ,Jobdata, jobDescription , date , title} from './jobdetail.module.scss'
// import '../../styles/global.scss'
import BurgerBtn from "../burgerBtn"

const jobdetail = (props) =>  {



  return (
    <div className={Jobdetail} data-aos="fade-up" data-aos-duration={props.index * 2}>
      <div className={Jobdata}>
        <div className={title}>
          <h3>{props.name}</h3>
          <div className={date}>
           <p> ({props.date})</p>
          </div>
          </div>
          <p>{props.role}</p>
          <p className={jobDescription}>{props.description}</p>
      </div>
      
    </div>

)}

export default jobdetail