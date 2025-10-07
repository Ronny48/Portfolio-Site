const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "primary",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Angular"]
    },
    {
      title: "Backend",
      color: "secondary",
      skills: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "DevOps",
      color: "accent",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "GitHub Actions"]
    },
    {
      title: "Tools",
      color: "primary",
      skills: ["Git", "VS Code", "Figma", "Postman", "Linux", "Vim"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary glow-text-green">$ ls</span> <span className="text-secondary glow-text-cyan">skills/</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="border border-primary/30 bg-card p-6 hover:glow-border-green transition-all duration-300"
            >
              <h3 className={`text-xl font-bold mb-4 terminal-line text-${category.color}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 border border-${category.color}/30 bg-${category.color}/5 text-${category.color} font-mono text-sm hover:bg-${category.color}/10 transition-colors cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-secondary/30 bg-card p-6">
          <div className="font-mono text-sm space-y-2">
            <div className="text-muted-foreground">
              <span className="text-primary">$</span> npm run dev
            </div>
            <div className="text-secondary animate-pulse">
              ⚡ Developer ready on all platforms...
            </div>
            <div className="text-muted-foreground">
              <span className="text-primary">$</span> git commit -m "Another day, another feature"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
