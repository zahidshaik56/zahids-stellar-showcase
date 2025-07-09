import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow animate-float">
                <img
                  src="/lovable-uploads/ce20fc75-99b1-4cd6-b535-aef3393b284f.png"
                  alt="Zahid Hussain"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-hero-gradient opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block bg-hero-gradient bg-clip-text text-transparent">
                Zahid Hussain
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Frontend Developer & Software Engineer
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about creating beautiful, functional web applications that solve real-world problems. 
              I specialize in React, TypeScript, and modern web technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-8"
              >
                <Mail className="mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 hover:shadow-elegant"
              >
                <Download className="mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;