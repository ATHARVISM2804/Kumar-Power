const Trusted = () => {
  const brands = [
    "Honeywell",
    "Caritas",
    "Kashyap",
    "Continental",
    "SIS",
    "GAYATRI",
  ];
  return (
    <section aria-label="Trusted by" className="py-8">
      <div className="container mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-6">Trusted Across India's Largest Enterprises</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {brands.map((b) => (
            <div key={b} className="h-12 rounded-md border bg-card flex items-center justify-center text-muted-foreground text-sm">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;