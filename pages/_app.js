import '../styles/global.css'
import Header from '../components/header'
import Head from 'next/head'
import Footer from '../components/footer'
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function App({ Component,pageProps }) {
  return (
      <>
      <Header></Header>
      <Head><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /></Head>
      <Component {...pageProps} />
      <Footer></Footer>
      </>
  )
}
