import next from "next";


const language = "FR"; // Change to "EN" for English

const footerLinks = {
  FR: [
    { slug: "Accueil", link: "../", type: "lien" },
    { slug: "Mon Blog", link: "/blog", type: "lien" },
    { slug: "Mon Curriculum vitae", link: "https://iamarvin.com/iamarvin_front/media/CV-Marvin-mensah2024_compressed.pdf", type: "lien" },
    { slug: "Mentions légales", link: "/mentions-legales", type: "lien" },
    { slug: "X (Twitter)", link: "https://twitter.com/marvin_msh", type: "social" },
    { slug: "LinkedIn", link: "https://www.linkedin.com/in/marvin-mensah-75b774160/", type: "social" },
    { slug: "Dribbble", link: "https://dribbble.com/Marvin-96", type: "social" },
  ],
  EN: [
    { slug: "Home", link: "../", type: "lien" },
    { slug: "My Blog", link: "/blog", type: "lien" },
    { slug: "My Resume", link: "https://iamarvin.com/iamarvin_front/media/CV-Marvin-mensah2024_compressed.pdf", type: "lien" },
    { slug: "Legal Notice", link: "/mentions-legales", type: "lien" },
    { slug: "X (Twitter)", link: "https://twitter.com/marvin_msh", type: "social" },
    { slug: "LinkedIn", link: "https://www.linkedin.com/in/marvin-mensah-75b774160/", type: "social" },
    { slug: "Dribbble", link: "https://dribbble.com/Marvin-96", type: "social" },
  ],
};

// Exporte le langage et les liens pour les utiliser ailleurs
export { language, footerLinks };
