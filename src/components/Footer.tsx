import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <Github className="h-4 w-4" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="h-4 w-4" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="h-4 w-4" />, href: "#", label: "Email" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              Zahid Hussain
            </div>
            <p className="text-muted-foreground">
              Frontend Developer & Software Engineer passionate about creating beautiful, 
              functional web applications that make a difference.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  size="icon" 
                  className="hover:text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 zahid.hussain@email.com</p>
              <p>📍 India</p>
              <p>🌐 Available for remote work</p>
            </div>
            <Button 
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="mt-4"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Made with <Heart className="h-4 w-4 text-red-500" /> by Zahid Hussain
          </p>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={scrollToTop}
            className="hover:text-primary"
          >
            Back to Top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;