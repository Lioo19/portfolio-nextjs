import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Verticalswitch from '../components/VerticalSwitch';
import ContactForm from '../components/functions/ContactForm';
import Layout, { siteTitle } from '../components/Layout';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className=" w-full pt-10">
        <Hero></Hero>
        <Verticalswitch></Verticalswitch>
        <section>
          <div className="bg-baseyellow py-10 my-24">
            <p className="mt-6 text-lg sm:text-xl text-white text-center">Want to come in contact? Go ahead</p>
            <div className="flex flex-row justify-center rounded ">
              <ContactForm></ContactForm>
            </div>
          </div>
        </section>
      </div>
    </Layout>
 );
};
