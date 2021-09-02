import Link from 'next/link'
import { siteTitle } from './layout.js'
import { github, linkedin, messenger } from './iconlinks.js'

export default function Footer() {
  return (
      <footer className="bg-white py-8 w-full">
          <div className="container mx-auto px-8">
              <div className="w-full flex justify-around">
                  <div className=" sm:table-cell">
                      <p className="uppercase text-grey text-sm sm:mb-4">Links</p>
                      <ul className="list-reset text-xs mb-6">
                          <li className="mt-3 inline-block mr-2 sm:block sm:mr-0">
                              <a href="#" className="text-grey hover:text-grey-dark">FAQ</a>
                          </li>
                          <li className="mt-3 inline-block mr-2 sm:block sm:mr-0">
                              <a href="#" className="text-grey hover:text-grey-dark">Help</a>
                          </li>
                          <li className="mt-3 inline-block mr-2 sm:block sm:mr-0">
                              <a href="#" className="text-grey hover:text-grey-dark">Support</a>
                          </li>
                      </ul>
                  </div>
                  <div className=" sm:table-cell">
                      <p className="uppercase text-grey text-sm sm:mb-4">Page Content</p>
                      <ul className="list-reset text-xs mb-6">
                          <li className="mt-3 inline-block mr-2 sm:block sm:mr-0">
                              <a href="/" className="text-grey hover:opacity-60">Home</a>
                          </li>
                          <li className="mt-3 inline-block mr-2 sm:block sm:mr-0">
                              <a href="/about" className="text-grey hover:opacity-60">About</a>
                          </li>
                          <li className="mt-3 inline-block mr-2 sm:block sm:mr-0">
                              <a href="/contact" className="text-grey hover:opacity-60">Contact</a>
                          </li>
                      </ul>
                  </div>
                  <div className=" sm:table-cell">
                      <p className="uppercase text-grey text-sm sm:mb-4">Contact me</p>
                      <ul className="list-reset text-xs mb-6">
                          <li className="mt-1 inline-block mr-1 sm:block sm:mr-0">
                            {linkedin()}
                          </li>
                          <li className="mt-1 inline-block mr-2 sm:block sm:mr-0">
                            {github()}
                          </li>
                          <li className="mt-1 inline-block mr-2 sm:block sm:mr-0">
                            {messenger()}
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="flex justify-center pt-4  text-center">
                <div>
                  <p className="text-xs">
                    This site is created with
                    <a href="https://nextjs.org/docs"> NextJS </a>
                     and
                    <a href="https://tailwindcss.com/docs"> TailwindCSS </a>
                  </p>
                  <p className="text-xs">Linnéa Olofsson 2021</p>
                </div>
              </div>
          </div>
      </footer>
  )
}
