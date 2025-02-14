import fr from '@/locales/fr';
import en from '@/locales/en';

const jobsDetails = (lang) => {
  const translations = lang === 'fr' ? fr : en;

  return [
    {
      name: "tinycoaching",
      role: translations.landing.experiences_list.tinycoaching.role,
      description: translations.landing.experiences_list.tinycoaching.description,
      date: translations.landing.experiences_list.tinycoaching.date,
    },
    {
      name: "Crédit Agricole d’Ile-de-France",
      role: translations.landing.experiences_list.ca.role,
      description: translations.landing.experiences_list.ca.description,
      date: translations.landing.experiences_list.ca.date,
    },
    {
      name: "Ikea",
      role: translations.landing.experiences_list.ikea.role,
      description: translations.landing.experiences_list.ikea.description,
      date: translations.landing.experiences_list.ikea.date,
    },
    {
      name: "AFEV",
      role: translations.landing.experiences_list.afev.role,
      description: translations.landing.experiences_list.afev.description,
      date: translations.landing.experiences_list.afev.date,
    }
  ];
};

export { jobsDetails };
