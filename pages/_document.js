import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      

      <body style={{ overflowX: 'hidden' }} >
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      
        <Main /> 
        <NextScript />
      </body>
    </Html>
  )
}

