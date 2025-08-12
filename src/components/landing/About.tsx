import { CheckCircle2 } from "lucide-react";
import teamImg from "@/assets/gallery-networking.jpg";
import { Button } from "@/components/ui/button";

const About = () => {
  const features = [
    "Turnkey EPC for power back-up and prime power",
    "Kirloskar-authorized sales & service",
    "Nationwide support with rapid SLAs",
  ];
  const stats = [
    { k: "30+", v: "Years Experience" },
    { k: "5k+", v: "Enterprise Clients" },
    { k: "24/7", v: "Service Anywhere" },
    { k: "ISO", v: "9001:2015 Certified" },
  ];

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">About Kumar Power</h2>
          <p className="text-muted-foreground mb-6">Engineering India's energy backbone.</p>
          <p className="mb-6 text-sm md:text-base">
            For over 30 years, Kumar Power has engineered dependable power across industrial, commercial, and infrastructure projects. We deliver Kirloskar-certified solutions that combine performance, reliability, and nationwide support.
          </p>
          <ul className="space-y-2 mb-6">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm md:text-base">
                <CheckCircle2 className="text-accent mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.v} className="rounded-lg border p-4 text-center">
                <div className="text-xl font-bold text-primary">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild>
              <a href="#solutions">Explore Our Solutions</a>
            </Button>
          </div>
        </div>
        <div>
          <img src={teamImg} alt="Kumar Power team" className="rounded-lg border w-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default About;