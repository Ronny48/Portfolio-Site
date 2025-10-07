const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vue.js", level: 75 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "GraphQL", level: 75 },
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "CI/CD", level: 85 },
        { name: "Terraform", level: 65 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 75 },
        { name: "Agile/Scrum", level: 85 },
        { name: "Testing", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="font-mono text-sm text-primary mb-3">$ ls -la skills/</div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="border border-border bg-card/30 p-6 md:p-8 hover-glow transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="text-primary">▸</span>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-mono text-foreground">{skill.name}</span>
                      <span className="text-sm font-mono text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-border bg-card/30 p-6 hover-glow">
          <div className="font-mono text-sm space-y-2">
            <div className="text-muted-foreground">
              <span className="text-primary">$</span> git log --oneline --graph
            </div>
            <div className="text-secondary">
              * Constantly learning and adapting to new technologies
            </div>
            <div className="text-muted-foreground">
              <span className="text-primary">$</span> echo "Always improving, always growing"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
