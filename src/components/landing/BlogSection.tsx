import weather from "@/assets/blog-extreme-weather.jpg";
import sustainable from "@/assets/blog-sustainable.jpg";
import maintenance from "@/assets/blog-maintenance.jpg";
import { Button } from "@/components/ui/button";

const BlogCard = ({ title, img, summary }: { title: string; img: string; summary: string }) => (
  <article className="rounded-lg border bg-card overflow-hidden flex flex-col">
    <img src={img} alt={title} className="h-40 w-full object-cover" loading="lazy" />
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 flex-1">{summary}</p>
      <div><Button variant="ghost" size="sm">Read more</Button></div>
    </div>
  </article>
);

const BlogSection = () => {
  return (
    <section id="blogs" className="py-16 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Blogs</h2>
        <p className="text-muted-foreground mb-8">Explore expert articles, case studies, and latest trends in industrial power solutions.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BlogCard title="Optimizing Generator Performance in Extreme Weather" img={weather} summary="Best practices to ensure reliable operation in snow, heat, and monsoon." />
          <BlogCard title="The Future of Sustainable Power for Industrial Applications" img={sustainable} summary="Cleaner energy pathways and long-term cost savings for enterprise." />
          <BlogCard title="Preventive Maintenance: Extending Your Generator's Life" img={maintenance} summary="How to maximize uptime and reduce TCO with proactive care." />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;