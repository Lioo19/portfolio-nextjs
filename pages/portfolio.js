import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'

export default function AboutMe() {
  return (
      <Layout>
          <Head>
              <title>Portfolio</title>
          </Head>

          <div className="flex justify-center h-1/1">
            <section className="p-4 md:p-8">
              <div className="w-1/1 flex flex-col text-center">
                <h1 className="text-4xl">Portfolio</h1>
                <h2 className="py-8 text-red-600 text-6xl">WOOOOPS, Kinda Empty, isn't it?</h2>
                <p> Maybe you could help me out here, and make my limited experience in the field... Less limited?</p>
                <p>In the meantime, check out my
                  <a href="https://www.github.com/Lioo19" > Github </a>
                  where you can find school projects, my thesis-repo and also the repo for this page!
                </p>
              </div>
            </section>
          </div>
      </Layout>
  )
}
