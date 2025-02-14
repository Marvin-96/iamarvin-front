const getNavLinks = (t) => [
  { slug: t("navigation.home"), link: "/", type: "lien" },
  { slug: t("navigation.projects"), link: "/mes-projets", type: "social" },
  { slug: t("navigation.gallery"), link: "/galerie", type: "lien" },
  { slug: t("navigation.profile"), link: "/mon-profil", type: "social" },
  { slug: t("navigation.blog"), link: "/blog", type: "social" },
];

export default getNavLinks;