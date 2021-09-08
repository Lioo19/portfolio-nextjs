import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPortfolioData } from '../lib/posts'
import Date from '../components/date'

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
      <div className="relative h-screen w-full bg-gray-600 py-10">
        <section className="h-1/1 bg-white bg-opacity-50 flex-row items-center text-center">
          <h1 className="pt-16 pb-1 text-4xl font-bold opacity-75">Linnéa Olofsson</h1>
          <h1 className="pb-10 pt-1 text-8xl font-bold text-yellow-400 opacity-75">Developer</h1>
          <p className="pb-16 text-xl italic">~In profession and in life</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPortfolioData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  )
}
