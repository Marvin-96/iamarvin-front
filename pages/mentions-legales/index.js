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

        <h2>  Propriétaire du site :</h2>
        <p>
          Nom :  Marvin Mensah <br />
          Adresse : 18e allée de la louvière, Courdimanche 95800 <br />
          Email : marvinmensah95@gmail.com <br />
        </p>
        <br />
        <h2>Hébergement :</h2>
        <p>
          Le site est hébergé par : <br />
          Hostinger International Ltd. <br />
          Adresse : 61 Lordou Vironos Street, 6023 Larnaca, Chypre <br />
          Site web : <a href="www.hostinger.fr"> www.hostinger.fr</a>
        </p>
        <br />
        
       
          <h2>Propriété intellectuelle :</h2>
          <p>
          Tout le contenu présent sur ce site, y compris les textes, images, vidéos, logos, et autres éléments graphiques, est la propriété exclusive de [Ton nom ou nom de ton entreprise], sauf mention contraire. Toute reproduction, distribution, modification, ou utilisation de ces contenus sans autorisation écrite préalable est strictement interdite.
        </p>
      </Main>
    </>
  )


}