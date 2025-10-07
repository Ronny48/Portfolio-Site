import { Code2, Cpu, Database, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code2, label: "Lines of Code", value: "1M+", color: "text-primary" },
    { icon: Cpu, label: "Projects", value: "50+", color: "text-secondary" },
    { icon: Database, label: "Databases", value: "15+", color: "text-accent" },
    { icon: Globe, label: "Live Sites", value: "30+", color: "text-primary" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary glow-text-green">$ cat</span> <span className="text-secondary glow-text-cyan">about.txt</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-primary/30 bg-card p-6 hover:glow-border-green transition-all duration-300">
            <h3 className="text-xl font-bold text-primary mb-4 terminal-line">Bio</h3>
            <div className="space-y-3 text-muted-foreground font-mono text-sm">
              <p className="text-card-foreground">
                Passionate full-stack developer with expertise in building scalable web applications. 
                Specialized in modern JavaScript frameworks and cloud architecture.
              </p>
              <p>
                I transform complex problems into elegant solutions, leveraging cutting-edge technologies 
                to deliver exceptional user experiences.
              </p>
              <p className="text-secondary">
                Always learning, always building, always pushing boundaries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border border-primary/30 bg-card p-6 hover:glow-border-cyan transition-all duration-300 text-center"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-card-foreground mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-secondary/30 bg-card p-6 hover:glow-border-cyan transition-all duration-300">
          <h3 className="text-xl font-bold text-secondary mb-4 terminal-line">Philosophy</h3>
          <blockquote className="font-mono text-muted-foreground italic border-l-2 border-accent pl-4">
            "Code is poetry written in logic. Every function is a verse, every algorithm a stanza. 
            I craft digital symphonies that resonate with users and stand the test of time."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
