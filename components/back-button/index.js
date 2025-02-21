import React from "react";
import { useScopedI18n } from '@/locales';
import Link from "next/link";
import { goBack, arrowleft } from "./back-button.module.scss";

const BackButton = () => {
  const t = useScopedI18n("backButton"); // Utilisation du scope de traduction

  return (
    <Link href={"/"} className={goBack}>
      <i className={arrowleft}></i> {t("returnHome")}
    </Link>
  );
};

export default BackButton;