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
            <section>
              <>
                <a href="/images/tradgard2flipped.png">
                  <Image
                    priority
                    src="/images/tradgard2flipped.png"
                    className="float-left"
                    width={367}
                    height={500}
                    layout="intrinsic"
                    alt="hej"
                  />
                </a>
              </>
            </section>
            <section>
              <h1>About Me</h1>
            </section>
          </div>
          <h2>
              <Link href="/">
                  <a>back home</a>
              </Link>
          </h2>
      </Layout>
  )
}
