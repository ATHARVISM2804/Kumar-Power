import { useState } from "react";

// These should be replaced with your actual image imports
const galleryImages = [
  "/src/assets/gallery1.png",
  "/src/assets/gallery2.png",
  "/src/assets/gallery3.png",
  "/src/assets/gallery4.png",
  "/src/assets/gallery5.png",
  "/src/assets/gallery6.png",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">Photo Gallery</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our installations, equipment, and team in action through these
            images
          </p>
        </div>

        {/* Gallery grid matching the exact layout in the screenshot */}
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {/* First row - 2 images with adjusted heights and widths */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {/* First image - wider */}
            <div
              className="sm:col-span-2 aspect-[16/9] overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => setSelectedImage(galleryImages[0])}
            >
              <img
                src={galleryImages[0]}
                alt="Gallery image 1"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Second image - adjusted to fill space properly */}
            <div
              className="h-full overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => setSelectedImage(galleryImages[1])}
            >
              <img
                src={galleryImages[1]}
                alt="Gallery image 2"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Second row - 3 images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {/* 3 images in second row */}
            {[2, 3, 4].map((index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => setSelectedImage(galleryImages[index])}
              >
                <img
                  src={galleryImages[index]}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Third row - 1 wide image */}
          <div
            className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02] aspect-[3/1]"
            onClick={() => setSelectedImage(galleryImages[5])}
          >
            <img
              src={galleryImages[5]}
              alt="Gallery image 6"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Lightbox for full-screen image viewing */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            ✕
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;