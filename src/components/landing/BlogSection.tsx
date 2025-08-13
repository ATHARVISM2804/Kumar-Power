import weather from "@/assets/blog3.png";
import sustainable from "@/assets/blog2.png";
import maintenance from "@/assets/blog1.png";
import { ArrowRight } from "lucide-react";

const BlogCard = ({ title, img, summary }: { title: string; img: string; summary: string }) => (
  <article className="rounded-xl bg-white overflow-hidden flex flex-col shadow-md">
    <img src={img} alt={title} className="h-48 w-full object-cover" loading="lazy" />
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="font-semibold text-lg mb-2 text-gray-900 line-clamp-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-6 flex-1">{summary}</p>
      <a href="#" className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:underline mt-auto">
        Read More <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  </article>
);

const BlogSection = () => {
  return (
    <section id="blogs" className="py-10 md:py-20 bg-black">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-3 text-white">Blogs</h2>
        <p className="text-white/80 mb-8 md:mb-12 text-base md:text-lg">
          Explore expert articles, case studies, and latest trends in industrial power solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <BlogCard title="Optimizing Generator Performance in Extreme Weather..." img={weather} summary="Learn how to maintain optimal generator efficiency during challenging weather scenarios with our expert" />
          <BlogCard title="The Future of Sustainable Power Solutions for Industrial Applicat..." img={sustainable} summary="Discover how renewable energy integration is transforming the landscape of industrial power backup systems." />
          <BlogCard title="Preventive Maintenance: Extending Your Generator’s Life..." img={maintenance} summary="Regular maintenance schedules and best practices that can significantly increase the operational life of your equipment." />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;