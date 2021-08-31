import Link from 'next/link'
import { siteTitle } from './layout.js'
import { facebook, github, linkedin, messenger } from './iconlinks.js'

export default function Footer() {
  return (
      <footer className="bg-white py-8 w-full">
          <div className="container mx-auto px-8">
              <div className="w-full flex justify-around">
                  <div className=" sm:table-cell">
                      <p className="uppercase text-grey text-sm sm:mb-6">Links</p>
                      <ul className="list-reset text-xs mb-6">
                          <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                              <a href="#" className="text-grey hover:text-grey-dark">FAQ</a>
                          </li>
                          <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                              <a href="#" className="text-grey hover:text-grey-dark">Help</a>
                          </li>
                          <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                              <a href="#" className="text-grey hover:text-grey-dark">Support</a>
                          </li>
                      </ul>
                  </div>
                  <div className=" sm:table-cell">
                      <p className="uppercase text-grey text-sm sm:mb-6">Contact me</p>
                      <ul className="list-reset text-xs mb-6">
                          <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            {facebook()}
                          </li>
                          <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                {linkedin()}
                          </li>
                          <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            {github()}
                          </li>
                          <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            {messenger()}
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="flex justify-center pb-2 pt-1">
                  <a href="/" className="px-4 text-grey hover:opacity-60">Home</a>
                  <p>|</p>
                  <a href="/about" className="px-4 text-grey hover:opacity-60">About</a>
                  <p>|</p>
                  <a href="/contact" className="px-4 text-grey hover:opacity-60">Contact</a>
              </div>
          </div>
      </footer>
  )
}
