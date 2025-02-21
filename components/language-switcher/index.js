import { useRouter } from 'next/router';
import Link from 'next/link';
import { languageSwitcherBotton } from './language-switcher.module.scss'

function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = router; // Pas besoin de pathname ici

  const targetLocale = locale === 'fr' ? 'en' : 'fr';
  const targetLanguageLabel = locale === 'fr' ? 'En' : 'Fr';

  const handleClick = () => {
    router.push('/', undefined, { locale: targetLocale });
  };

  return (
    <Link href="/" locale={targetLocale} onClick={handleClick} className={languageSwitcherBotton}>
        <img src='https://iamarvin.com/megaincrediblebackoffice/wp-content/uploads/2025/02/tabler_world.jpg'></img>
      
        {targetLanguageLabel}
  
    </Link>
  );
}

export default LanguageSwitcher;