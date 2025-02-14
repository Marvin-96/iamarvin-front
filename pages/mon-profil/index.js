import Head from "next/head";
import { useRouter } from 'next/router';
import { useScopedI18n } from '@/locales';
import { jobPresetation, section } from './mon-profil.module.scss'
import Main from '@/components/main'
import Jobdetail from '@/components/jobdetail'
import { jobsDetails } from '@/libs/jobsDetails'
import HeroSection from "@/components/hero-section";

export default function MonProfil() {
  const router = useRouter();
  const lang = router.locale || 'fr'; // Récupération de la langue actuelle (fr par défaut)
  const selectedJobDetails = jobsDetails(lang);
  const profilT = useScopedI18n("mon_profil"); // Utilisation du hook pour la page "Mon Profil"

  return (
    <>
      <Head> 
        <title>{profilT('title')} | Marvin Mensah</title>
      </Head>

      <HeroSection PageName={profilT('title')} />
      <Main>
        <div className={section}>
          <div className={jobPresetation}>
            <h2>{profilT('job_experience')}</h2>
            {selectedJobDetails.map((job, index) => {
              if (index < 3) {
                return (
                  <Jobdetail 
                    key={job.id}
                    name={job.name}
                    role={`${profilT('job_details.role')}: ${job.role}`}
                    description={`${profilT('job_details.description')}: ${job.description}`}
                    date={`${profilT('job_details.date')}: ${job.date}`}
                  />
                );
              }
              return null; // Si l'index n'est pas supérieur à 3, retourne null
            })}
          </div>
        </div>
      </Main>
    </>
  );
}
