import Link from 'next/link'
import Head from 'next/head'

export default function contactForm() {
    return (
    <form className="mt-8 w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-name">
          Name
          </label>
          <input
            className="appearance-none block w-full border rounded-tl rounded-bl border-gray-100 w-full px-4 py-2 text-gray-900"
            id="grid-name"
            placeholder="John Doe"
            type="text"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-email">
          Email
          </label>
          <input
            className="border rounded-tl rounded-bl border-gray-100 w-full px-4 py-2 text-gray-900"
            id="grid-email"
            placeholder="john@doe.com"
            type="email"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-message">
          Message
          </label>
          <textarea
            className="border rounded-tl rounded-bl border-gray-100 w-full h-40 px-4 py-2 text-gray-900"
            placeholder="Once upon a time there was..."
            type="text"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 px-4 py-2 font-medium sm:text-lg rounded-tr rounded-br"
            >
            Send
          </button>
        </div>
      </div>
    </form>
  )
}
