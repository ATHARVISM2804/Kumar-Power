const UseCases = () => {
  const items = [
    {
      title: "Power Outages and Load Shedding",
      text:
        "Deploy robust DG/UPS solutions to keep your business operational during grid failures and peak demand events.",
    },
    {
      title: "High-Demand Areas",
      text:
        "Ensure continuous power across metros, industrial parks, hospitals, and data-driven operations.",
    },
    {
      title: "Events and Functions",
      text:
        "Reliable temporary power for events and gatherings with on-site technicians and safety compliance.",
    },
    {
      title: "Critical Appliances",
      text:
        "Protect sensitive equipment with voltage conditioning and instant transfer solutions.",
    },
    {
      title: "Monsoon Season",
      text:
        "Engineered enclosures and drainage considerations for heavy rain and challenging climates.",
    },
    {
      title: "Urbanisation & Infrastructure",
      text:
        "Scalable backup for infrastructure expansion with remote monitoring and SLAs.",
    },
  ];

  return (
    <section className="py-16 bg-foreground text-primary-foreground">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Power in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((it) => (
            <article key={it.title} className="p-6 rounded-lg bg-background/5 border border-primary-foreground/10">
              <h3 className="font-semibold mb-2">{it.title}</h3>
              <p className="text-sm opacity-90">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;