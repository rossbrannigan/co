import Image from "next/image";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const MediaPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <GoogleAnalytics gaId="G-R17NJV1L4N" />
        <GoogleTagManager gtmId="G-R17NJV1L4N" /> 
        <title>Ross Brannigan Media | Videos, Interviews, and Updates</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Explore Ross Brannigan's media page for the latest videos, interviews, and updates. Stay informed and engaged with Ross's media content today!" />
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
              <li><a href="media" className="text-white hover:text-yellow-400 transition-colors duration-300">Media</a></li>
              <li><a href="locations" className="text-white hover:text-yellow-400 transition-colors duration-300">Locations</a></li>
              <li><a href="about" className="text-white hover:text-yellow-400 transition-colors duration-300">About</a></li>
              <li><a href="blog" className="text-white hover:text-yellow-400 transition-colors duration-300">Blog</a></li>
              <li><a href="/contact-ross" className="text-black bg-white py-2 px-4 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300">Contact Ross</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content - Media */}
      <main className="container mx-auto py-8">
        {/* LinkedIn Section */}
        <div className="border rounded-lg shadow-lg p-4 mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">LinkedIn Industry Updates | April 15, 2024</h1>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Date: April 15, 2024</p>
            <p className="text-sm text-gray-600 mb-1">Source: LinkedIn</p>
            <p className="text-sm text-gray-600 mb-4">Topic: Industry Updates</p>
          </div>
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7185577034612408320"
              frameBorder="0"
              allowFullScreen
              title="Embedded post"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </main>

      <main className="container mx-auto py-8">
        {/* YouTube Section */}
        <div className="border rounded-lg shadow-lg p-4 mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Trending Short Videos on YouTube | April 15, 2024</h1>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Date: April 15, 2024</p>
            <p className="text-sm text-gray-600 mb-1">Source: YouTube</p>
            <p className="text-sm text-gray-600 mb-4">Topic: Trending Short Videos</p>
          </div>
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/i_eQxYSBc9Q"
              title="YouTube Short"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </main>

      <main className="container mx-auto py-8">
        {/* Another YouTube Video Section */}
        <div className="border rounded-lg shadow-lg p-4 mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Mastering Digital Leadership: 10 Strategies | March 24, 2024</h1>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Date: March 24, 2024</p>
            <p className="text-sm text-gray-600 mb-1">Source: YouTube</p>
            <p className="text-sm text-gray-600 mb-4">Topic: Mastering Digital Leadership: 10 Strategies for Building High-Performing Teams</p>
          </div>
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/GYZmmLVrSOM?si=uF9Eo-er5Lgkj-ZC"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </main>
 {/* Twitter Section */}
<main className="container mx-auto py-8">
  {/* Twitter Section */}
  <div className="mb-2">
    <h1 className="text-2xl font-semibold text-gray-800">Eisenhower Business Matrix | April 13, 2024</h1>
    <div className="mb-1">
      <p className="text-sm text-gray-600">Date: April 13, 2024</p>
      <p className="text-sm text-gray-600">Source: Twitter</p>
      <p className="text-sm text-gray-600">Topic: Eisenhower Business Matrix</p>
    </div>
  </div>
  <div className="relative" style={{ paddingTop: "56.25%", marginBottom: "-1.5rem" }}>
    <blockquote className="twitter-tweet" style={{ margin: "0" }}>
      <p lang="en" dir="ltr">This simple matrix is logically comprehensive (and ubiquitous in business contexts): <a href="https://t.co/aS2JRcTUx5">https://t.co/aS2JRcTUx5</a> <a href="https://t.co/GUhteqmtTd">pic.twitter.com/GUhteqmtTd</a></p>&mdash; MIT Sloan Management Review (@mitsmr) <a href="https://twitter.com/mitsmr/status/1778952011246927876?ref_src=twsrc%5Etfw">April 13, 2024</a>
    </blockquote>
  </div>
  <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
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

export default MediaPage;