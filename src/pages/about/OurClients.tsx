import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import handshake from "@/assets/handshake.png";
import honeywell from "@/assets/Honeywell.png";
import  suez from "@/assets/Suez.png";
import adani from "@/assets/Adani.png";
import sikka from "@/assets/S&P Infra.png";
import apollo from "@/assets/Apollo.png";
import cec from "@/assets/CEC (1).png";
import seasons from "@/assets/Seasons (1).png";
import ncc from "@/assets/Ncc Limited.png";
import gmr from "@/assets/GMR (1).png";
import airindia from "@/assets/air-india-logo-png_seeklogo-5113 1.png";
import british from "@/assets/BristishPaints.png";
import nbcc from "@/assets/NBCC 1.png"
import afcons from "@/assets/Afcons.png";
import kec from "@/assets/KEC.png";
import ojc from "@/assets/OJC.png"
import mapple from "@/assets/Mapple.png";
import comed from "@/assets/Comed.png";
import mbd from "@/assets/Malhotra.png";
import sp from "@/assets/S&P Infra.png";
import rai from "@/assets/Rai Foundation.png";
import kashyapi from "@/assets/Kashyapi (1).png";
import pwc from "@/assets/PWC.png";
import daiken from "@/assets/Daikin.png";
import ignou from "@/assets/IGNOU-Preview 1.png";
import vistara from "@/assets/Vistara.png";
const OurClients = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOJsonLD />
      <Header />
      
      {/* Hero Section */}
      <section 
        className="bg-cover bg-center py-24 text-white relative" 
        style={{ 
          backgroundImage: `url(${handshake})`,
          backgroundPosition: "center 20%"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Powering India's<br />Elite Enterprises</h1>
          <p className="text-lg max-w-2xl">
            For over three decades, Kumar Generator House has been the trusted power partner for India's most demanding institutions.
          </p>
          <button className="flex items-center text-blue-300 mt-4 text-sm">
            Explore our client portfolio
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </section>
      
      {/* Our Esteemed Clients Section */}
      <section className="bg-gray-900 py-6 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center">Our Esteemed Clients</h2>
        </div>
      </section>
      
      {/* Client Logos Grid */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Row 1 */}
            <div className="flex items-center justify-center">
              <img src={honeywell} alt="Honeywell" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={suez} alt="Suez" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={adani} alt="Adani Wilmar" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={sikka} alt="Sikka" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={apollo} alt="Apollo" className="h-12" />
            </div>
            
            {/* Row 2 */}
            <div className="flex items-center justify-center">
              <img src={cec} alt="National Small Industries" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={seasons} alt="Seasons" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={ncc} alt="NCC" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={gmr} alt="GMR" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={airindia} alt="Air India" className="h-12" />
            </div>
            
            {/* Row 3 */}
            <div className="flex items-center justify-center">
              <img src={british} alt="British Paints" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={nbcc} alt="NHPC" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={afcons} alt="Afcons" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={kec} alt="KEC" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={ojc} alt="Oriental" className="h-12" />
            </div>
            
            {/* Row 4 */}
            <div className="flex items-center justify-center">
              <img src={mapple} alt="Mapple" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={comed} alt="Coated" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={mbd} alt="MBD Group" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={sp} alt="Infrastructure" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={rai} alt="Raj Foundation" className="h-12" />
            </div>
            
            {/* Row 5 */}
            <div className="flex items-center justify-center">
              <img src={kashyapi} alt="Kashyapi" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={pwc} alt="PwC" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={daiken} alt="Daikin" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={ignou} alt="IGNOU" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={vistara} alt="Vistaar" className="h-12" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800">500+</h3>
              <p className="text-sm text-gray-600">Enterprise Clients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">30+</h3>
              <p className="text-sm text-gray-600">Years of Service</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">10000+</h3>
              <p className="text-sm text-gray-600">Installations Across India</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Prestigious Clients Section */}
      <section className="bg-[#3B4255] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-2">Our Prestigious Clients</h2>
          <p className="text-sm text-center max-w-2xl mx-auto mb-8">
            We are proud to partner with industry leaders across various sectors, providing exceptional power solutions.
          </p>
          
          {/* Industry Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button className="flex items-center bg-blue-600 text-white px-3 py-1.5 text-sm rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" />
              </svg>
              Industries
            </button>
            <button className="flex items-center bg-[#2D3546] text-white px-3 py-1.5 text-sm rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Retail Outlets
            </button>
            <button className="flex items-center bg-[#2D3546] text-white px-3 py-1.5 text-sm rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              Banks
            </button>
            <button className="flex items-center bg-[#2D3546] text-white px-3 py-1.5 text-sm rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Embassies
            </button>
            <button className="flex items-center bg-[#2D3546] text-white px-3 py-1.5 text-sm rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Educational Institutions
            </button>
            <button className="flex items-center bg-[#2D3546] text-white px-3 py-1.5 text-sm rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Medical Facilities
            </button>
            <button className="flex items-center bg-[#2D3546] text-white px-3 py-1.5 text-sm rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
              Construction
            </button>
            <button className="flex items-center bg-[#2D3546] text-white px-3 py-1.5 text-sm rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              Spiritual & NGOs
            </button>
            <button className="flex items-center bg-[#2D3546] text-white px-3 py-1.5 text-sm rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              Hospitality & Residential
            </button>
          </div>
          
          {/* Industries Grid - Exactly like in the image */}
          <div className="bg-[#191D2C] p-8 rounded-md">
            <p className="text-gray-400 font-semibold mb-6 flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" />
              </svg>
              Industries
            </p>
            <div className="grid grid-cols-4 gap-x-8 gap-y-8">
              <div>
                <p className="font-semibold mb-4">Acme Industrial Solutions</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Global Manufacturing Inc.</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Precision Engineering Ltd.</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Advanced Materials Corp.</p>
              </div>
              
              <div>
                <p className="font-semibold mb-4">Integrated Systems Group</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Quantum Industrial Holdings</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Nexus Power Technologies</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Vertex Engineering Solutions</p>
              </div>
              
              <div>
                <p className="font-semibold mb-4">Pinnacle Industries</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Synergy Manufacturing</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Apex Industrial Systems</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Frontier Engineering Corp.</p>
              </div>
              
              <div>
                <p className="font-semibold mb-4">Meridian Power Solutions</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Catalyst Industrial Group</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Horizon Engineering</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Paramount Industries</p>
              </div>
              
              <div>
                <p className="font-semibold mb-4">Elite Engineering Systems</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Dynamic Power Solutions</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Vanguard Industrial Corp.</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Titan Manufacturing Group</p>
              </div>
              
              <div>
                <p className="font-semibold mb-4">Spectrum Engineering</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Fusion Power Systems</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Summit Industrial Solutions</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Omega Engineering Corp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OurClients;
