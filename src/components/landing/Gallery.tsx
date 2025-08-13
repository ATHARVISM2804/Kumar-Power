import stage from "@/assets/combo pg.png";

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 ">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Photo Gallery</h2>
        <div className="w-full">
          <img
            src={stage}
            alt="Gallery image"
            className="w-full lg:h-[200vh] md:h-[80vh] object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;