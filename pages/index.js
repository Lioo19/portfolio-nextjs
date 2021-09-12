import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/hero';
import Verticalswitch from '../components/verticalswitch';
import ContactForm from '../components/functions/contactform';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPortfolioData } from '../lib/posts';

export async function getStaticProps() {
  const allPortfolioData = getSortedPortfolioData();
  return {
    props: {
      allPortfolioData
    }
  };
};

export default function Home({ allPortfolioData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className=" w-full pt-10">
        <Hero></Hero>
        <Verticalswitch></Verticalswitch>
        <section>
          <div className="flex flex-row justify-center bg-baseyellow rounded py-10 my-24">
            <ContactForm></ContactForm>
          </div>
        </section>
      </div>
    </Layout>
 );
};
