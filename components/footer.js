import Link from 'next/link'
import { siteTitle } from './layout.js'

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
                      <p className="uppercase text-grey text-sm sm:mb-6">Legal</p>
                      <ul className="list-reset text-xs mb-6">
                          <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                              <a href="#" className="text-grey hover:text-grey-dark">Terms</a>
                          </li>
                          <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                              <a href="#" className="text-grey hover:text-grey-dark">Privacy</a>
                          </li>
                      </ul>
                  </div>
                  <div className=" sm:table-cell">
                      <p className="uppercase text-grey text-sm sm:mb-6">Social</p>
                      <ul className="list-reset text-xs mb-6">
                          <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                              <a href="#" className="text-grey hover:text-grey-dark">Facebook</a>
                          </li>
                          <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                              <a href="#" className="text-grey hover:text-grey-dark">Linkedin</a>
                          </li>
                          <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                              <a href="#" className="text-grey hover:text-grey-dark">Twitter</a>
                          </li>
                      </ul>
                  </div>
                  <div className=" sm:table-cell">
                      <p className="uppercase text-grey text-sm sm:mb-6">Company</p>
                      <ul className="list-reset text-xs mb-6">
                          <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                              <a href="#" className="text-grey hover:text-grey-dark">Official Blog</a>
                          </li>
                          <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                              <a href="#" className="text-grey hover:text-grey-dark">About Us</a>
                          </li>
                          <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                              <a href="#" className="text-grey hover:text-grey-dark">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
  )
}
