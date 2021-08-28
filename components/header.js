import Link from 'next/link'
import Head from 'next/head'
import { siteTitle } from './layout.js'
import IconLinks from './iconlinks.js'

export default function Header() {
  return (
      <>
          <Head>
              <script defer src="https://kit.fontawesome.com/7d1c7e7747.js"></script>
          </Head>
          <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
            <div className="flex items-center flex-no-shrink text-black mr-6">
                <a className="px-1 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="https://www.facebook.com/Linnea.olofsson13">
                  <i className="fas fa-angle-double-right text-lg leading-lg text-black opacity-75"></i>
                </a>
              <span className="font-semibold text-xl tracking-tight">Linnéa Olofsson</span>
            </div>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>{siteTitle}</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                  <Link href="/">
                      <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:opacity-75 mr-4">
                        Home
                      </a>
                  </Link>
                  <Link href="/portfolio">
                      <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:opacity-75 mr-4">
                        Portfolio
                      </a>
                  </Link>
                  <Link href="/about">
                      <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:opacity-75 mr-4">
                        About
                      </a>
                  </Link>
                  <Link href="/contact">
                      <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:opacity-75 mr-4">
                        Contact
                      </a>
                  </Link>
              </div>
              <IconLinks></IconLinks>
            </div>
          </nav>
      </>
  )
}
