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
                  <a href="#" aria-label="Facebook" className="hover:text-blue-500">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.595 1.325-1.326V1.326C24 .595 23.405 0 22.675 0"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram" className="hover:text-pink-500">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="6" />
                      <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.601v5.595z"/>
                    </svg>
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