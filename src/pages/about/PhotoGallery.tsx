import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { useState } from "react";

const PhotoGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "installations", label: "Installations" },
    { id: "events", label: "Events" },
    { id: "factory", label: "Factory" },
    { id: "on-site", label: "On-Site" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOJsonLD />
      <Header />
      
      {/* Hero Banner - Updated to match the image exactly */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl w-full mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
              Explore Our <span className="text-blue-400">Legacy in Action</span>
            </h1>
            <p className="text-white text-lg">
              A visual showcase of our installations, innovations, and industrial excellence across India
            </p>
          </div>
        </div>
        <img 
          src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1767621432/warehouse-yellow-shelving.jpg" 
          alt="Warehouse with yellow shelving" 
          className="w-full h-[400px] object-cover"
        />
      </section>
      
      {/* Filter Controls */}
      <section className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
            <span className="text-sm text-gray-500">Filter Gallery</span>
          </div>

          <div className="flex gap-2">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-1 text-sm rounded-md ${
                  activeFilter === filter.id 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search gallery"
              className="pl-10 pr-4 py-1.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>
      </section>
      
      {/* Featured Gallery */}
      <section className="py-10 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-white">Featured Gallery</h2>
          
          <div className="grid grid-cols-8 grid-rows-9 gap-1.5 max-h-[800px]">
            {/* Top row - large industrial equipment */}
            <div className="col-span-5 row-span-3 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1596731630622-9e29999c21bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" 
                alt="Industrial machinery" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-3 row-span-3 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" 
                alt="Generator installation" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Middle rows */}
            <div className="col-span-3 row-span-3 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Circuit board maintenance" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-5 row-span-3 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581094283338-2314dddb7ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Control room" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Third row */}
            <div className="col-span-5 row-span-3 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" 
                alt="Gas turbine installation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-3 row-span-3 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1579389083395-4507e98b5e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Monitoring room" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom row */}
            <div className="col-span-3 row-span-3 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581094786228-b930e775c6f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Large industrial generator" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 row-span-3 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Tablet control interface" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Real Stories. Real Impact. Section - EXACTLY like in the shared image */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-8">Real Stories. Real Impact.</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Behind the Scenes: Manufacturing Excellence */}
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Manufacturing facility" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-bold">Behind the Scenes: Manufacturing Excellence</h4>
                <p className="text-sm text-gray-600 mt-1">Take a tour of our state-of-the-art manufacturing facility where precision engineering meets quality craftsmanship.</p>
                <p className="text-xs text-gray-500 mt-2">@ Kumar Generator House</p>
              </div>
            </div>
            
            {/* Client Success Story: NTPC Power Plant */}
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" 
                alt="NTPC Power Plant" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-bold">Client Success Story: NTPC Power Plant</h4>
                <p className="text-sm text-gray-600 mt-1">How our generators provided uninterrupted backup power for India's largest power generation facility.</p>
                <p className="text-xs text-gray-500 mt-2">@ NTPC Limited</p>
              </div>
            </div>
            
            {/* Emergency Response: Cyclone Relief */}
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="https://images.unsplash.com/photo-1635181134362-88818b2ff5ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" 
                alt="Cyclone Relief" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-bold">Emergency Response: Cyclone Relief</h4>
                <p className="text-sm text-gray-600 mt-1">Our mobile generator units deployed during natural disasters to provide critical power to emergency services.</p>
                <p className="text-xs text-gray-500 mt-2">@ Disaster Management Authority</p>
              </div>
            </div>
            
            {/* Innovation Spotlight: Eco-Friendly Generators */}
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Eco-Friendly Generators" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-bold">Innovation Spotlight: Eco-Friendly Generators</h4>
                <p className="text-sm text-gray-600 mt-1">Introducing our new line of environmentally conscious generators with reduced emissions and noise levels.</p>
                <p className="text-xs text-gray-500 mt-2">@ Green Energy Summit</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Power Excellence Section */}
      <section className="py-10 bg-black text-white mb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4">Experience <span className="text-blue-400">Power Excellence</span></h3>
              <p className="text-sm mb-6">
                Ready to transform your power infrastructure with industry-leading generator solutions? Our team of experts is ready to guide you through every step.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white text-sm px-6 py-2 rounded">
                  Book Your Consultation →
                </button>
                <button className="border border-white text-white text-sm px-6 py-2 rounded">
                  Download Media Kit
                </button>
              </div>
            </div>
            <div className="h-72 overflow-hidden rounded">
              <img 
                src="https://images.unsplash.com/photo-1566731855990-9a1a1ee61fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Industrial generator installation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Photo Gallery Grid */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
            {/* ...existing code... */}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PhotoGallery;

