import { Calendar, MapPin, Building2, Award } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "MotionCut",
      duration: "2024",
      location: "Remote",
      description: "Worked on developing web applications using modern technologies. Contributed to frontend development projects and collaborated with the development team to implement new features and improve user experience.",
      achievements: [
        "Developed responsive web components using React and TypeScript",
        "Collaborated with design team to implement UI/UX improvements",
        "Participated in code reviews and agile development processes",
        "Gained experience with modern development tools and workflows"
      ],
      skills: ["React", "TypeScript", "JavaScript", "CSS3", "Git"]
    },
    {
      title: "Web Development Intern",
      company: "Renu Sharma Foundation",
      duration: "2024",
      location: "Remote",
      description: "Contributed to the development of web applications for social impact initiatives. Focused on creating user-friendly interfaces and implementing responsive design principles.",
      achievements: [
        "Built and maintained responsive web pages",
        "Implemented interactive features to enhance user engagement",
        "Worked with team to deliver projects on time",
        "Applied best practices in web development and accessibility"
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"]
    }
  ];

  const certifications = [
    {
      title: "Software Engineering Virtual Internship",
      issuer: "MotionCut",
      year: "2024",
      type: "Internship Certificate"
    },
    {
      title: "Web Development Internship",
      issuer: "Renu Sharma Foundation", 
      year: "2024",
      type: "Internship Certificate"
    },
    {
      title: "Frontend Development",
      issuer: "Online Course Platform",
      year: "2024",
      type: "Course Certificate"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="bg-hero-gradient bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software development through internships and continuous learning.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            Professional Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                    {/* Company Info */}
                    <div className="lg:min-w-0 lg:flex-1">
                      <h4 className="text-xl font-bold text-primary mb-2">{exp.title}</h4>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 p-6 hover:scale-105"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">{cert.title}</h4>
                    <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-primary font-medium">{cert.type}</span>
                  <span className="text-xs text-muted-foreground">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;