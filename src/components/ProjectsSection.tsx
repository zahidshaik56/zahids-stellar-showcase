import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React and TypeScript. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive project organization.",
      technologies: ["React", "JavaScript", "CSS3", "Firebase"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful data visualizations.",
      technologies: ["React", "API Integration", "Chart.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects and skills with smooth animations and clean design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-card rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 overflow-hidden ${
                project.featured ? "lg:grid lg:grid-cols-2" : ""
              }`}
            >
              {/* Project Image */}
              <div className={`relative group ${project.featured ? "h-80" : "h-48"}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Project Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <Button variant="default" className="flex-1 sm:flex-none">
                    <Eye className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="flex-1 sm:flex-none">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="mr-2" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;