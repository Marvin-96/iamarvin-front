import Head from "next/head";
import Image from "next/image";
import Main from '@/components/main'
import Date from "@/components/date";
import Link from "next/image"
import Jobdetail from '@/components/jobdetail'
import jobsDetails from '@/libs/jobsDetails'


export default function mentionsLegales() {


  return (
    <>
      <Head> 
        <title>Mentions Legales</title>
      </Head>

    <Main>
     <h1> Mentions Legales </h1>

     <p>Site développer par Marvin Mensah, Etudiant à IIM. Ce site est hebergé par IONOS SARL. Site non-marchand.</p>
   
    </Main>
    </>
  )


}