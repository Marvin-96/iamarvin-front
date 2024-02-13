
import Image from 'next/image'
import { mainContent } from './main-article.module.scss'



export default function MainArticle({children}) {
  return (
    <>
      
      <main className={mainContent}>
      
      {children}
        
      </main>
    </>
  )
}
