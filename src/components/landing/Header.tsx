import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container mx-auto flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-3">
          <span className="text-xl font-extrabold tracking-tight text-primary">kumar</span>
          <span className="text-sm font-medium text-muted-foreground">Power Unlimited</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
          <li><a href="#range" className="hover:text-primary transition-colors">Generators</a></li>
          <li><a href="#solutions" className="hover:text-primary transition-colors">Power Solutions</a></li>
          <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
          <li><a href="#blogs" className="hover:text-primary transition-colors">Blogs</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" asChild>
            <a href="#contact" className="flex items-center gap-2"><Phone className="size-4"/> Enquire</a>
          </Button>
          <Button variant="default" asChild>
            <a href="#cta">Download Profile</a>
          </Button>
        </div>
        <button className="md:hidden p-2" aria-label="Open Menu">
          <Menu />
        </button>
      </nav>
    </header>
  );
};

export default Header;