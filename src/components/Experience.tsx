import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and establishing best practices.",
      achievements: [
        "Reduced page load time by 60% through optimization",
        "Led migration to microservices architecture",
        "Implemented CI/CD pipeline serving 1M+ users"
      ]
    },
    {
      type: "work",
      title: "Full Stack Developer",
      company: "Startup Solutions",
      period: "2020 - 2022",
      description: "Built and maintained multiple client projects from scratch. Worked across the entire stack with modern technologies.",
      achievements: [
        "Delivered 15+ projects on time and budget",
        "Increased client retention by 40%",
        "Implemented automated testing suite"
      ]
    },
    {
      type: "education",
      title: "Bachelor of Science in Computer Science",
      company: "University Name",
      period: "2016 - 2020",
      description: "Focused on software engineering, algorithms, and web technologies. Graduated with honors.",
      achievements: [
        "GPA: 3.8/4.0",
        "Dean's List all semesters",
        "Built award-winning capstone project"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="font-mono text-sm text-primary mb-3">$ cat experience.log</div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-border bg-card/30 p-6 md:p-8 hover-glow transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  {exp.type === "work" ? (
                    <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  ) : (
                    <GraduationCap className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-mono text-sm">{exp.company}</p>
                  </div>
                </div>
                <div className="font-mono text-sm text-muted-foreground md:text-right">
                  {exp.period}
                </div>
              </div>

              <p className="text-muted-foreground mb-4 ml-8">
                {exp.description}
              </p>

              <div className="ml-8 space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">▹</span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
