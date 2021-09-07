import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'

export default function AboutMe() {
  return (
      <Layout>
          <Head>
              <title>About Me</title>
          </Head>

          <div className="flex justify-center h-1/1">
            <section className="p-4">

            </section>
            <section className="p-4">
              <div className=" w-1/1 flex flex-col ">
                <h1>About Me</h1>
                <p> BLA BLA BLA BLA BLA BLA BLA</p>
              </div>
            </section>
          </div>
      </Layout>
  )
}
