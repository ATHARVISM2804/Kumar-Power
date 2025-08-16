import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import OurProfile from "@/assets/ourprofile1.png"
import Welding from "@/assets/welding.png";
import Contract from "@/assets/contract.png";
import iso from "@/assets/iso.png";
import Nation from "@/assets/Nation.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOJsonLD />
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          {/* Image on the left */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src={OurProfile}
              alt="Kumar Power Facility" 
              className="w-full h-auto object-cover shadow-lg max-h-[400px]"
            />
          </div>
          
          {/* Text on the right with smaller font size */}
          <div>
            <h1 className="text-3xl font-bold mb-3">Know About Power</h1>
            <h2 className="text-lg text-primary font-semibold mb-2">-Trusted Name in Power Solutions Providers.</h2>
            <p className="text-base">
              Kumar Generator House is a premier Kirloskar-certified power partner with over 30+ years of 
              excellence in providing comprehensive power solutions across India. Established in 1985, we have 
              grown to become one of the most trusted names in power generation equipment and services.
            </p>
            <p className="text-base mt-3">
              Our expertise spans across sales, installation, commissioning, and maintenance of diesel generators, 
              ensuring uninterrupted power supply for critical operations, our expertise spans across SITC (Supply, 
              Installation, Testing & Commissioning) and end-to-end power solutions..
            </p>
            <p className="text-base mt-3">
              As an authorized dealer and service provider for Kirloskar Green Gensets, we bring the reliability and 
              efficiency of world-class power solutions to our clients. Our team of certified engineers and 
              technicians ensures that every installation meets the highest standards of performance and safety.
            </p>
            <p className="text-base mt-3">
              With a customer-first approach and commitment to excellence, Kumar Generator House has 
              successfully delivered over 10000+ power solutions across the country, building lasting relationships 
              with our clients through exceptional service and support.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">Our Story</h2>
          <p className="text-center max-w-3xl mx-auto mb-16">
            From humble beginnings to becoming India's premier power solutions provider,
            our journey has been defined by innovation, quality, and unwavering
            commitment to excellence.
          </p>

          {/* Timeline Container with gradient background */}
          <div className="max-w-6xl mx-auto bg-gradient-to-b from-zinc-800 to-zinc-600 rounded-lg p-8">
            {/* 1975 - Foundation */}
            <div className="relative grid md:grid-cols-2 gap-6 items-center mb-16">
              <div className="bg-zinc-800 p-6 rounded-lg">
                <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-md mb-4">1975</span>
                <h3 className="text-xl font-bold mb-3">Foundation</h3>
                <p className="text-zinc-300">Kumar Generator House was established with a vision to provide reliable power solutions to businesses across India.</p>
                <div className="absolute bottom-0 left-0 h-1 w-16 bg-zinc-600 mt-4 ml-6"></div>
              </div>
              <div>
                <img 
                  src={Welding}
                  alt="Welding work" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* 2005 - Kirloskar Partnership */}
            <div className="relative grid md:grid-cols-2 gap-6 items-center mb-16">
              <div className="md:order-2 bg-zinc-800 p-6 rounded-lg">
                <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-md mb-4">2005</span>
                <h3 className="text-xl font-bold mb-3">Kirloskar Partnership</h3>
                <p className="text-zinc-300">Became an authorized partner of Kirloskar, expanding our product range and technical capabilities.</p>
                <div className="absolute bottom-0 left-0 h-1 w-16 bg-zinc-600 mt-4 ml-6"></div>
              </div>
              <div className="md:order-1">
                <img 
                  src={Contract} 
                  alt="Contract signing" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* 2012 - ISO Certification */}
            <div className="relative grid md:grid-cols-2 gap-6 items-center mb-16">
              <div className="bg-zinc-800 p-6 rounded-lg">
                <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-md mb-4">2012</span>
                <h3 className="text-xl font-bold mb-3">ISO Certification</h3>
                <p className="text-zinc-300">Achieved ISO 9001:2015 certification, validating our commitment to quality management systems.</p>
                <div className="absolute bottom-0 left-0 h-1 w-16 bg-zinc-600 mt-4 ml-6"></div>
              </div>
              <div>
                <img 
                  src={iso}
                  alt="Person working on laptop" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* 2020 - Nationwide Expansion */}
            <div className="relative grid md:grid-cols-2 gap-6 items-center">
              <div className="md:order-2 bg-zinc-800 p-6 rounded-lg">
                <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-md mb-4">2020</span>
                <h3 className="text-xl font-bold mb-3">Nationwide Expansion</h3>
                <p className="text-zinc-300">Expanded operations to all major cities in India with service centers and technical support teams.</p>
                <div className="absolute bottom-0 left-0 h-1 w-16 bg-zinc-600 mt-4 ml-6"></div>
              </div>
              <div className="md:order-1">
                <img 
                  src={Nation}
                  alt="Skyscraper buildings" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Meet the Team Section */}
      <div className="py-16 bg-gray-500">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet the Visionaries Behind the Power
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md h-full">
                <img 
                  src="https://res.cloudinary.com/dinhcaf2c/image/upload_v1755013519/rajvinder_singh_kumar.jpg"
                  alt="Rajvinder Singh Kumar" 
                  className="w-48 h-48 object-cover mx-auto mb-4"
                />
                <h3 className="text-base font-bold uppercase mb-1">RAJVINDER SINGH KUMAR</h3>
                <p className="text-primary font-semibold text-sm mb-1">Director</p>
                <p className="text-xs text-gray-500 mb-3">Proud member of NRI Gaurdian Delhi Branch</p>
                <p className="mt-2 text-sm text-left">
                  Rajvinder Singh Kumar is the Founder and CEO of Kumar Generator 
                  House, where he provides strategic vision for innovative and 
                  sustainable power solutions. With decades of industry experience 
                  in power generation equipment, he has driven remarkable growth and 
                  customer satisfaction. With an unwavering focus on quality, client 
                  satisfaction, and a commitment to excellence. Under his guidance, 
                  Kumar Generator House has become a trusted name in the industry, 
                  known for delivering reliable and efficient end-to-end power 
                  solutions.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md h-full">
                <img 
                  src="https://res.cloudinary.com/dinhcaf2c/image/upload_v1755013519/jagjit_singh_kumar.jpg"
                  alt="Jagjit Singh Kumar" 
                  className="w-48 h-48 object-cover mx-auto mb-4"
                />
                <h3 className="text-base font-bold uppercase mb-1">JAGJIT SINGH KUMAR</h3>
                <p className="text-primary font-semibold text-sm mb-1">Director</p>
                <p className="text-xs text-gray-500 mb-3">Proud member of NRI Guardian Delhi Central</p>
                <p className="mt-2 text-sm text-left">
                  Jagjit Singh Kumar is a director at Kumar Generator House, where he 
                  plays a pivotal role in shaping the company's overall trajectory and 
                  growth initiatives. With a focus on enhancing internal processes and 
                  building partnerships, he has accelerated the company's expansion 
                  while maintaining the high quality standards that distinguish our 
                  clients. His strategic approach and dedication to innovation continue to 
                  shape the company's success in the power solutions industry.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md h-full">
                <img 
                  src="https://res.cloudinary.com/dinhcaf2c/image/upload_v1755013519/manjot_singh_kumar.jpg"
                  alt="Manjot Singh Kumar" 
                  className="w-48 h-48 object-cover mx-auto mb-4"
                />
                <h3 className="text-base font-bold uppercase mb-1">MANJOT SINGH KUMAR</h3>
                <p className="text-primary font-semibold text-sm mb-1">Director</p>
                <p className="text-xs text-gray-500 mb-3">Kumar Generator House India Pvt. Ltd</p>
                <p className="mt-2 text-sm text-left">
                  Manjot Singh Kumar is the director of Kumar Generator House, a 
                  company with a proven track record of over 30 years in providing power 
                  solutions. With a keen focus on growth, innovation, and sustainability, 
                  Manjot leads the company toward achieving excellence in every aspect 
                  of operations. His leadership ensures streamlined processes and 
                  operational efficiency, and long-term business relationships, ensuring 
                  that Kumar Generator House remains a trusted name in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quality Commitment Section */}
      <div className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            Our Commitment to Quality
            <div className="w-32 h-1 bg-red-500 mx-auto mt-2"></div>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {/* Timely Delivery */}
            <div className="bg-white p-6 rounded-lg text-black">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Timely Delivery</h3>
              <p className="text-sm">
                We understand the critical nature of power solutions and ensure on-time delivery and installation.
              </p>
            </div>
            
            {/* Expert Engineering */}
            <div className="bg-white p-6 rounded-lg text-black">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Engineering</h3>
              <p className="text-sm">
                Our team of qualified engineers ensures robust design and flawless implementation of all projects.
              </p>
            </div>
            
            {/* Business Continuity */}
            <div className="bg-white p-6 rounded-lg text-black">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Business Continuity</h3>
              <p className="text-sm">
                Our solutions are designed to provide uninterrupted power supply, ensuring your operations never stop.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg text-black max-w-5xl mx-auto mt-8">
            <h3 className="text-xl font-bold mb-4">Quality Policy Statement</h3>
            <p className="text-sm mb-6">
              At Kumar Generator House, we are committed to delivering world-class power products and turnkey solutions that exceed customer expectations. Our robust design, meticulous manufacturing, and comprehensive testing ensure reliability and performance in every installation.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start text-sm">
                <svg className="w-5 h-5 text-black mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>ISO 9001:2015 certified quality management system</span>
              </li>
              <li className="flex items-start text-sm">
                <svg className="w-5 h-5 text-black mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Rigorous testing protocols for all equipment</span>
              </li>
              <li className="flex items-start text-sm">
                <svg className="w-5 h-5 text-black mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Continuous improvement through customer feedback</span>
              </li>
              <li className="flex items-start text-sm">
                <svg className="w-5 h-5 text-black mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Regular training and skill enhancement for our team</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <div className="border border-gray-300 p-3 rounded flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dinhcaf2c/image/upload_v1755013519/iso-9001-2015.jpg"
                  alt="ISO 9001:2015" 
                  className="h-16"
                />
              </div>
              <div className="border border-gray-300 p-3 rounded flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dinhcaf2c/image/upload_v1755013519/kirloskar-partner.png"
                  alt="Kirloskar Authorized" 
                  className="h-16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Power Your Business?</h2>
          <p className="text-lg mb-8">Contact our power solutions experts today to discover how Kumar Generator House can provide reliable power solutions tailored to your needs.</p>
          <button className="bg-black hover:bg-black/90 text-white px-6 py-3 rounded-md font-medium">
            Get in Touch →
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
