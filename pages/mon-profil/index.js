import Head from "next/head";
import Image from "next/image";
import { jobPresetation, section} from './mon-profil.module.scss'
import Main from '@/components/main'
import Date from "@/components/date";
import Link from "next/image"
import Jobdetail from '@/components/jobdetail'
import jobsDetails from '@/libs/jobsDetails'


export default function MonProfil() {


  return (
    <>
      <Head> 
        <title>Mon Profil | Marvin Mensah</title>
      </Head>

    <Main>
     <h1> Mon Profil</h1>
    <div className={section}>
    <div className={jobPresetation}>
      <h2>Mes experiences professionnels</h2>
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
    </div>
    </div>
    </Main>
    </>
  )


}