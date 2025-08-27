import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { useState, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion
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
import event1 from "@/assets/Events/DIWALI PARTY (100).jpg"
import event2 from "@/assets/Events/DIWALI PARTY (105).jpg"
import event3 from "@/assets/Events/DIWALI PARTY (24).jpg"
import event4 from "@/assets/Events/DIWALI PARTY (28).jpg"
import event5 from "@/assets/Events/DIWALI PARTY (29).jpg"
import event6 from "@/assets/Events/DIWALI PARTY (30).jpg"
import event7 from "@/assets/Events/DIWALI PARTY (31).jpg"
import event8 from "@/assets/Events/DIWALI PARTY (32).jpg"
import event9 from "@/assets/Events/DIWALI PARTY (33).jpg"
import event10 from "@/assets/Events/DIWALI PARTY (4).jpg"
import event11 from "@/assets/Events/DIWALI PARTY (5).jpg"
import event12 from "@/assets/Events/DIWALI PARTY (53).jpg"
import event13 from "@/assets/Events/DIWALI PARTY (54).jpg"
import event14 from "@/assets/Events/DIWALI PARTY (55).jpg"
import event15 from "@/assets/Events/DIWALI PARTY (56).jpg"
import event16 from "@/assets/Events/DIWALI PARTY (57).jpg"
import event17 from "@/assets/Events/DIWALI PARTY (58).jpg"
import event18 from "@/assets/Events/DIWALI PARTY (59).jpg"
import event19 from "@/assets/Events/DIWALI PARTY (6).jpg"
import event20 from "@/assets/Events/DIWALI PARTY (60).jpg"
import event21 from "@/assets/Events/DIWALI PARTY (61).jpg"
import event22 from "@/assets/Events/DIWALI PARTY (62).jpg"
import event23 from "@/assets/Events/DIWALI PARTY (63).jpg"
import event24 from "@/assets/Events/DIWALI PARTY (64).jpg"
import event25 from "@/assets/Events/DIWALI PARTY (65).jpg"
import event26 from "@/assets/Events/DIWALI PARTY (66).jpg"
import event27 from "@/assets/Events/DIWALI PARTY (67).jpg"
import event28 from "@/assets/Events/DIWALI PARTY (68).jpg"
import event29 from "@/assets/Events/DIWALI PARTY (69).jpg"
import event30 from "@/assets/Events/DIWALI PARTY (70).jpg"


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

const Masonry = ({ images }: { images: GalleryImage[] }) => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for individual images - sliding from right to left
  const itemVariants = {
    hidden: { opacity: 0, x: 50 }, // Start from the right
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      key={images.map(img => img.id).join('-')} // Force re-render on filter change
    >
      {images.map((image, index) => {
        // Calculate span classes based on image index for varying sizes
        const spanClasses = `
          ${index % 3 === 0 ? 'col-span-2 row-span-2' : ''}
          ${index % 5 === 0 ? 'md:col-span-2' : ''}
          ${index % 4 === 0 ? 'lg:row-span-2' : ''}
        `;

        return (
          <motion.div 
            key={image.id} 
            className={`relative group overflow-hidden rounded-lg ${spanClasses}`}
            variants={itemVariants}
          >
            <img 
              src={image.src}
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
                <p className="text-white/80 text-sm mt-1">
                  {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const SimpleImageGrid = ({ images }: { images: GalleryImage[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div 
          key={image.id} 
          className="relative overflow-hidden rounded-lg group"
        >
          <img 
            src={image.src}
            alt={image.alt} 
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
              <p className="text-white/80 text-sm mt-1">
                {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const PhotoGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);
  const [filteredStoryImages, setFilteredStoryImages] = useState<GalleryImage[]>([]);

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
      // Filter only gallery images (not story images) for the Featured Gallery
      let filtered = [...galleryImages];
      
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

      // Separately filter story images for the "Real Stories" section
      let filteredStories = [...storyImages];
      
      if (activeFilter !== "all") {
        filteredStories = filteredStories.filter(img => img.category === activeFilter);
      }
      
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredStories = filteredStories.filter(
          img => img.alt.toLowerCase().includes(query) || img.category.toLowerCase().includes(query)
        );
      }
      
      setFilteredStoryImages(filteredStories);
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
      
      {/* Featured Gallery - Modified to use SimpleImageGrid instead of SlidingGallery */}
      <section className="py-10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Featured Gallery</h2>
          
          <AnimatePresence mode="wait">
            {filteredImages.length === 0 ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <p className="text-white text-lg">No gallery images found matching your filter criteria.</p>
                <button 
                  onClick={() => {setActiveFilter('all'); setSearchQuery('');}}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Show All Images
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="gallery"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <SimpleImageGrid images={filteredImages} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
      {/* Real Stories. Real Impact. Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-8">Real Stories. Real Impact.</h3>
          
          {filteredStoryImages.length === 0 ? (
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
              {filteredStoryImages.map((story: GalleryImage) => {
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
          


