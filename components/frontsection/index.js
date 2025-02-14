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
} from "./frontsection.module.scss";

const Frontsection = () => {
  const t = useI18n(); // Utilisation du hook pour la traduction

  return (
    <div className={frontsection}>
      <div className={content}>
        <p>{t("landing.hi")},</p>

        <div>
          <div className={headtitleWrapped}>
            <h1>PRODUCT DESIGNER</h1>
          </div>

          <div data-aos="fade-up">
            <div className={videoSection}>
              <div className={textSection}>
                <p>
                  {t("landing.passion")}
                </p>
                <a
                  href="mailto:marvinmensah95@gmail.com"
                  className={scrollingButton}
                >
                  {t("landing.contact")}
                  <Image
                    width={150}
                    height={150}
                    src="https://iamarvin.com/megaincrediblebackoffice/wp-content/uploads/2025/01/icons8-arrow-96.png"
                    alt="Arrow icon"
                  />
                </a>
              </div>

              <video
                autoPlay
                loop
                muted
                playsInline
                src="https://iamarvin.com/megaincrediblebackoffice/wp-content/uploads/2024/12/video-demo.mp4"
              ></video>
            </div>

            <div className={scrollingText}>
              <div className={runningLineWrapper}>
                <div className={runningLine}>
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>{t("landing.opportunity")} *</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontsection;
