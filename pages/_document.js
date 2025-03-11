import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react';

export default function Document() {

  useEffect(() => {
     

  let thetheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'day-theme';

  document.getElementById('themeSwitcher').className = thetheme;
  
    }, []);
  
  return (
    
  
      <Html lang="fr">
        
        <Head />
        

        <body className='night-theme' id='themeSwitcher' style={{ overflowX: 'hidden' }} >
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&family=Outfit:wght@100..900&family=Big+Shoulders+Text:wght@100..900&display=swap" rel="stylesheet"></link>
        
          <Main /> 
          <NextScript />
        </body>
      </Html>
  )
}

