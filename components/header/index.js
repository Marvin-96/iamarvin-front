import Head from 'next/head'
import { headerModule } from './header.module.scss'

const header = () =>  {



    return (
        <header>
           <Head className={headerModule}> 
        </Head>

        </header>
    )
    
}


export default header