import { Code2, Zap, Target, Award } from "lucide-react";

const About = () => {
  const highlights = [
    { 
      icon: Code2, 
      label: "Clean Code", 
      description: "Writing maintainable, scalable solutions"
    },
    { 
      icon: Zap, 
      label: "Performance", 
      description: "Optimized for speed and efficiency"
    },
    { 
      icon: Target, 
      label: "User-Focused", 
      description: "Solutions that solve real problems"
    },
    { 
      icon: Award, 
      label: "Best Practices", 
      description: "Industry standards and patterns"
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="font-mono text-sm text-primary mb-3">$ cat about.md</div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="space-y-6">
            <div className="border border-border bg-card/30 p-6 md:p-8 hover-glow">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">▸</span> Who I Am
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-foreground/90">
                  Full-stack developer with a passion for building exceptional digital experiences. 
                  I specialize in modern web technologies and cloud-native architectures.
                </p>
                <p>
                  My journey in software development has equipped me with a comprehensive understanding 
                  of both frontend and backend systems, allowing me to deliver complete solutions 
                  from concept to deployment.
                </p>
                <p>
                  I thrive on solving complex problems and transforming ideas into robust, 
                  user-friendly applications that make a real impact.
                </p>
              </div>
            </div>

            <div className="border border-border bg-card/30 p-6 md:p-8 hover-glow">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-secondary">▸</span> What Drives Me
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">Continuous learning and staying ahead of tech trends</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">Building products that users love and businesses need</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">Collaborating with talented teams on challenging projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="border border-border bg-card/30 p-6 hover-glow text-center transition-all duration-300"
              >
                <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-lg font-bold text-foreground mb-2">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
