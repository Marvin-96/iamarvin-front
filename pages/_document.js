import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { I18nProvider } from '@/locales';


export default function Document() {


  // const router = useRouter();
  // const locale = router.locale || 'fr'; 
  useEffect(() => {
     

  let thetheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'day-theme';

  document.getElementById('themeSwitcher').className = thetheme;
  
    }, []);
  
  return (
    
  
      <Html lang="fr">
        
        <Head />
        
        
        <body className='night-theme' id='themeSwitcher' style={{ overflowX: 'hidden' }} >
      
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&family=Outfit:wght@100..900&family=Big+Shoulders+Text:wght@100..900&display=swap" rel="stylesheet"></link>
        <div class="grain"></div>
          <Main /> 
          <NextScript />
        </body>
        
      </Html>
  )
}

