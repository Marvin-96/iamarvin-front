import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Frontsection from '@/components/frontsection';
import Main from '@/components/main';
import ProjectPreview from '@/components/project-preview';
import { getAllPortfolioPost } from '@/libs/posts';
import Section from '@/components/section';
import Head from 'next/head';
import Arrowup from "@/public/arrow-up-right.svg";
import { jobsDetails, language } from '@/libs/jobsDetails'; // Correction de l'importation
import { footerLinks } from '@/libs/footerLink'; 
import JobDetail from '@/components/jobdetail';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps() {
  const allPortfolioPost = await getAllPortfolioPost();
  return {
    props: {
      allPortfolioPost: allPortfolioPost,
    },
  };
}

export default function Home({ allPortfolioPost }) {

  const selectedJobDetails = jobsDetails[language] || []; // Sécurité pour éviter undefined
  const selectedFooterLinks = footerLinks[language] || []; // Sécurité pour éviter undefined
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
              <p data-aos="fade-up">
                Je suis un <span>Product Designer</span> diplômé d'
                <span>IIM - Digital School Paris.</span> J'ai eu l'opportunité de travailler au sein d'une
                <span>Start-Up Française</span> nommée <span>tinycoaching</span>.
              </p>
            </div>

            <div className='Social' data-aos="fade-up">
              <h4>Mes réseaux</h4>
              <ul>
                {selectedFooterLinks.map((link, index) => 
                  link.type === "social" ? (
                    <li key={index}>
                      <a target="_blank" href={link.link} rel="noopener noreferrer">
                        {link.slug} <Image src={Arrowup} alt="Arrow icon" />
                      </a>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>

          <div className='pdp'>
            <Image
              data-aos="zoom-in"
              src="https://iamarvin.com/megaincrediblebackoffice/wp-content/uploads/2024/02/A970FA8E-F954-49F1-A284-2D24F0E70A14.jpeg"
              width={1440}
              height={1799}
              alt="Picture of the author"
            />
          </div>
        </section>

        <h2 className="ProjectSectionTitle">Voici quelques-uns de mes projets !</h2>

        <section>
          <div className='griddiv'>
            {allPortfolioPost.nodes.map((post, index) =>
              index < 3 ? (
                <ProjectPreview
                  key={post.id}
                  title={post.title}
                  post={post}
                  index={index}
                  slug={post.slug}
                />
              ) : null
            )}
          </div>
        </section>

        <div>
          <h2 className="ProjectSectionTitle">Mes expériences professionnelles</h2>
          <div className='Jobwrapped'>
            {selectedJobDetails.map((job, index) =>
              index < 3 ? (
                <JobDetail
                  key={job.id}
                  name={job.name}
                  role={job.role}
                  description={job.description}
                  date={job.date}
                />
              ) : null
            )}

            <div className='jobbutton' data-aos="fade-up" data-aos-duration={2}>
              <a className='CVlink' href='https://iamarvin.com/iamarvin_front/media/CV-Marvin-mensah2024_compressed.pdf' target="_blank" rel="noopener noreferrer">
                Voir mon Curriculum vitae
              </a>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
