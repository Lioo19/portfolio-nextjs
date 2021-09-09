import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import { getSortedPortfolioData } from '../lib/posts'
import Date from '../components/date'
import ContactForm from '../components/contactform'
import Layout, { siteTitle } from '../components/layout'


export async function getStaticProps() {
  const allPortfolioData = getSortedPortfolioData();
  return {
    props: {
      allPortfolioData
    }
  }
}

export default function Home({ allPortfolioData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="relative h-screen w-full pt-10">
        <section className="h-full bg-white bg-opacity-50 flex-row items-center text-center">
          <h1 className="pt-16 pb-1 text-4xl font-bold opacity-75">Linnéa Olofsson</h1>
          <h2 className="pb-10 pt-1 text-8xl font-bold text-baseyellow opacity-75">Developer</h2>
          <p className=" text-xl italic">~In profession and in life</p>
        </section>
        <section className="flex justify-around items-center pb-10 h-72 text-center">
          <div className="h-full w-1/4 bg-baseyellow pt-16">
            <a href="/about">
              <p>About</p>
            </a>
          </div>
          <div className="h-full w-1/4 bg-baseyellow pt-16">
            <a href="/portfolio">
              <p>Portfolio</p>
            </a>
          </div>
          <div className="h-full w-1/4 bg-baseyellow pt-16">
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
        </section>
        <section>
          <div className="flex flex-row justify-center bg-baseyellow rounded py-10 my-10">
            <ContactForm></ContactForm>
          </div>
        </section>
      </div>
    </Layout>
  )
}
