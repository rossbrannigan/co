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




<main className="container mx-auto py-8">
  {/* Instagram Section */}
  <h1 className="text-2xl font-semibold text-gray-800 mb-4">Exciting Instagram Post | April 15, 2024</h1>
  <div className="mb-4">
    <p className="text-sm text-gray-600 mb-1">Date: April 15, 2024</p>
    <p className="text-sm text-gray-600 mb-1">Source: Instagram</p>
    <p className="text-sm text-gray-600 mb-4">Topic: IE Alumni Conference APAC 2024</p>
  </div>
  {/* Instagram Embed */}
  <div className="relative" style={{ maxWidth: "540px", margin: "0 auto" }}>
    <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/C4E_f_vp0yd/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: "#FFF", border: "0", borderRadius: "3px", boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)", margin: "1px", maxWidth: "540px", minWidth: "326px", padding: "0", width: "calc(99.375% - 2px)", calc: "calc(100% - 2px)" }}>
      {/* Instagram Embedded Content */}
      <div style={{ padding: "16px" }}>
        <a href="https://www.instagram.com/p/C4E_f_vp0yd/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: "#FFFFFF", lineHeight: "0", padding: "0 0", textAlign: "center", textDecoration: "none", width: "100%" }} target="_blank">
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", flexGrow: "0", height: "40px", marginRight: "14px", width: "40px" }}></div>
            <div style={{ display: "flex", flexDirection: "column", flexGrow: "1", justifyContent: "center" }}>
              <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", flexGrow: "0", height: "14px", marginBottom: "6px", width: "100px" }}></div>
              <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", flexGrow: "0", height: "14px", width: "60px" }}></div>
            </div>
          </div>
          <div style={{ padding: "19% 0" }}></div>
          <div style={{ display: "block", height: "50px", margin: "0 auto 12px", width: "50px" }}>
            <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                  <g>
                    <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div style={{ paddingTop: "8px" }}>
            <div style={{ color: "#3897f0", fontFamily: "Arial, sans-serif", fontSize: "14px", fontStyle: "normal", fontWeight: "550", lineHeight: "18px" }}>View this post on Instagram</div>
          </div>
          <div style={{ padding: "12.5% 0" }}></div>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "14px", alignItems: "center" }}>
            <div>
              <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", height: "12.5px", width: "12.5px", transform: "translateX(0px) translateY(7px)" }}></div>
              <div style={{ backgroundColor: "#F4F4F4", height: "12.5px", transform: "rotate(-45deg) translateX(3px) translateY(1px)", width: "12.5px", flexGrow: "0", marginRight: "14px", marginLeft: "2px" }}></div>
              <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", height: "12.5px", width: "12.5px", transform: "translateX(9px) translateY(-18px)" }}></div>
            </div>
            <div style={{ marginLeft: "8px" }}>
              <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", flexGrow: "0", height: "20px", width: "20px" }}></div>
              <div style={{ width: "0", height: "0", borderTop: "2px solid transparent", borderLeft: "6px solid #f4f4f4", borderBottom: "2px solid transparent", transform: "translateY(-4px) translateX(4px) rotate(30deg)", flexGrow: "0" }}></div>
            </div>
            <div style={{ marginRight: "8px", marginLeft: "4px" }}>
              <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", flexGrow: "0", height: "20px", width: "20px" }}></div>
              <div style={{ width: "0", height: "0", borderTop: "2px solid transparent", borderLeft: "6px solid #f4f4f4", borderBottom: "2px solid transparent", transform: "translateY(-4px) translateX(4px) rotate(30deg)", flexGrow: "0" }}></div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", height: "20px", width: "20px" }}></div>
              <div style={{ width: "0", height: "0", border: "6px solid transparent", borderTopColor: "#FFF", borderBottom: "0", transform: "translateX(16px) translateY(-4px)" }}></div>
            </div>
          </div>
        </a>
      </div>
    </blockquote>
  </div>
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