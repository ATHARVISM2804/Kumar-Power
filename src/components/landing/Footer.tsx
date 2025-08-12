const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground pt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div>
            <h4 className="font-semibold mb-3">Kumar Power</h4>
            <p className="text-sm opacity-80">Kirloskar-certified sales, service, and turnkey power solutions.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Our Products</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Diesel Generators</li>
              <li>Gas Generators</li>
              <li>Portable Generators</li>
              <li>UPS Systems</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Useful Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#about">About</a></li>
              <li><a href="#range">Generators</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#blogs">Blogs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>sales@kumar-power.example</li>
              <li>+91 98XX-XXXXXX</li>
              <li>Mon–Sat, 9:00–18:00 IST</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 py-6 text-xs opacity-80 flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Kumar Power. All rights reserved.</p>
          <p>Made with reliable power and great design.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;