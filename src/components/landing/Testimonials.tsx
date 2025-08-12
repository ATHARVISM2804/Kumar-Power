type Testimonial = { quote: string; name: string; role: string };

const Testimonials = () => {
  const items: Testimonial[] = [
    { quote: "Kumar Power ensured uninterrupted operations across our sites with responsive service.", name: "VP, Global FMCG", role: "Shokhpur" },
    { quote: "From sizing to commissioning, the team delivered flawlessly.", name: "Head Facilities", role: "Mfg. Group" },
    { quote: "Professional AMC and great uptime for mission-critical equipment.", name: "IT Manager", role: "Govt. Org" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-6">Real Stories. Real Power.</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <blockquote key={idx} className="rounded-lg border p-6 bg-card">
              <p className="text-sm md:text-base mb-4">“{t.quote}”</p>
              <footer className="text-xs text-muted-foreground">{t.name} — {t.role}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;