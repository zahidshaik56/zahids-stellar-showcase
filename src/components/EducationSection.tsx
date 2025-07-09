import { GraduationCap, Calendar, Award, BookOpen, Star } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University of Technology",
      duration: "2020 - 2024",
      grade: "8.5 CGPA",
      description: "Focused on software engineering, data structures, algorithms, and web development. Completed comprehensive coursework in modern programming languages and development methodologies.",
      highlights: [
        "Specialized in Software Engineering and Web Technologies",
        "Active member of Computer Science Society",
        "Participated in multiple hackathons and coding competitions",
        "Completed final year project on Web Application Development"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Software Engineering",
        "Web Technologies",
        "Computer Networks",
        "Operating Systems",
        "Machine Learning Fundamentals"
      ]
    }
  ];

  const achievements = [
    {
      title: "Dean's List",
      description: "Achieved academic excellence for 3 consecutive semesters",
      year: "2022-2023"
    },
    {
      title: "Best Project Award",
      description: "Recognized for outstanding final year project on web development",
      year: "2024"
    },
    {
      title: "Coding Competition Winner",
      description: "1st place in university-level programming contest",
      year: "2023"
    },
    {
      title: "Technical Society Member",
      description: "Active contributor to Computer Science Society events",
      year: "2021-2024"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="bg-hero-gradient bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and the foundation that shaped my passion for technology and software development.
          </p>
        </div>

        {/* Education Details */}
        <div className="mb-16">
          {education.map((edu, index) => (
            <div key={index} className="bg-card rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 p-6 lg:p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Education Info */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold mb-3">{edu.institution}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          {edu.grade}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {edu.description}
                      </p>

                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coursework */}
                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Relevant Coursework
                  </h4>
                  <div className="space-y-2">
                    {edu.coursework.map((course, i) => (
                      <div 
                        key={i}
                        className="px-3 py-2 bg-primary/5 border border-primary/10 rounded-lg text-sm hover:bg-primary/10 transition-colors"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Academic Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 p-6 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-primary">{achievement.title}</h4>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills from Education */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-6">
            Skills Gained Through <span className="bg-hero-gradient bg-clip-text text-transparent">Education</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Problem Solving", "Algorithm Design", "Software Architecture", 
              "Team Collaboration", "Research Methods", "Technical Writing",
              "Project Management", "Code Review", "Testing Strategies"
            ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;