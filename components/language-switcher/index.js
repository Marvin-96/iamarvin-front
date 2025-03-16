import { useRouter } from 'next/router';
import Link from 'next/link';
import { languageSwitcherBotton } from './language-switcher.module.scss'
import WorldIcon from '@/public/tabler_world.svg'

function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = router; // Pas besoin de pathname ici

  const targetLocale = locale === 'fr' ? 'en' : 'fr';
  const targetLanguageLabel = locale === 'fr' ? 'Fr' : 'En';

  const handleClick = () => {
    router.push('/', undefined, { locale: targetLocale });
  };

  return (
    <Link href="/" locale={targetLocale} onClick={handleClick} className={languageSwitcherBotton}>
       
        <WorldIcon  />
        {targetLanguageLabel}
  
    </Link>
  );
}

export default LanguageSwitcher;