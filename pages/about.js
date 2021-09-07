import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import { myAge } from '../components/currentage'

export default function AboutMe() {
  return (
      <Layout>
          <Head>
              <title>About Me</title>
          </Head>
          <div className="relative h-screen w-screen">
            <div className="flex justify-center items-center flex-col sm:flex-row">
              <section className="pr-8 py-4">
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
              <section className="p-4">
                <div className="w-1/1 flex flex-col bg-yellow-200 px-12 py-32">
                  <div className="">
                    <h1 className="text-3xl">About Me</h1>
                    <p>Born in 1993, currently {myAge} years old and raised in Stockholm, Sweden</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
      </Layout>
  )
}
