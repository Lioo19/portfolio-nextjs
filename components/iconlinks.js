import Link from 'next/link'
import Head from 'next/head'

export default function IconLinks() {
  return (
      <>
          <Head>
              <script defer src="https://kit.fontawesome.com/7d1c7e7747.js"></script>
          </Head>
              <div className="lg:flex flex-grow items-center">
              <ul className="flex flex-col lg:flex-row list-none ml-auto">
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="https://www.linkedin.com/in/linnea-olofsson-web-developer/">
                    <i className="fab fa-linkedin text-lg leading-lg text-black opacity-75"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="https://github.com/Lioo19">
                    <i className="fab fa-github text-lg leading-lg text-black opacity-75"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="https://www.facebook.com/Linnea.olofsson13">
                    <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i>
                  </a>
                </li>
              </ul>
            </div>
      </>
  )
}
