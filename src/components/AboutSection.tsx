import { Code, Heart, Target, MapPin, GraduationCap, Calendar } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Based in India",
      description: "Available for remote opportunities worldwide"
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Computer Science Graduate",
      description: "Fresh perspective with strong fundamentals"
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Frontend Specialist",
      description: "React, TypeScript, and modern web technologies"
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Passionate Learner",
      description: "Always exploring new technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate Frontend Developer and Software Engineer who loves crafting digital experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hello! I'm Zahid Hussain, a dedicated Frontend Developer and Software Engineer with a passion for creating 
              innovative web applications. I recently graduated with a degree in Computer Science and have been actively 
              building my skills through internships and personal projects.
            </p>
            
            <p className="text-lg leading-relaxed">
              My journey in technology started with curiosity and has evolved into a deep love for problem-solving through code. 
              I enjoy working with modern technologies like React, TypeScript, and Tailwind CSS to build responsive, 
              user-friendly applications that solve real-world problems.
            </p>

            <p className="text-lg leading-relaxed">
              When I'm not coding, I enjoy learning about new technologies, contributing to open-source projects, 
              and staying updated with the latest trends in web development. I believe in continuous learning and 
              always strive to write clean, maintainable code.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-card border shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Technologies I <span className="bg-hero-gradient bg-clip-text text-transparent">Love</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js", "Git", "HTML5", "CSS3", "Python", "Java"].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;