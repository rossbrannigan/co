import Image from "next/image";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
                    {/* Add Google Analytics tracking tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R17NJV1L4N"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R17NJV1L4N');
            `,
          }}
        />
        <GoogleAnalytics gaId="G-R17NJV1L4N" />
        <GoogleTagManager gtmId="G-R17NJV1L4N" /> 
        <title>Contact Ross | Get in touch with Ross Brannigan</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Get in touch with Ross Brannigan. Schedule a call, view marketplace, CV, media, locations, and more." />
      </Head>

      {/* Header */}
      <header className="bg-black shadow-lg">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <div className="mr-4">
            <a href="/">
              <Image src="/ross_brannigan_logo.svg" alt="Ross Brannigan Signature" width={250} height={150} className="border-none" />
            </a>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="https://calendly.com/ross-brannigan/30min?month=2024-04" className="text-white hover:text-yellow-400 transition-colors duration-300">Schedule A Call</a></li>
              <li><a href="marketplace" className="text-white hover:text-yellow-400 transition-colors duration-300">Marketplace</a></li>
              <li><a href="cv" className="text-white hover:text-yellow-400 transition-colors duration-300">CV</a></li>
              <li><a href="Media" className="text-white hover:text-yellow-400 transition-colors duration-300">Media</a></li>
              <li><a href="locations" className="text-white hover:text-yellow-400 transition-colors duration-300">Locations</a></li>
              <li><a href="about" className="text-white hover:text-yellow-400 transition-colors duration-300">About</a></li>
              <li><a href="blog" className="text-white hover:text-yellow-400 transition-colors duration-300">Blog</a></li>
              <li><a href="/contact-ross" className="text-black bg-white py-2 px-4 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300">Contact Ross</a></li>
            </ul>
          </nav>
        </div>
      </header>

             {/* Google Analytics - can go anywhere on main body of page - https://nextjs.org/docs/messages/next-script-for-ga */}
      <GoogleAnalytics gaId="G-R17NJV1L4N" />

      {/* Main Content - Submission Form */}
      <main className="container mx-auto py-8 flex flex-wrap justify-center gap-8">
        {/* Form Section */}
        <section className="bg-white shadow-md rounded-md p-8 border-2" style={{ borderColor: '#444', flex: '1' }}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Ross</h2>
          <form name="contact" method="POST" data-netlify="true" className="space-y-4">
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name" className="block text-gray-700">Your Name: </label>
              <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 text-black" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Your Email: </label>
              <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 text-black" />
            </div>
            <div>
              <label htmlFor="role" className="block text-gray-700">Your Role: </label>
              <select id="role" name="role[]" multiple className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 text-black">
                <option value="leader">Senior Management / Leadership</option>
                <option value="investor">Recruiter</option>
                <option value="customer">Potential Customer</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message: </label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 text-black"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-opacity-50 transition-colors duration-300">
                Send
              </button>
            </div>
          </form>
        </section>

        {/* Encouragement Text Section */}
        <section className="bg-white shadow-md rounded-md p-8 border-2" style={{ borderColor: 'black', flex: '1' }}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
          <div className="flex justify-center mb-4">
            <img src="/images/contact-ross.svg" alt="Contact Ross" className="w-full h-auto max-w-500" />
          </div>
          <p className="text-gray-700">
            I would love to hear from you! Whether you have questions, comments, or feedback, feel free to reach out to me using the form on the left. I will get back to you as soon as I can.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between">
          {/* Logo */}
          <div className="mb-4 lg:mb-0 lg:order-1 lg:self-start">
            <Image
              src="/ross-logo-initial-icon.svg"
              alt="Ross Brannigan Initials"
              width={40}
              height={40}
            />
          </div>
          {/* Links */}
          <div className="lg:ml-auto lg:order-3">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-gray-300 mb-2 text-xs font-bold">Quick Links</h3>
                <ul className="text-gray-300">
                  <li className="mb-0.5">
                    <a href="https://calendly.com/ross-brannigan/30min?month=2024-04" className="hover:text-white text-xs">
                      Schedule A Call
                    </a>
                  </li>
                  <li className="mb-0.5">
                    <a href="Marketplace" className="hover:text-white text-xs">
                      Marketplace
                    </a>
                  </li>
                  <li className="mb-0.5">
                    <a href="cv" className="hover:text-white text-xs">
                      CV
                    </a>
                  </li>
                  <li className="mb-0.5">
                    <a href="locations" className="hover:text-white text-xs">
                      Locations
                    </a>
                  </li>
                  <li className="mb-0.5">
                    <a href="Media" className="hover:text-white text-xs">
                      Media
                    </a>
                  </li>
                  <li className="mb-0.5">
                    <a href="about" className="hover:text-white text-xs">
                      About 
                    </a>
                  </li>
                  <li className="mb-0.5">
                    <a href="blog" className="hover:text-white text-xs">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-gray-300 mb-2 text-xs font-bold">Contact Us</h3>
                <ul className="text-gray-300">
                  <li className="mb-0.5 flex items-center">
                    📞 <span className="ml-2 text-xs">+66 82 836 2713</span>
                  </li>
                  <li className="mb-0.5 flex items-center">
                    ✉️ <span className="ml-2 text-xs">rossbrannigan@gmail.com</span>
                  </li>
                  <li className="mb-0.5 flex items-center">
                    📝 
                    <a href="/contact-ross" className="ml-2 text-xs hover:text-white">
                      Contact Ross
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.linkedin.com/company/alphadigitalgroup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white text-xs"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="border-t border-gray-600 w-full my-8" />
        {/* Copyright text */}
        <p className="text-xs text-gray-300 text-center lg:order-5">
          © 2020-2024. All rights reserved.
        </p>
        {/* Powered by Ross Brannigan */}
        <p className="text-xs text-gray-300 text-center mt-4 lg:order-6">
          Powered by <a href="https://www.rossbrannigan.co" target="_blank" rel="noopener noreferrer" className="underline">Ross Brannigan</a>
        </p>
      </footer>
    </div>
  );
}

export default ContactPage;
