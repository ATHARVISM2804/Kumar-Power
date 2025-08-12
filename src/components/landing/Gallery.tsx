import stage from "@/assets/gallery-event-stage.jpg";
import network from "@/assets/gallery-networking.jpg";
import awards from "@/assets/gallery-awards.jpg";

const Gallery = () => {
  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[stage, network, awards].map((src, i) => (
            <img key={i} src={src} alt={`Gallery image ${i + 1}`} className="rounded-lg border w-full h-56 object-cover" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;