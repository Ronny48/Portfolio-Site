import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "CryptoTracker Pro",
      description: "Real-time cryptocurrency tracking with advanced analytics and portfolio management.",
      tech: ["React", "Node.js", "WebSocket", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "DevOps Dashboard",
      description: "Comprehensive monitoring solution for cloud infrastructure with real-time alerts.",
      tech: ["Vue.js", "Python", "Docker", "PostgreSQL"],
      github: "#",
      live: "#",
    },
    {
      title: "AI Code Assistant",
      description: "Intelligent code completion and refactoring tool powered by machine learning.",
      tech: ["TypeScript", "TensorFlow", "Express", "Redis"],
      github: "#",
      live: "#",
    },
    {
      title: "Terminal Portfolio",
      description: "Interactive developer portfolio with terminal-inspired design and animations.",
      tech: ["React", "Tailwind", "Framer Motion", "Vercel"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary glow-text-green">$ cd</span> <span className="text-secondary glow-text-cyan">projects/</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-primary/30 bg-card p-6 hover:glow-border-cyan transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-card-foreground group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a 
                    href={project.github}
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.live}
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground font-mono text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 border border-primary/20 bg-primary/5 text-primary font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="font-mono text-xs text-muted-foreground pt-4 border-t border-border">
                <span className="text-primary">$</span> git status: <span className="text-secondary">deployed</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary/10 glow-border-cyan font-mono"
          >
            <Github className="w-4 h-4 mr-2" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
