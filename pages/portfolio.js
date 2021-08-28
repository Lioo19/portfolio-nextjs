import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function AboutMe() {
  return (
      <Layout>
          <Head>
              <title>About Me</title>
          </Head>
          <h1>About Me</h1>
          <h2>
              <Link href="/">
                  <a>back home</a>
              </Link>
          </h2>
      </Layout>
  )
}
