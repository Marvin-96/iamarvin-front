import React from "react";
import Link from "next/link";
import { useI18n } from "@/locales";
import Image from "next/image";
import {
  frontsection,
  content,
  headtitleWrapped,
  videoSection,
  textSection,
  scrollingButton,
  scrollingText,
  runningLineWrapper,
  runningLine,
  textSection2,
  menulist,
  ArrowIconSvg,
} from "./frontsection.module.scss";


import ArrowIcon from '@/public/Arrow-3.svg'
import ArrowrightIcon from '@/public/arrow-up-right.svg'

const Frontsection = () => {
  const t = useI18n(); // Utilisation du hook pour la traduction

  return (
    <div className={frontsection}>
      <div className={content}>
        {/* <p>{t("landing.hi")},</p> */}

        <div>
          <div className={headtitleWrapped}>
            <h1 dangerouslySetInnerHTML={{ __html: t("landing.hi") }} />
          </div>

          <div data-aos="fade-up">
                <div className={videoSection}>

                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            src="https://iamarvin.com/megaincrediblebackoffice/wp-content/uploads/2024/12/video-demo.mp4"
                          ></video>
                          
                          <div className={textSection}>
                            <div className={textSection2}>
                                  <p>
                                    {t("landing.passion")}
                                  </p>
                                  <a
                                    href="mailto:marvinmensah95@gmail.com"
                                    className={scrollingButton}
                                  >
                                    {t("landing.contact")}
                                    <ArrowIcon                                                                                                          
                                      alt="Arrow icon"
                                      className={ArrowIconSvg}
                                    />
                                  </a>
                            </div>
                            <ul className={menulist}>
                              <li> <a  href='https://iamarvin.com/iamarvin_front/media/CV-Marvin-mensah2024_compressed.pdf' target="_blank" rel="noopener noreferrer"> Voir mon CV                                      
                              <ArrowIcon
                                      
                                      width={5}
                                      height={5}
                                     
                                    /></a></li>
                              
                            
                            </ul>
                          </div>
    
      
            </div>
{/* 
            <div className={scrollingText}>
              <div className={runningLineWrapper}>
                <div className={runningLine}>
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>{t("landing.opportunity")} *</span>
                  ))}
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontsection;
