import React from "react"
import Link from 'next/link'
import { frontsection , content ,headtitleWrapped, videoSection, textSection , scrollingButton, scrollingText, runningLineWrapper,runningLine} from './frontsection.module.scss'
// import '../../styles/global.scss'
import Image from "next/image"


const Frontsection = () =>  {
  return (
    <div className={frontsection}>
      <div className={content}>
        <p> Bonjour, c'est Marvin je suis</p>

        <div>

<div className={headtitleWrapped}>
                <h1>PRODUCT  DESIGNER</h1> 

</div> 

<div data-aos="fade-up" >
<div className={videoSection}>

<div className={textSection}> 
  <p> J'aime imaginer, créer et prototyper. <br/> Me lancer dans des projets voir leurs evolutions.</p> 
   <a href="mailto:marvinmensah95@gmail.com" className={scrollingButton}> Contacter moi  <Image width={150} height={150} src="https://iamarvin.com/megaincrediblebackoffice/wp-content/uploads/2025/01/icons8-arrow-96.png"></Image> </a> 

</div>

<video  autoPlay loop muted playsInline
        src="https://iamarvin.com/megaincrediblebackoffice/wp-content/uploads/2024/12/video-demo.mp4"></video>
  
</div>

<div className={scrollingText}>
<div className={runningLineWrapper}>
   <div className={runningLine}>
      
      <span>Je suis ouvert aux nouvelles opportunité *</span>
      <span>Je suis ouvert aux nouvelles opportunité *</span>
      <span>Je suis ouvert aux nouvelles opportunité *</span>
      <span>Je suis ouvert aux nouvelles opportunité *</span>
      <span>Je suis ouvert aux nouvelles opportunité *</span>
      
      
   </div>
</div>
</div>

</div>

</div>
</div>


</div>



     

)}

export default Frontsection