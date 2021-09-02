import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import ContactForm from '../components/contactform'

export default function Contact() {
  return (
      <>
          <Head>
              <title>Contact me</title>
          </Head>
          <Header></Header>
          <main className="relative h-screen w-screen">
            <img
            src="https://source.unsplash.com/random"
            alt="main backgorund image"
            className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-full max-w-md backdrop-filter backdrop-blur-md backdrop-grayscale backdrop-brightness-75 sm:rounded-2xl text:white py-12 px-4 sm:px-8">
                <h1 className="text-center text-3xl sm:text-4xl font-extrabold sm:leading-[3rem]">
                My Headline!{''}
                <br/>
                <span className="text-yellow-400"> ATTENTION PLEASEEE</span>
                </h1>
                <p className="mt-6 text-lg sm:text-xl">
                Ea esse minim reprehenderit voluptate. Ea nisi culpa magna...
                Ea esse minim reprehenderit voluptate. Ea nisi culpa magna...
                Ea esse minim reprehenderit voluptate. Ea nisi culpa magna...
                </p>
                <ContactForm></ContactForm>
              </div>
            </div>
            <Link href="/">
                <a>back home</a>
            </Link>
          </main>
          <Footer></Footer>
      </>
  )
}
