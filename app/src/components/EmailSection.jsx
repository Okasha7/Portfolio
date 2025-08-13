import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function EmailSection() {
  return (
    <div className='px-5'>
  
      <h1 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-100 lg:mb-8">
        GET IN TOUCH
      </h1>

      <section className='grid md:grid-cols-2 lg:py-12 py-5 gap-8'>
        <div>
          <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
          <p className='text-[#ADB7BE] mb-4 max-w-md'>
            I am currently looking for new opportunities. My inbox is always open.
          </p>

          <div className="socials flex flex-row gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/github-icon.svg" alt="GitHub" width={32} height={32} />
            </Link>
            <Link href="https://www.linkedin.com/in/okasha-masood-21427a279/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/linkedin-icon.svg" alt="Linkedin" width={32} height={32} />
            </Link>
          </div>
        </div>

        <div>
          <form className="flex flex-col space-y-4">
            <div>
              <label htmlFor="email" className="block text-white mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded-md bg-[#1a1a1a] text-white border border-gray-600 focus:outline-none"
                placeholder="your@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-white mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-2 rounded-md bg-[#1a1a1a] text-white border border-gray-600 focus:outline-none"
                placeholder="Job opportunity, question, etc."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-2 rounded-md bg-[#1a1a1a] text-white border border-gray-600 focus:outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default EmailSection
