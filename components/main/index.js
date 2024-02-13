
import Image from 'next/image'
import { mainContent } from './main.module.scss'



export default function Main({children}) {
  return (
    <>
      
      <main className={mainContent}>
      
      {children}
        
      </main>
    </>
  )
}
