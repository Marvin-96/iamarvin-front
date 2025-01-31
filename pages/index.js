
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Frontsection from '@/components/frontsection'
import Main from '@/components/main'
import ProjectPreview from '@/components/project-preview'
import Jobdetail from '@/components/jobdetail'
import jobsDetails from '@/libs/jobsDetails'
import { getAllPortfolioPost } from '@/libs/posts'
import Section from '@/components/section'
import Head from 'next/head'
import Arrowup from "@/public/arrow-up-right.svg"
import footerLink from '@/libs/footerLink'


const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
    const allPortfolioPost = await getAllPortfolioPost();

  return {
    props: {
      allPortfolioPost: allPortfolioPost,
    },
  }
}

export default function Home({allPortfolioPost}) {
  return (
    <>
    <Head>
        <title>Accueil | Marvin Mensah</title>
    </Head>
    
      <Frontsection />
        <Main>
        <section className='content'>   
          <div>
            <div className='presentationtxt'>
                  
                  <p data-aos="fade-up"> Je suis une <span>Product Designer</span> diplomée d' 
                  <span>IIM - Digital School Paris.</span> J'ai eu l'opportunité de travailler au sein d'une <span>Start-Up Francaise</span>  nommée <span>tinycoaching</span>  </p>  
          </div>
          <div className='Social' data-aos="fade-up"> 
            <h4>Mes reseaux</h4>
          <ul>
          {footerLink.map(link => {
                          if (link.type === "social") {
                            return (
                            <li key={link.id} > <a target="_blank" href={link.link}> {link.slug} <Image src={Arrowup} /> </a> </li>
                          )
                        }})}
          </ul>

          </div>
          </div>
          {/* <div data-aos="zoom-in" className='working-illustration'> 
          <Image       src="https://iamarvin.com/megaincrediblebackoffice/wp-content/uploads/2024/02/memodji-working.png"
                            width={686}
                            height={798}
                            alt="Picture of the author" /> 


         </div> */}
        <div className='pdp'>
         <Image data-aos="zoom-in"
          src="https://iamarvin.com/megaincrediblebackoffice/wp-content/uploads/2024/02/A970FA8E-F954-49F1-A284-2D24F0E70A14.jpeg"
          width={1440}
          height={1799}
          alt="Picture of the author"
        />    
      </div>
        </section>

        <h2 className="ProjectSectionTitle"> Voici quelques uns de mes projets ! </h2>
       
        <section>   
        
        <div className='griddiv'>
              {/* {console.log(allPortfolioPost)} */}
              { allPortfolioPost.nodes.map((post , index ) =>  {
                
               if(index < 3 ){ return( 
              <ProjectPreview key={post.id}
                              title={post.title} 
                              post={post}
                              index={index}
                              slug={post.slug}
              />
              );
              }})}
        </div>
        </section>   

        <div className=''>
        <h2 className="ProjectSectionTitle">  Mes experiences professionnelles   </h2>
          <div className='Jobwrapped'>

          {jobsDetails.map((job, index) => {
        if (index < 3) {
          return (
            <Jobdetail key={job.id}
                      name={job.name}
                      role={job.role}
                      description={job.description}
                      date={job.date}
            />
          );
        }
        return null; // Si l'index n'est pas supérieur à 3, retourne null
      })}
      
          <div className='jobbutton' data-aos="fade-up" data-aos-duration={2}>
            <a className='CVlink' href='https://iamarvin.com/iamarvin_front/media/CV-Marvin-mensah2024_compressed.pdf' target="_blank"> Voir mon Curriculum vitae </a>
          </div>
     
          </div>

        </div>

        </Main>
    </>
  )
}
