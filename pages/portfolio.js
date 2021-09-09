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
              <div className="w-1/1 flex flex-col text-center px-2">
                <h1 className="text-4xl">Portfolio</h1>
                <h2 className="py-8 text-red-600 text-3xl sm:text-6xl">WOOOOPS, kinda empty, isn't it?</h2>
                <div className="sm:p-14 p-8">
                  <h4 className="py-2 text-xl italic text-gray-600">A clean, blank slate, just like this page</h4>
                  <p> Maybe you could help me out here, and make my limited experience in the field... Less limited?</p>
                  <p>In the meantime, check out my
                    <a href="https://www.github.com/Lioo19" className="text-baseyellow hover:text-darkyellow"> Github </a>
                    where you can find school projects, <br /> my thesis-repository and the repository for this page!
                  </p>
                </div>
              </div>
            </section>
          </div>
      </Layout>
  )
}
