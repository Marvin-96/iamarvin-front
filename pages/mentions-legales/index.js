import Head from "next/head";
import Main from '@/components/main'
import { useRouter } from 'next/router';
import { useScopedI18n } from '@/locales';

export default function MentionsLegales() {
  const router = useRouter();
  const lang = router.locale || 'fr'; // Récupère la langue actuelle
  const mentionsT = useScopedI18n("mentions_legales"); // Utilisation du hook de traduction pour la page mentions légales

  return (
    <>
      <Head>
        <title>{mentionsT('title')}</title>
      </Head>

      <Main>
        <h1>{mentionsT('title')}</h1>

        <h2>{mentionsT('owner.title')}</h2>
        <p>
          {mentionsT('owner.name')} <br />
          {mentionsT('owner.address')} <br />
          Email : {mentionsT('owner.email')} <br />
        </p>
        <br />

        <h2>{mentionsT('hosting.title')}</h2>
        <p>
          {mentionsT('hosting.provider')} <br />
          {mentionsT('hosting.address')} <br />
          Site web : <a href="https://www.hostinger.fr">{mentionsT('hosting.website')}</a>
        </p>
        <br />

        <h2>{mentionsT('intellectual_property.title')}</h2>
        <p>{mentionsT('intellectual_property.description')}</p>
      </Main>
    </>
  );
}
