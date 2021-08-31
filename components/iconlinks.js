import Link from 'next/link'
import Head from 'next/head'

function facebook() {
  return (
    <>
      <Head>
        <script defer src="https://kit.fontawesome.com/7d1c7e7747.js"></script>
      </Head>
      <a className="pr-3 py-2 text-xs leading-snug text-black hover:opacity-75" href="https://www.facebook.com/Linnea.olofsson13">
        <i aria-hidden className="fab fa-facebook-square pr-2 text-lg leading-lg text-black opacity-75"></i> Facebook
      </a>
    </>
  )
}

function messenger() {
  return (
    <>
      <Head>
        <script defer src="https://kit.fontawesome.com/7d1c7e7747.js"></script>
      </Head>
      <a className="pr-3 py-2 text-xs leading-snug text-black hover:opacity-75" href="https://www.facebook.com/Linnea.olofsson13">
        <i aria-hidden className="fab fa-facebook-messenger pr-2 text-lg leading-lg text-black opacity-75"></i> Messenger
      </a>
    </>
  )
}

function github() {
  return (
    <>
      <Head>
        <script defer src="https://kit.fontawesome.com/7d1c7e7747.js"></script>
      </Head>
      <a className="pr-3 py-2 text-xs leading-snug text-black hover:opacity-75" href="https://github.com/Lioo19">
        <i aria-hidden className="fab fa-github pr-2 text-lg leading-lg text-black opacity-75"></i> Github
      </a>
    </>
  )
}

function linkedin() {
  return (
    <>
      <Head>
        <script defer src="https://kit.fontawesome.com/7d1c7e7747.js"></script>
      </Head>
      <a className="pr-3 py-2 text-xs leading-snug text-black hover:opacity-75" href="https://www.linkedin.com/in/linnea-olofsson-web-developer/">
        <i aria-hidden className="fab fa-linkedin pr-2 text-lg leading-lg text-black opacity-75"></i> LinkedIn
      </a>
    </>
  )
}

export { facebook, github, linkedin, messenger }

// export default function IconLinks() {
//   return (
//       <>
//           <Head>
//               <script defer src="https://kit.fontawesome.com/7d1c7e7747.js"></script>
//           </Head>
//               <div className="lg:flex flex-grow items-start">
//               <ul className="flex flex-col lg:flex-row list-none ml-auto">
//                 <li className="nav-item">
//                   <a className="px-3 py-2 flex items-start text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="https://www.linkedin.com/in/linnea-olofsson-web-developer/">
//                     <i aria-hidden className="fab fa-linkedin text-lg leading-lg text-black opacity-75"></i>
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="px-3 py-2 flex items-start text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="https://github.com/Lioo19">
//                     <i aria-hidden className="fab fa-github text-lg leading-lg text-black opacity-75"></i>
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="px-3 py-2 flex items-start text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="https://www.facebook.com/Linnea.olofsson13">
//                     <i aria-hidden className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//       </>
//   )
// }
