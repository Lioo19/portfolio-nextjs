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
          <div className="relative h-screen wfull">
            <img
            src="https://source.unsplash.com/random"
            alt="main backgorund image"
            className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-full max-w-md backdrop-filter backdrop-blur-md backdrop-grayscale backdrop-brightness-75 sm:rounded-2xl text:white py-12 px-4 sm:px-8">
                <h1 className="text-center text-3xl uppercase sm:text-4xl text-yellow-400 font-extrabold sm:leading-[1rem]">
                 contact me
                </h1>
                  <p className="mt-6 text-lg sm:text-xl text-white">
                    Want to send me a message? Feel free to use the form below!
                  </p>
                  <ContactForm></ContactForm>
              </div>
            </div>
            <Link href="/">
                <a>back home</a>
            </Link>
          </div>
          <Footer></Footer>
      </>
  )
}
