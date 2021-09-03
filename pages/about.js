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
          <h1>About Me</h1>
          <section>
            <>
              <Image
                priority
                src="/images/tradgard2flipped.png"
                className="float-left"
                height={1500}
                width={1103}
                alt={name}
              />
            </>
          </section>
          <h2>
              <Link href="/">
                  <a>back home</a>
              </Link>
          </h2>
      </Layout>
  )
}
