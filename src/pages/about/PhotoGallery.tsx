import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { useState, useEffect } from "react";
import gallery from "@/assets/Gallery1.png";
import gallery2 from "@/assets/gallery2.png";
import gallery3 from "@/assets/gallery3.png";
import gallery4 from "@/assets/gallery4.png";
import gallery5 from "@/assets/gallery5.png";
import gallery6 from "@/assets/gallery6.png";
import gallery7 from "@/assets/gallery7.png";
import gallery8 from "@/assets/gallery8.png";
import gallery9 from "@/assets/gallery9.png";
import gal1 from "@/assets/gal1.png";
import gal2 from "@/assets/gal2.png";
import gal3 from "@/assets/gal3.png";
import gal4 from "@/assets/gal4.png";
import gal5 from "@/assets/gal6.png";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  size?: {
    colSpan: number;
    rowSpan: number;
  };
}

const PhotoGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);

  const filters = [
    { id: "all", label: "All" },
    { id: "installations", label: "Installations" },
    { id: "events", label: "Events" },
    { id: "factory", label: "Factory" },
    { id: "on-site", label: "On-Site" },
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: gallery2,
      alt: "Industrial machinery",
      category: "factory",
      size: { colSpan: 5, rowSpan: 3 }
    },
    {
      id: 2,
      src: gallery3,
      alt: "Generator installation",
      category: "installations",
      size: { colSpan: 3, rowSpan: 3 }
    },
    {
      id: 3,
      src: gallery4,
      alt: "Circuit board maintenance",
      category: "on-site",
      size: { colSpan: 3, rowSpan: 3 }
    },
    {
      id: 4,
      src: gallery5,
      alt: "Control room",
      category: "factory",
      size: { colSpan: 5, rowSpan: 3 }
    },
    {
      id: 5,
      src: gallery6,
      alt: "Gas turbine installation",
      category: "installations",
      size: { colSpan: 5, rowSpan: 3 }
    },
    {
      id: 6,
      src: gallery7,
      alt: "Monitoring room",
      category: "on-site",
      size: { colSpan: 3, rowSpan: 3 }
    },
    {
      id: 7,
      src: gallery8,
      alt: "Large industrial generator",
      category: "installations",
      size: { colSpan: 3, rowSpan: 3 }
    },
    {
      id: 8,
      src: gallery9,
      alt: "Tablet control interface",
      category: "events",
      size: { colSpan: 2, rowSpan: 3 }
    }
  ];
  
  const storyImages: GalleryImage[] = [
    {
      id: 9,
      src: gal1,
      alt: "Manufacturing facility",
      category: "factory"
    },
    {
      id: 10,
      src: gal2,
      alt: "NTPC Power Plant",
      category: "installations"
    },
    {
      id: 11,
      src: gal3,
      alt: "Cyclone Relief",
      category: "on-site"
    },
    {
      id: 12,
      src: gal4,
      alt: "Eco-Friendly Generators",
      category: "events"
    }
  ];

  // Filter images based on active filter and search query
  useEffect(() => {
    const filterImages = () => {
      let filtered = [...galleryImages, ...storyImages];
      
      // Apply category filter
      if (activeFilter !== "all") {
        filtered = filtered.filter(img => img.category === activeFilter);
      }
      
      // Apply search query if exists
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(
          img => img.alt.toLowerCase().includes(query) || img.category.toLowerCase().includes(query)
        );
      }
      
      setFilteredImages(filtered);
    };
    
    filterImages();
  }, [activeFilter, searchQuery]);

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
          src={gallery}
          alt="Warehouse with yellow shelving" 
          className="w-full h-[400px] object-cover"
        />
      </section>
      
      {/* Filter Controls */}
      <section className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
            <span className="text-sm text-gray-500">Filter Gallery</span>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
          
          {filteredImages.filter(img => 'size' in img).length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white text-lg">No gallery images found matching your filter criteria.</p>
              <button 
                onClick={() => {setActiveFilter('all'); setSearchQuery('');}}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Show All Images
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-8 grid-rows-9 gap-1.5 max-h-[1400px]">
              {filteredImages
                .filter(img => 'size' in img)
                .map((image: GalleryImage) => (
                  <div 
                    key={image.id} 
                    className={`col-span-${image.size?.colSpan} row-span-${image.size?.rowSpan} overflow-hidden`}
                  >
                    <img 
                      src={image.src}
                      alt={image.alt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))
              }
            </div>
          )}
        </div>
      </section>
      
      {/* Real Stories. Real Impact. Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-8">Real Stories. Real Impact.</h3>
          
          {filteredImages.filter(img => !('size' in img)).length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-600 text-lg">No story images found matching your filter criteria.</p>
              <button 
                onClick={() => {setActiveFilter('all'); setSearchQuery('');}}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Show All Stories
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredImages
                .filter(img => !('size' in img))
                .map((story: GalleryImage) => {
                  // Define story details based on the image ID
                  const storyDetails = {
                    9: {
                      title: "Behind the Scenes: Manufacturing Excellence",
                      description: "Take a tour of our state-of-the-art manufacturing facility where precision engineering meets quality craftsmanship.",
                      location: "@ Kumar Generator House"
                    },
                    10: {
                      title: "Client Success Story: NTPC Power Plant",
                      description: "How our generators provided uninterrupted backup power for India's largest power generation facility.",
                      location: "@ NTPC Limited"
                    },
                    11: {
                      title: "Emergency Response: Cyclone Relief",
                      description: "Our mobile generator units deployed during natural disasters to provide critical power to emergency services.",
                      location: "@ Disaster Management Authority"
                    },
                    12: {
                      title: "Innovation Spotlight: Eco-Friendly Generators",
                      description: "Introducing our new line of environmentally conscious generators with reduced emissions and noise levels.",
                      location: "@ Green Energy Summit"
                    }
                  };
                  
                  const details = storyDetails[story.id as keyof typeof storyDetails] || {
                    title: story.alt,
                    description: "Learn more about our power solutions and services.",
                    location: "@ Kumar Power"
                  };
                  
                  return (
                    <div key={story.id} className="relative overflow-hidden rounded-lg group">
                      <img 
                        src={story.src}
                        alt={story.alt} 
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                      <div className="p-4 bg-white">
                        <h4 className="font-bold">{details.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{details.description}</p>
                        <p className="text-xs text-gray-500 mt-2">{details.location}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
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
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="bg-blue-600 text-white text-sm px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                  Book Your Consultation →
                </a>
                <a href="/downloads/kumar-power-media-kit.pdf" download className="border border-white text-white text-sm px-6 py-2 rounded hover:bg-white hover:text-black transition-colors">
                  Download Media Kit
                </a>
              </div>
            </div>
            <div className="h-72 overflow-hidden rounded">
              <img 
                src={gal5}
                alt="Industrial generator installation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
     
      
      <Footer />
    </div>
  );
};

export default PhotoGallery;
                 

