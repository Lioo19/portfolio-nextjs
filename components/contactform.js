import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'

export default function contactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending message')

        let data = {
            name,
            email,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log("Response received")
            if (res.status === 200) {
                console.log("Response successful")
                setSubmitted(true)
                setName('')
                setEmail('')
                setMessage('')
            }
        })
    }

    return (
    <form className="mt-8 w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-name">
          Name
          </label>
          <input
            className="appearance-none block w-full border rounded-tl rounded-bl border-gray-100 w-full px-4 py-2 text-gray-900"
            id="grid-name"
            onChange={(e)=>{setName(e.target.value)}}
            placeholder="John Doe"
            type="text"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-email">
          Email
          </label>
          <input
            className="border rounded-tl rounded-bl border-gray-100 w-full px-4 py-2 text-gray-900"
            id="grid-email"
            onChange={(e)=>{setEmail(e.target.value)}}
            placeholder="john@doe.com"
            type="email"
            required
          />
        </div>
        <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-message">
          Message
          </label>
          <textarea
            className="border rounded-tl rounded-bl border-gray-100 w-full h-28 px-4 py-2 text-gray-900"
            onChange={(e)=>{setMessage(e.target.value)}}
            id="grid-message"
            placeholder="Once upon a time there was..."
            type="text"
            required
          />
        </div>
      </div>
      <button
        className="bg-yellow-400 text-gray-900 px-4 py-2 font-medium sm:text-lg rounded-tr rounded-br"
        onClick={(e) => {handleSubmit(e)}}
        type="submit"
        >
        Send
      </button>
    </form>
  )
}
