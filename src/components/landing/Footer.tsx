const Footer = () => {
  return (
    <>
      {/* Call To Action Section */}
      <section className="bg-white border-t border-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Call To Action</h2>
            <p className="text-black text-base md:text-lg max-w-xl">
              Have questions or need more information? We're here to help! Click the "Enquire Now" button to get in touch with our team. Whether you're interested in learning more about our services, products, or pricing, simply send us your inquiry and we'll respond promptly. Let us help you find the right solution for your needs!
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto md:items-end">
            <a
              href="#contact"
              className="bg-black text-white rounded-lg px-8 py-3 font-semibold text-base text-center shadow hover:bg-gray-900 transition"
            >
              Enquire Now
            </a>
            <a
              href="#"
              className="border border-black text-black rounded-lg px-8 py-3 font-semibold text-base text-center hover:bg-black hover:text-white transition"
            >
              Download Our Company Profile
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer id="contact" className="bg-black text-white pt-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 pt-12">
            {/* About */}
            <div>
              <h4 className="font-bold text-white text-lg mb-3">Kumar Power</h4>
              <p className="text-sm text-white/80 mb-2">
                Kumar Generator House is certified ISO 9001:2015 Company &amp; have emerged as the leading Power Solution Providers. Being an authorized Channel Partner of Kirloskar Oil Engines Limited, Kumar Generator House is committed to provide quality power solutions.
              </p>
            </div>
            {/* Our Products */}
            <div>
              <h4 className="font-bold text-white text-lg mb-3">Our Products</h4>
              <ul className="space-y-1 text-sm text-white/90">
                <li>Kirloskar Generators</li>
                <li>Kirloskar Gas Generators</li>
                <li>Kirloskar Portable Generators</li>
                <li>Kirloskar Diesel Generators</li>
                <li>Electrical Panels</li>
                <li>Servo Stabilizers</li>
                <li>Inverters (UPS Systems)</li>
                <li>Transformers</li>
                <li>VFDs</li>
              </ul>
            </div>
            {/* Useful Links */}
            <div>
              <h4 className="font-bold text-white text-lg mb-3">Useful Links</h4>
              <ul className="space-y-1 text-sm text-white/90">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#clients">Our Clients</a></li>
                <li><a href="#installation">Installation</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#blogs">Blog</a></li>
              </ul>
            </div>
            {/* Contact Us */}
            <div>
              <h4 className="font-bold text-white text-lg mb-3">Contact Us</h4>
              <ul className="space-y-1 text-sm text-white/90">
                <li>904, Westend Mall, Janakpuri,<br />New Delhi 110058</li>
                <li>P : +91 97738 51767,<br />011-45086389</li>
                <li>E : kumargeneratorhouse@gmail.com</li>
                <li className="flex gap-3 mt-2">
                  <a href="#" aria-label="Facebook" className="hover:text-blue-400">
                    <svg width="20" height="20" fill="currentColor"><path d="M17 1H3C1.9 1 1 1.9 1 3v14c0 1.1.9 2 2 2h7v-7H7v-3h3V7c0-2.2 1.3-3.5 3.3-3.5.9 0 1.7.1 1.7.1v3h-1.2c-1 0-1.3.6-1.3 1.2v1.7h3l-.5 3h-2.5v7h4c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z"/></svg>
                  </a>
                  <a href="#" aria-label="Instagram" className="hover:text-pink-400">
                    <svg width="20" height="20" fill="currentColor"><circle cx="10" cy="10" r="6"/><circle cx="15" cy="5" r="1.5"/></svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">
                    <svg width="20" height="20" fill="currentColor"><rect x="2" y="7" width="3" height="11"/><circle cx="3.5" cy="4" r="1.5"/><rect x="7" y="7" width="3" height="11"/><rect x="12" y="11" width="3" height="7"/><path d="M13.5 7A2.5 2.5 0 0 1 16 9.5V18h-3v-7.5A2.5 2.5 0 0 1 13.5 7z"/></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 py-6 text-xs text-white/60 flex flex-col md:flex-row items-center justify-between">
            <p>© {new Date().getFullYear()} Kumar Power. All rights reserved.</p>
            <p>Made with reliable power and great design.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;