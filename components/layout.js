import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Header from './header'
import Footer from './footer'

const name = 'Linnéa';
export const siteTitle = 'Linnéa Olofsson, Developer';

export default function Layout({ children, home }) {
  return (
    <>
      {/*Always include header*/}
      <Header></Header>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Portfolio website Linnéa Olofsson"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        {/*Main-component with relative screen size as default + overflow y for scroll*/}
        <main className="relative h-screen w-full box-border overflow-y-auto">{children}</main>
        {/* If not at homepage, display back to home-link*/}
        {!home && (
          <div className="mb-4 mt-1 ml-2  sm:ml-48">
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      {/*Always include footer*/}
    <Footer>
    </Footer>
    </>
  )
}
