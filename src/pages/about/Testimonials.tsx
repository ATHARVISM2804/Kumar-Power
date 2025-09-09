import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { useState, useEffect } from "react";
import test1 from "@/assets/test1.png";
import test2 from "@/assets/test2.png";
import test3 from "@/assets/test3.png";
import test4 from "@/assets/test4.png";

import testimonial from "@/assets/Testimonial/testii.jpeg"
import trust from "@/assets/Clients page/GMR Infra.jpg";
import trust1 from "@/assets/SIS (1).png";
import trust2 from "@/assets/Vistara 1 (1).png";
import trust3 from "@/assets/Clients page/GMR Infra.jpg";
import trust4 from "@/assets/Honeywell 1 (1).png";
import trust5 from "@/assets/Kashyapi (2).png";
import trust6 from "@/assets/Caritas (1).png";
import trust7 from "@/assets/CEC (1).png";
import ace from "@/assets/Clients page/AceConstruction.jpg";
import claroin from "@/assets/Clients page/Clarion.png";
import Comed from "@/assets/Clients page/Comed.png";
import Dps from "@/assets/Clients page/DPS.jpg";
import GEPL from "@/assets/Clients page/GEPL.jpg";
import addidas from "@/assets/Clients page/Adidas.jpg";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <style jsx global>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        .logos-container {
          overflow: hidden;
          padding: 20px 0;
          white-space: nowrap;
          position: relative;
        }
        
        .logos-slide {
          display: inline-block;
          animation: slide 20s linear infinite;
        }
        
        .logo-item {
          display: inline-flex;
          margin: 0 30px;
        }
      `}</style>
      
      <SEOJsonLD />
      <Header />
      
     {/* Success Stories Section - Banner image background header */}
{/* Success Stories Section - Banner image background header */}
<section 
  className="relative py-16 h-80 bg-cover bg-no-repeat text-white" 
  style={{ 
    backgroundImage: `url(${testimonial})`,
    backgroundPosition: "40% 30%"  // X% Y% → adjust this
    // Example: "50% 0%" (center top), "50% 100%" (center bottom), "0% 50%" (left center)
    // Or use pixels: "0px 100px", "50px 200px", etc.
  }}
>
  {/* Optional overlay for readability */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative max-w-7xl mx-auto px-8">
    <div className="mb-6">
      <div className="border-l-4 border-[#2D6FBA] pl-4">
        <h2 className="text-4xl font-bold leading-tight">
          POWERING INDIA'S<br />SUCCESS STORIES
        </h2>
        <p className="mt-2 text-gray-200">Testimonials from industry leaders</p>
      </div>

      <button className="text-[#2D6FBA] mt-4 flex items-center text-lg font-medium hover:underline">
        Discover
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</section>


      
      {/* Client Stories Section - White background */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-3xl font-semibold">Client Success Stories</h3>
            <button className="text-sm text-gray-500 flex items-center">
              Filter by industry...
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {/* Testimonial Grid - Exactly as shown in image */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Testimonial 1 - Indian Railways */}
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                    <img 
                      src="https://randomuser.me/api/portraits/women/62.jpg" 
                      alt="Rupa Sharma" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Rupa Sharma</h4>
                    <p className="text-xs text-gray-600">Technical Director, Indian Railways</p>
                  </div>
                </div>
                <p className="text-sm mb-4">
                  "The reliability of Kumar generators has been crucial for our railway operations across the country. Their solutions have withstood extreme weather conditions and safety standards required by railways."
                </p>
                <button className="text-xs text-[#2D6FBA] flex items-center">
                  Watch Full Story
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Testimonial 2 - Vikram Mehta */}
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                    <img 
                      src="https://randomuser.me/api/portraits/men/42.jpg" 
                      alt="Vikram Mehta" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Vikram Mehta</h4>
                    <p className="text-xs text-gray-600">Facility Manager, Apollo Hospitals</p>
                  </div>
                </div>
                <p className="text-sm mb-4">
                  "For healthcare, uninterrupted power is not just a convenience—it's a necessity. Kumar Generator House understands this critical need and delivers excellence."
                </p>
                <button className="text-xs text-[#2D6FBA] flex items-center">
                  Watch Full Story
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Testimonial 3 - Anand Patel */}
            <div className="border  rounded-lg overflow-hidden">
              
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                    <img 
                      src="https://randomuser.me/api/portraits/men/62.jpg" 
                      alt="Anand Patel" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Anand Patel</h4>
                    <p className="text-xs text-gray-600">Infrastructure Head, Reliance Industries</p>
                  </div>
                </div>
                <p className="text-sm mb-4">
                  "We've relied on Kumar Generators for over a decade. Their preventive maintenance program has saved us millions in potential downtime costs."
                </p>
                <button className="text-xs text-[#2D6FBA] flex items-center">
                  Watch Full Story
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Testimonial 4 - Sunita Reddy */}
            <div className="border rounded-lg overflow-hidden">
              
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                    <img 
                      src="https://randomuser.me/api/portraits/women/32.jpg" 
                      alt="Sunita Reddy" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sunita Reddy</h4>
                    <p className="text-xs text-gray-600">CEO, Wipro Electronics</p>
                  </div>
                </div>
                <p className="text-sm mb-4">
                  "The custom power solutions designed by Kumar Generator House have been instrumental in our manufacturing excellence and meeting strict delivery timelines."
                </p>
                <button className="text-xs text-[#2D6FBA] flex items-center">
                  Watch Full Story
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics and Trusted Organizations Section - Dark blue background at bottom */}
      <section className="bg-[#0f1423] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Stats - Exactly matching image layout */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-1">100+</h2>
              <p className="text-sm">Video Testimonials</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-1">25+</h2>
              <p className="text-sm">Industries Served</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-1">10000+</h2>
              <p className="text-sm">Installations Nationwide</p>
            </div>
          </div>
          
          {/* Trusted By Section */}
          <div className="text-center mb-8">
            <p className="text-2xl mb-6">Trusted by India's Leading Organizations</p>
            <div className="logos-container">
              <div className="logos-slide">
                {/* First set of logos */}
                <div className="logo-item">
                  <img src={trust} alt="Seasons" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust1} alt="SIS" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust2} alt="Vistara" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust3} alt="GMR" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust4} alt="Honeywell" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust5} alt="Kashyapi" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust6} alt="Caritas" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={addidas} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={GEPL} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={Dps} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={Comed} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={ace} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={claroin} alt="CEC" className="max-h-16 w-auto" />
                </div>
                
                {/* Duplicate logos for continuous loop */}
                <div className="logo-item">
                  <img src={trust} alt="Seasons" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust1} alt="SIS" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust2} alt="Vistara" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust3} alt="GMR" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust4} alt="Honeywell" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust5} alt="Kashyapi" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust6} alt="Caritas" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={trust7} alt="CEC" className="max-h-16 w-auto" />
                </div>
                 <div className="logo-item">
                  <img src={addidas} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={GEPL} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={Dps} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={Comed} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={ace} alt="CEC" className="max-h-16 w-auto" />
                </div>
                <div className="logo-item">
                  <img src={claroin} alt="CEC" className="max-h-16 w-auto" />
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-2">Ready to join India's most reliable power network?</h3>
            <p className="text-sm max-w-2xl mx-auto mb-6">
              From hospitals to data centers, from factories to airports — Kumar power delivers
              uninterrupted power solutions tailored to your needs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={
                () => {
                  window.location.href = "/contact";
                }
              } className=" bg-[#2D6FBA]  text-black py-2 px-6 rounded flex items-center">
                Request Consultation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="border border-white text-white py-2 px-6 rounded">
                Download Brochure
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="flex justify-center gap-6 mt-8">
              <a href="https://wa.me/917023817174" className="flex items-center text-sm">
                <div className="bg-[#00FF00] h-8 w-8 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="white" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </div>
                <span>WhatsApp Support</span>
              </a>
              <a href="tel:01123911273" className="flex items-center text-sm">
                <div className="bg-[#2D6FBA] h-8 w-8 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>Helpline: 011-23911273</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
