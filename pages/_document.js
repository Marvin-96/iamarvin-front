import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body style={{ overflowX: 'hidden' }} >
        <Main /> 
        <NextScript />
      </body>
    </Html>
  )
}

